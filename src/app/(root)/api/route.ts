import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const notification = {
    id: nanoid(),
    message: body.message,
    status: 'unread',
  };

  return NextResponse.json(notification);
}
