let subscriptions = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    subscriptions.push(req.body);
    return res.status(201).json({ message: 'Subscription saved!' });
  }
  res.status(405).json({ message: 'Method not allowed' });
}

export { subscriptions };
