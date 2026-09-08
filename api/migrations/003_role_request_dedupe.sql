ALTER TABLE role_requests
  ADD COLUMN dedupe_hash text;

CREATE INDEX role_requests_dedupe_lookup
  ON role_requests(dedupe_hash, created_at DESC)
  WHERE dedupe_hash IS NOT NULL;

CREATE POLICY requests_dedupe_lookup ON role_requests
  FOR SELECT USING (current_setting('app.role_request', true) = 'true');
