import Link from 'next/link';
import Image from 'next/image';
import ShimmerButton from '@/app/ui/shimmer-button';

export default function SectionTwo() {
  return (
    <>

      <div className="m-16">
        <div>
          <p className="text-xl">TNOS for servers</p>
          <p>The open source operating system powers billions of servers and workstations around the world.</p>
          <p>Ship with Nginx web server, PostgreSQL database management system, Nodejs JavaScript runtime environment</p>
          <div className="mt-6">
            <Link target="_blank" href="https://drive.google.com/file/d/1x0-GSJcWdhjn2ZlTAA8PgqZQ5zd23snw/view">
              <ShimmerButton>
                Download TNOS Server
              </ShimmerButton>
            </Link>
          </div>
        </div>
        <div className="pt-6">
          <Image className="rounded-xl"
            src="/server1.svg"
            width={800}
            height={2}
            alt="eImage"
          />
        </div>
          <div className="p-6">
            <p className="text-xl">The secure, modern and stable operating system used by billions</p>
            <div className="sm:pl-8">
              <p>&#9989; The preferred choice for professional server engineers.</p>
              <p>&#9989; Everything you need to config and run.</p>
              <p>&#9989; Private, secure and stable by design.</p>
              <p>&#9989; Thousands of applications for server.</p>
              <p>&#9989; Kernel Livepatch for 24/7 patching with no downtime.</p>
              <p>&#9989; Professional technical support team 24/365.</p>
            </div>
          </div>
      </div>

      <div className="m-12 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

    </>
  );
}
