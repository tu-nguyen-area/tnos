import Link from 'next/link';
import Image from 'next/image';

export default function SectionThree() {
  return (
    <>

      <div className="m-16">
        <div>
          <p className="text-xl">TNOS core</p>
          <p>The pure open source TNOS operating system.</p>
          <p>Ship with pure systems, ready to install any software, anytime, anywhere.</p>
          <div className="mt-6 flex flex-col gap-10 sm:w-96">
            <p className="text-sm">TNOS 0.0.4 - GCC 14.2.0 | Glibc 2.40 | Linux 6.10.6</p>
            <Link className="p-3 transition-all hover:text-xl text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1UhISg507ELN7vKS-RuMM-jb-UlBbBiyC/view">
              Download TNOS Core 0.0.4
            </Link>
            <p className="text-sm">TNOS 0.0.3 - GCC 13.2.0 | Glibc 2.39 | Linux 6.7.4</p>
            <Link className="p-3 transition-all hover:text-xl text-white text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1mX8X54PTBnt7Yy2HLBeJVAgAfJXKtgZJ/view">
              Download TNOS Core 0.0.3
            </Link>
            <p className="text-sm">TNOS 0.0.2 - GCC 13.2.0 | Glibc 2.38 | Linux 6.4.12</p>
            <Link className="p-3 transition-all hover:text-xl text-white text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1_b3YebNa8ANPAdySGXD4Bh32n1wzu1th/view">
              Download TNOS Core 0.0.2
            </Link>
            <p className="text-sm">TNOS 0.0.1 - GCC 12.2.0 | Glibc 2.37 | Linux 6.1.11</p>
            <Link className="p-3 transition-all hover:text-xl text-white text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1QB4gwNbPBs1h8MbiKkHwuiOdv6xf8A1s/view">
              Download TNOS Core 0.0.1
            </Link>
            <p className="text-sm">TNOS 0.0.0 - GCC 12.2.0 | Glibc 2.36 | Linux 5.19.2</p>
            <Link className="p-3 transition-all hover:text-xl text-white text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1xTDtXPD5D_ejMQuvbWGGq4rldm6yUZGi/view">
              Download TNOS Core 0.0.0
            </Link>
          </div>
        </div>
        <div className="sm:flex justify-between p-6">
          <div className="pb-3">
            <Image className="rounded-xl"
              src="/core1.png"
              width={400}
              height={2}
              alt="Image1"
            />
          </div>
          <div className="p-3">
            <Image className="rounded-xl"
              src="/core2.png"
              width={400}
              height={2}
              alt="Image1"
            />
          </div>
        </div>
        <div className="p-6">
          <p className="text-xl">Ready for IOT, Artificial Intelligence, Supercomputer and more...</p>
          <div className="flex flex-col gap-10">
            <div>
              <Image className="rounded-xl"
                src="/core3.png"
                width={800}
                height={2}
                alt="image"
              />
            </div>
            <div>
              <Image className="rounded-xl"
                src="/core4.jpg"
                width={800}
                height={2}
                alt="image"
              />
            </div>
            <div>
              <Image className="rounded-xl"
                src="/core5.png"
                width={800}
                height={2}
                alt="image"
              />
            </div>
            <div>
              <Image className="rounded-xl"
                src="/core6.jpg"
                width={800}
                height={2}
                alt="image"
              />
            </div>
          </div>
        </div>
      <div>
        <p className="text-2xl">Everything you think, everything you can imagine... <Link href="/">Start here</Link>.</p>
      </div>

      </div>

    </>
  );
}
