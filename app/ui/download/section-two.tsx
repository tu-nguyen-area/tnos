import Link from 'next/link';
import Image from 'next/image';

export default function SectionTwo() {
  return (
    <>

      <div className="m-16">
        <div>
          <p className="text-xl">TNOS for servers</p>
          <p>The open source operating system powers millions of servers and workstations around the world.</p>
          <p>Ship with Nginx web server, PostgreSQL database management system, Nodejs JavaScript runtime environment</p>
          <div className="mt-6">
            <Link className="p-3 sm:pl-14 sm:pr-14 transition-all hover:text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl" href="#">Download TNOS Server</Link>
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
      </div>

      <div className="m-12 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

    </>
  );
}
