import SocialLinks from '@/components/SocialLinks';
import { socialLinks } from '@/const/socialLink';
import React from 'react';
import Background from '@/public/svg/background.svg';
import Image from 'next/image';

export default function SocialAndBackground() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-700 via-blue-900 to-blue-800 bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center relative">
      <div className="p-8 py-16 text-white relative z-10 flex flex-col  items-center gap-4 h-full justify-center ">
        <div className="flex flex-col justify-center items-center gap-8    ">
          <h1 className="text-center text-3xl md:text-4xl font-bold">
            Welcome to Notifications
          </h1>{' '}
          <Image
            src={Background.src}
            width={200}
            height={200}
            alt="Background Image"
            className="w-[400px] "
          />
        </div>
        <div>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
}
