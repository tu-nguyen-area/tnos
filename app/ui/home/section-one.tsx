import Image from 'next/image';
import Link from 'next/link';

export default function SectionOne() {
  return (
    <>
      <div className="m-10">

        <div className="sm:flex justify-between m-6">
          <div>
            <p>TNOS 0.0.4 is now available for download</p>
            <p className="">Discover the latest and greatest features in our most recent interim release.</p>
            <p>Delivering the latest Linux 6.10 kernel, extended support for the most recent toolchains, and new experimental security features.</p>
            <div className="mt-3">
              <Link className="p-3 transition-all hover:text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl" href="/version">Get TNOS</Link>
            </div>
          </div>
          <Image className="m-3"
            src="/image1.svg"
            width={120}
            height={2}
            alt="Image1"
          />
        </div>

        <div className="m-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

        <div className="m-6 sm:flex justify-between">
          <div>
            <p className="text-xl">Modern enterprise open source</p>
            <p>Security, support, and managed services from the publisher of TNOS. </p>
            <div className="mt-6">
              <Link className="p-3 transition-all hover:text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl" href="/version">Get TNOS Pro</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-3">
            <Image className="mt-6"
              src="/aimage1.svg"
              width={120}
              height={2}
              alt="Image1"
            />
            <Image className="mt-6"
              src="/gimage1.svg"
              width={120}
              height={2}
              alt="Image1"
            />
            <Image className="mt-6"
              src="/mimage1.svg"
              width={120}
              height={2}
              alt="Image1"
            />
            <Image className="mt-6"
              src="/nimage1.svg"
              width={120}
              height={2}
              alt="Image1"
            />
            <Image className="mt-6"
              src="/vimage1.svg"
              width={120}
              height={2}
              alt="Image1"
            />
            <Image className="mt-6"
              src="/wimage1.svg"
              width={120}
              height={2}
              alt="Image1"
            />
          </div>
          <div>
          </div>
        </div>

        <div className="m-3 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      </div>
    </>
  );
}
