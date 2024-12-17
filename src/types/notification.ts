export interface Notification {
  id: string;
  message: string;
  status: 'read' | 'unread';
}
