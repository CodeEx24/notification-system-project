import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Notification } from '@/types/notification';

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  removeNotification: (id: string) => void;
  markAllAsRead: () => void;
}

export const useNotificationsStore = create<NotificationState>()(
  persist(
    (set) => ({
      notifications: [],
      addNotification: (notification) =>
        set((state) => {
          if (state.notifications.length >= 10) return state;
          return { notifications: [...state.notifications, notification] };
        }),
      markAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, status: 'read' } : n
          ),
        })),
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
      markAllAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((notification) => ({
            ...notification,
            status: 'read',
          })),
        })),
    }),
    {
      name: 'notifications-store',
    }
  )
);
