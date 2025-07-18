import Link from 'next/link';
import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

export default function SectionOne() {
    return (
      <>
  
    <section>
      <div className="py-8 md:flex justify-between">
        <div>
          <p className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 bg-clip-text font-bold text-transparent text-center w-fit">TNOS for Desktops</p>
          <p className="text-black">The open source operating system powers billions of PCs and laptops around the world.</p>
          <p className="text-black">Ship with Xorg, Fluxbox, Nodejs, Firefox web browser.</p>
          <div className="my-6">
            <Link target="_blank" href="https://drive.google.com/file/d/1DrYeTutg63mTzDKwsC0tuGcFyYLBh39M/view">
              <button className="bg-black rounded-lg text-white p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-rose-500">TNOS Desktop</button>
            </Link>
          </div>
          <div className="py-6 text-black">
            <p className="text-xl">The secure, modern operating system used by billions</p>
            <div className="md:ml-6">
              <p><IconCheck stroke={2} className="inline-block"/>The preferred choice for professional web developers.</p>
              <p><IconCheck stroke={2} className="inline-block"/>Everything you need to daily drive.</p>
              <p><IconCheck stroke={2} className="inline-block"/>Private and secure and stable by design.</p>
              <p><IconCheck stroke={2} className="inline-block"/>Thousands of applications.</p>
              <p><IconCheck stroke={2} className="inline-block"/>Linux gaming with Proton and Wine.</p>
            </div>
          </div>
        </div>
        <div>
          <Image className="rounded-lg w-full"
            src="/pc1.svg"
            width={500}
            height={2}
            alt="image"
          />
        </div>
      </div>

      <div className="mt-3 p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500"></div>
    </section>
  
      </>
    );
  }
  
