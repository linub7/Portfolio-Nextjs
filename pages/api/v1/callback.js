import auth0 from '@/utils/auth0.js';

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 400).end(err.message);
  }
}
