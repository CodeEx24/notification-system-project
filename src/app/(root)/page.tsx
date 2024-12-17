'use client';

import SocialAndBackground from '@/components/pages/root/SocialAndBackground';
import AddNotification from '@/components/pages/root/AddNotification';
import NotificationData from '@/components/pages/root/NotificationData';

export default function NotificationsPage() {
  return (
    <main className=" grid grid-cols-1   md:grid-cols-2 h-auto md:h-screen">
      <SocialAndBackground />
      <div className="mb-6 p-8 md:h-screen  overflow-auto">
        <AddNotification />
        <NotificationData />
      </div>
    </main>
  );
}
