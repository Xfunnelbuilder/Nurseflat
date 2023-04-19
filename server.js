// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('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');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the client secret to the frontend.
const clientSecret = verificationSession.client_secret;