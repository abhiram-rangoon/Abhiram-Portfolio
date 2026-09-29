import { json } from '@remix-run/node';

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export async function action({ request }) {
  const formData = await request.formData();
  const isBot = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  const errors = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Fire Google Sheet webhook — non-blocking
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK;

  if (webhookUrl) {
    const payload = new URLSearchParams({
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Fire and forget — don't await so the user gets an instant response
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
    }).catch(err => console.error('Google Sheet webhook error:', err));
  }

  return json({ success: true });
}
