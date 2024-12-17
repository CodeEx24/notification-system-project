'use client';

import { Notification } from '@/types/notification';
import { useNotificationsStore } from '@/lib/notificationsStore';
import { Button } from '../../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Props {
  notification: Notification;
}

export default function NotificationItem({ notification }: Props) {
  const { markAsRead, removeNotification } = useNotificationsStore();

  return (
    <div className="p-4 border rounded shadow flex flex-col md:flex-row gap-2 justify-between items-center overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full md:w-auto">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p
            className={`text-sm font-bold items-center flex gap-2 ${
              notification.status === 'read' && 'text-gray-700'
            }`}
          >
            Username
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={`size-2 rounded-full flex justify-center items-center ${
                      notification.status === 'unread'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  ></div>
                </TooltipTrigger>
                <TooltipContent className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p>{notification.status === 'unread' ? 'Unread' : 'Read'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <span
            className={`text-xs  text-center ${
              notification.status === 'unread'
                ? 'text-blue-500'
                : 'text-gray-500'
            } overflow-hidden overflow-ellipsis line-clamp-2`}
          >
            {notification.message}
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-2 md:flex-row gap-2 md:space-x-2 md:space-y-0 w-full md:w-auto items-center">
        <Button
          variant="default"
          onClick={() => markAsRead(notification.id)}
          className="text-xs w-full md:w-1/2 lg:w-auto"
        >
          Mark as Read
        </Button>
        <Button
          variant={'destructive'}
          onClick={() => removeNotification(notification.id)}
          className="text-xs w-full md:w-1/2 lg:w-auto"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
