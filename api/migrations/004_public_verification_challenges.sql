CREATE TABLE public_verification_challenges (
  token_hash text PRIMARY KEY,
  expected_answer smallint NOT NULL CHECK (expected_answer BETWEEN 20 AND 198),
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL
);
CREATE INDEX public_verification_challenges_expiry ON public_verification_challenges(expires_at);
ALTER TABLE public_verification_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public_verification_challenges FORCE ROW LEVEL SECURITY;
CREATE POLICY verification_challenges_private ON public_verification_challenges
  FOR ALL USING (current_setting('app.verification_challenge', true) = 'true')
  WITH CHECK (current_setting('app.verification_challenge', true) = 'true');
