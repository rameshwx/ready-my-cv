ALTER TABLE aggregate_events
  DROP CONSTRAINT IF EXISTS aggregate_events_event_name_check;

ALTER TABLE aggregate_events
  ADD CONSTRAINT aggregate_events_event_name_check CHECK (
    event_name IN (
      'scan_started',
      'scan_completed',
      'role_request_submitted',
      'analysis_started',
      'analysis_fast_completed',
      'analysis_queued',
      'analysis_completed',
      'analysis_failed',
      'analysis_expired',
      'analysis_cancelled',
      'email_sent',
      'email_failed'
    )
  );

CREATE TABLE analysis_jobs (
  id uuid PRIMARY KEY,
  handle_hash text NOT NULL UNIQUE,
  status text NOT NULL CHECK (status IN (
    'queued',
    'processing',
    'awaiting_email',
    'email_pending',
    'email_sending',
    'completed',
    'failed',
    'expired',
    'cancelled'
  )),
  role_slug text NOT NULL CHECK (role_slug ~ '^[a-z0-9-]{2,80}$'),
  seniority text CHECK (seniority IS NULL OR seniority IN ('all', 'junior', 'mid', 'senior', 'lead')),
  catalog_version text NOT NULL,
  pdf_payload bytea,
  document_payload bytea,
  report_payload bytea,
  email_payload bytea,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL,
  available_at timestamptz NOT NULL DEFAULT now(),
  lease_expires_at timestamptz,
  lease_token_hash text,
  attempt_count integer NOT NULL DEFAULT 0 CHECK (attempt_count >= 0),
  email_attempt_count integer NOT NULL DEFAULT 0 CHECK (email_attempt_count >= 0),
  safe_error_code text CHECK (safe_error_code IS NULL OR safe_error_code ~ '^[A-Z0-9_]{2,64}$'),
  email_sent_at timestamptz,
  processing_started_at timestamptz,
  completed_at timestamptz,
  CHECK (expires_at > created_at),
  CHECK (status NOT IN ('queued', 'processing') OR pdf_payload IS NOT NULL),
  CHECK (status <> 'email_sending' OR email_payload IS NOT NULL),
  CHECK (status <> 'awaiting_email' OR report_payload IS NOT NULL)
);

CREATE INDEX analysis_jobs_queue_lookup
  ON analysis_jobs(status, available_at, created_at)
  WHERE status IN ('queued', 'email_pending');

CREATE INDEX analysis_jobs_lease_lookup
  ON analysis_jobs(lease_expires_at)
  WHERE status IN ('processing', 'email_sending');

CREATE INDEX analysis_jobs_expiry_lookup
  ON analysis_jobs(expires_at);

ALTER TABLE analysis_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE analysis_jobs FORCE ROW LEVEL SECURITY;

CREATE POLICY analysis_jobs_request_access ON analysis_jobs
  FOR ALL USING (
    current_setting('app.analysis_request', true) = 'true'
    OR current_setting('app.analysis_worker', true) = 'true'
    OR current_setting('app.admin_authenticated', true) = 'true'
  )
  WITH CHECK (
    current_setting('app.analysis_request', true) = 'true'
    OR current_setting('app.analysis_worker', true) = 'true'
    OR current_setting('app.admin_authenticated', true) = 'true'
  );

COMMENT ON TABLE analysis_jobs IS
  'Temporary encrypted analysis payloads. Purge after completion, cancellation, expiry, or permanent failure.';
COMMENT ON COLUMN analysis_jobs.handle_hash IS
  'One-way hash of a temporary high-entropy browser job handle; never store the raw handle.';
COMMENT ON COLUMN analysis_jobs.pdf_payload IS
  'Application-encrypted PDF bytes; never plaintext.';
COMMENT ON COLUMN analysis_jobs.document_payload IS
  'Application-encrypted parsed CV document; never plaintext.';
COMMENT ON COLUMN analysis_jobs.report_payload IS
  'Application-encrypted verified report; never plaintext.';
COMMENT ON COLUMN analysis_jobs.email_payload IS
  'Application-encrypted user email; never plaintext.';
