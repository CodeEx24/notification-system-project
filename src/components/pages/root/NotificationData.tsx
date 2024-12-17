import NotificationItem from '@/components/pages/root/item';
import { Button } from '@/components/ui/button';
import { useNotificationsStore } from '@/lib/notificationsStore';
import React from 'react';

export default function NotificationData() {
  const { notifications, markAllAsRead } = useNotificationsStore(); // Assuming you have this function in your store

  return (
    <div className="flex flex-col gap-4 border mt-4 border-r-4 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full py-4 px-4">
        <h2 className="text-xl font-bold">Notifications</h2>
        <Button
          variant={'outline'}
          onClick={markAllAsRead} // Call the function to mark all as read
          className=" hover:underline text-sm w-full md:w-auto"
          disabled={notifications.length === 0}
        >
          Mark all as read
        </Button>
      </div>

      <div>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}
