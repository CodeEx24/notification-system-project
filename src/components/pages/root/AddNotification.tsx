import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { useNotificationsStore } from '@/lib/notificationsStore';
import React, { useState } from 'react';

export default function AddNotification() {
  const { addNotification } = useNotificationsStore();
  const { notifications } = useNotificationsStore();
  const { toast } = useToast();
  const [customMessage, setCustomMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const handleHelloNotification = async () => {
    if (notifications.length === 10) {
      toast({
        title: 'Limit reached!',
        description:
          'You have reached the maximum number of notifications allowed.',
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
      return;
    }

    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ message: 'Hello there!' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const newNotification = await response.json();

    if (response.ok) {
      addNotification(newNotification);
    } else {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  const handleCustomNotification = async () => {
    if (notifications.length === 10) {
      toast({
        title: 'Limit reached!',
        description:
          'You have reached the maximum number of notifications allowed.',
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
      return;
    }

    if (!customMessage.trim()) {
      setErrorMessage('Custom message cannot be empty');
      return;
    }

    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ message: customMessage }),
      headers: { 'Content-Type': 'application/json' },
    });

    const newNotification = await response.json();

    if (response.ok) {
      addNotification(newNotification);
      setCustomMessage(''); // Clear input field
    } else {
      alert('Failed to add notification');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Add a Notification
      </h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Label
            htmlFor="customMessage"
            className="block font-medium mb-2 text-sm"
          >
            Enter Custom Notification Message:
          </Label>
          <Input
            id="customMessage"
            type="text"
            value={customMessage}
            onChange={(e) => {
              setCustomMessage(e.target.value);
              if (e.target.value !== '') {
                setErrorMessage(null);
              }
            }}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your custom message here..."
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <div className="flex flex-col gap-4">
            <Button
              variant={'default'}
              onClick={handleHelloNotification}
              className=" px-4 py-2 rounded text-sm"
            >
              &quot;Hello there!&quot; Notification
            </Button>
            <Button
              variant={'secondary'}
              onClick={handleCustomNotification}
              className="px-4 py-2 rounded  text-sm"
              disabled={customMessage === '' && !errorMessage}
            >
              Add Custom Notification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
