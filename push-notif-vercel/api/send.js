import webpush from 'web-push';
import { subscriptions } from './save-subscription.js';

webpush.setVapidDetails(
  'mailto:xsender20@gmail.com',
  'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQkdKTzFoS1FjbDdLdTN0UklXRjlBdWRBNW95WQprcUJxcm1lN0V4dk9IbC81VmVMQjJTVnY5bElhUGtlMHZpSW5nbXNoNUxYSWcxbE5FQzlObGpCQld3PT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg',
  'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ2NDU2VQODlRbGVoRENnYTcKcEZQOW44a0J0ekd0UkM1S1lrTFBBN0Noa2lPaFJBTkNBQVFFWWs3V0VwQnlYc3E3ZTFFaFlYMEM1MERtakppUwpvR3F1WjdzVEc4NGVYL2xWNHNIWkpXLzJVaG8rUjdTK0lpZUNheUhrdGNpRFdVMFFMMDJXTUVGYgotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg'
);

export default async function handler(req, res) {
  const payload = JSON.stringify({
    title: 'Alert!',
    body: req.body?.message || 'New alert from our site!',
    icon: '/icon.png'
  });

  await Promise.all(subscriptions.map(sub => webpush.sendNotification(sub, payload)));
  res.json({ success: true, sent: subscriptions.length });
}
