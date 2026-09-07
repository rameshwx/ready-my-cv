# Privacy model

PDF bytes, filenames, extracted text, evidence spans, scores, recommendations and visitor trajectories are scoped to browser memory. They are absent from URLs, cookies, browser persistence, backend routes, logs and database migrations. Reset replaces the result state and the parser zeroes its byte buffer. PDF.js is served locally. The server rejects undefined routes, unknown JSON fields and bodies over 128 KiB; there is no multipart or upload route.

Administrator cookies contain only random session material and are HttpOnly, SameSite Strict and Secure in production. Database session rows contain only peppered SHA-256 hashes.
