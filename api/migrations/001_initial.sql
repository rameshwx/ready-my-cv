CREATE TABLE admin_account (
  id smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  username text NOT NULL UNIQUE CHECK (username ~ '^[a-z0-9._-]{3,64}$'),
  password_hash text NOT NULL,
  force_password_change boolean NOT NULL DEFAULT true,
  active boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE admin_sessions (
  id bigserial PRIMARY KEY,
  session_hash text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_used_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz
);
CREATE INDEX admin_sessions_lookup ON admin_sessions(session_hash) WHERE revoked_at IS NULL;

CREATE TABLE job_roles (
  id bigserial PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  active boolean NOT NULL DEFAULT true,
  archived_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE role_rule_versions (
  id bigserial PRIMARY KEY,
  job_role_id bigint NOT NULL REFERENCES job_roles(id),
  seniority text NOT NULL DEFAULT 'all',
  status text NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
  version integer NOT NULL,
  snapshot jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(job_role_id, seniority, version)
);
CREATE UNIQUE INDEX role_one_published_version
  ON role_rule_versions(job_role_id, seniority) WHERE status = 'published';

CREATE TABLE role_rules (
  id bigserial PRIMARY KEY,
  version_id bigint NOT NULL REFERENCES role_rule_versions(id) ON DELETE CASCADE,
  rule_key text NOT NULL,
  canonical_term text NOT NULL,
  required boolean NOT NULL,
  weight numeric(6,2) NOT NULL CHECK (weight > 0),
  category text NOT NULL,
  expected_section text,
  recommendation_id text
);
CREATE UNIQUE INDEX role_rules_version_key ON role_rules(version_id, rule_key);

CREATE TABLE rule_aliases (
  id bigserial PRIMARY KEY,
  rule_id bigint NOT NULL REFERENCES role_rules(id) ON DELETE CASCADE,
  alias text NOT NULL,
  UNIQUE(rule_id, alias)
);

CREATE TABLE rule_exclusions (
  id bigserial PRIMARY KEY,
  rule_id bigint NOT NULL REFERENCES role_rules(id) ON DELETE CASCADE,
  phrase text NOT NULL,
  UNIQUE(rule_id, phrase)
);

CREATE TABLE section_requirements (
  id bigserial PRIMARY KEY,
  version_id bigint NOT NULL REFERENCES role_rule_versions(id) ON DELETE CASCADE,
  section_name text NOT NULL,
  guidance text NOT NULL DEFAULT ''
);

CREATE TABLE recommendation_templates (
  id text PRIMARY KEY,
  copy text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  version integer NOT NULL DEFAULT 1
);

CREATE TABLE catalog_versions (
  version text PRIMARY KEY,
  engine_version text NOT NULL,
  status text NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  published_at timestamptz,
  created_by smallint REFERENCES admin_account(id)
);

CREATE TABLE catalog_snapshots (
  version text PRIMARY KEY REFERENCES catalog_versions(version),
  snapshot jsonb NOT NULL,
  published_at timestamptz NOT NULL,
  created_by smallint REFERENCES admin_account(id)
);

CREATE TABLE role_requests (
  id bigserial PRIMARY KEY,
  role_title text NOT NULL CHECK (length(role_title) BETWEEN 2 AND 100),
  seniority text CHECK (length(seniority) <= 30),
  industry text CHECK (length(industry) <= 200),
  desired_skills text CHECK (length(desired_skills) <= 500),
  reply_email text CHECK (length(reply_email) <= 254),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'planned', 'added', 'rejected', 'duplicate')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE aggregate_events (
  id bigserial PRIMARY KEY,
  event_name text NOT NULL CHECK (event_name IN ('scan_started', 'scan_completed', 'role_request_submitted')),
  role_slug text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE audit_logs (
  id bigserial PRIMARY KEY,
  action text NOT NULL,
  summary jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE site_settings (
  id smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  donation_url text,
  ads_enabled boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO site_settings(id) VALUES (1) ON CONFLICT DO NOTHING;

ALTER TABLE admin_account ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_rule_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE rule_aliases ENABLE ROW LEVEL SECURITY;
ALTER TABLE rule_exclusions ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommendation_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE catalog_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE catalog_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE aggregate_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Keep RLS active even if a deployment accidentally connects with a table
-- owner. The application should still use a separate non-owner role.
ALTER TABLE admin_account FORCE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions FORCE ROW LEVEL SECURITY;
ALTER TABLE job_roles FORCE ROW LEVEL SECURITY;
ALTER TABLE role_rule_versions FORCE ROW LEVEL SECURITY;
ALTER TABLE role_rules FORCE ROW LEVEL SECURITY;
ALTER TABLE rule_aliases FORCE ROW LEVEL SECURITY;
ALTER TABLE rule_exclusions FORCE ROW LEVEL SECURITY;
ALTER TABLE section_requirements FORCE ROW LEVEL SECURITY;
ALTER TABLE recommendation_templates FORCE ROW LEVEL SECURITY;
ALTER TABLE catalog_versions FORCE ROW LEVEL SECURITY;
ALTER TABLE catalog_snapshots FORCE ROW LEVEL SECURITY;
ALTER TABLE role_requests FORCE ROW LEVEL SECURITY;
ALTER TABLE aggregate_events FORCE ROW LEVEL SECURITY;
ALTER TABLE audit_logs FORCE ROW LEVEL SECURITY;
ALTER TABLE site_settings FORCE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION lookup_admin_credentials(input_username text)
RETURNS TABLE(username text, password_hash text, force_password_change boolean, active boolean)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  PERFORM set_config('app.admin_lookup', 'true', true);
  RETURN QUERY
    SELECT a.username, a.password_hash, a.force_password_change, a.active
    FROM admin_account a
    WHERE a.id = 1 AND a.username = input_username;
END;
$$;

CREATE OR REPLACE FUNCTION create_admin_session(input_hash text, input_expires timestamptz)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  PERFORM set_config('app.session_creation', 'true', true);
  INSERT INTO admin_sessions(session_hash, expires_at) VALUES (input_hash, input_expires);
END;
$$;

GRANT EXECUTE ON FUNCTION lookup_admin_credentials(text) TO PUBLIC;
GRANT EXECUTE ON FUNCTION create_admin_session(text, timestamptz) TO PUBLIC;

CREATE POLICY admin_account_private ON admin_account
  FOR ALL USING (
    current_setting('app.admin_authenticated', true) = 'true'
    OR current_setting('app.admin_lookup', true) = 'true'
  )
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY admin_sessions_private ON admin_sessions
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY admin_session_creation ON admin_sessions
  FOR INSERT WITH CHECK (current_setting('app.session_creation', true) = 'true');

CREATE POLICY roles_private ON job_roles
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY versions_private ON role_rule_versions
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY rules_private ON role_rules
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY aliases_private ON rule_aliases
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY exclusions_private ON rule_exclusions
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY sections_private ON section_requirements
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY recommendations_private ON recommendation_templates
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY catalog_versions_private ON catalog_versions
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY snapshots_public_read ON catalog_snapshots
  FOR SELECT USING (published_at IS NOT NULL);
CREATE POLICY snapshots_private_write ON catalog_snapshots
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY requests_public_insert ON role_requests
  FOR INSERT WITH CHECK (true);
CREATE POLICY requests_private_read ON role_requests
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY aggregate_public_insert ON aggregate_events
  FOR INSERT WITH CHECK (true);
CREATE POLICY aggregate_private_read ON aggregate_events
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY audit_private ON audit_logs
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
CREATE POLICY settings_public_read ON site_settings
  FOR SELECT USING (true);
CREATE POLICY settings_private_write ON site_settings
  FOR ALL USING (current_setting('app.admin_authenticated', true) = 'true')
  WITH CHECK (current_setting('app.admin_authenticated', true) = 'true');
