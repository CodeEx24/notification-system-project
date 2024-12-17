import { SVGProps } from 'react';

export function NotificationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 22q-.825 0-1.412-.587T1 20V7h2v13h15v2zm4-4q-.825 0-1.412-.587T5 16V7.5q0-.525.238-1t.712-.75L14 1l2 1.175L7.2 7.35l6.8 4l6.75-4q.375-.225.763-.212t.737.212t.55.538t.2.762V16q0 .825-.587 1.413T21 18zm6.85-8l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4z"
      />
    </svg>
  );
}