import Link from 'next/link';
import Image from 'next/image';

const lLinks = [
  {
    name: "TNOS 0.0.7 - GCC 16.1.0 | Glibc 2.43 | Linux 6.19.1",
    url: "#",
    version: "Coming soon...",
  },
  {
    name: "TNOS 0.0.6 - GCC 15.2.0 | Glibc 2.42 | Linux 6.16.1",
    url: "https://drive.google.com/file/d/1KFXTdRmnAbG26VOXwQKumWVm3_T4iaUw/view",
    version: "TNOS Core 0.0.6",
  },
  {
    name: "TNOS 0.0.5 - GCC 15.1.0 | Glibc 2.41 | Linux 6.15.10",
    url: "https://drive.google.com/file/d/1bAa9eFaOcJxZPi6669AsUOFbyFsJ0KGs/view",
    version: "TNOS Core 0.0.5",
  },
  {
    name: "TNOS 0.0.4 - GCC 14.3.0 | Glibc 2.40 | Linux 6.10.6",
    url: "https://drive.google.com/file/d/1qQAIvm1n8Kmn6sIN9o2FCJg9Iae9aOQ1/view",
    version: "TNOS Core 0.0.4",
  },
  {
    name: "TNOS 0.0.3 - GCC 13.4.0 | Glibc 2.39 | Linux 6.7.5",
    url: "https://drive.google.com/file/d/19gA3jkp6Feri-xg4ovEE02sd-YvN18PG/view",
    version: "TNOS Core 0.0.3",
  },
  {
    name: "TNOS 0.0.2 - GCC 13.2.0 | Glibc 2.38 | Linux 6.4.12",
    url: "https://drive.google.com/file/d/1Omw7dhX5Gj8ietFAPuNtuBc89d9mT89-/view",
    version: "TNOS Core 0.0.2",
  },
  {
    name: "TNOS 0.0.1 - GCC 12.5.0 | Glibc 2.37 | Linux 6.1.12",
    url: "https://drive.google.com/file/d/1sn4Lkm7c0yoCKaH7sHLnYVq1P2sCjORT/view",
    version: "TNOS Core 0.0.1",
  },
  {
    name: "TNOS 0.0.0 - GCC 12.2.0 | Glibc 2.36 | Linux 5.19.9",
    url: "https://drive.google.com/file/d/1NOFcHEb8-OWSl8pVmzm6-9AYFfRtwLBD/view",
    version: "TNOS Core 0.0.0",
  },
];

export default function SectionThree() {
  return (
  <>

  <section className="my-12 text-black">
  <div>
    <p className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 bg-clip-text font-bold text-transparent text-center w-fit">TNOS Core</p>
    <p>The pure open source TNOS operating system.</p>
    <p>Ship with pure systems, ready to install any software, anytime, anywhere.</p>
    <div className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-12 w-full md:w-full justify-center items-center">
      {lLinks.map((link) => {
        return (
          <div key={link.version}>
            <div className="md:flex justify-center">
              <p className="py-6">{link.name}</p>
            </div>
            <div className="md:flex justify-center">
              <Link className="md:w-fit" target="_blank" href={link.url}>
                <button className="bg-black rounded-lg text-white p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-rose-500">{link.version}</button>
              </Link>
            </div>
          </div>
        );
      })}
      </div>
      </div>
      <div className="md:flex md:gap-32 py-6 justify-between">
        <div className="py-8">
          <Image className="rounded-lg"
            src="/core1.png"
            width={400}
            height={2}
            alt="Image1"
          />
        </div>
        <div className="py-8 w-full md:w-auto">
          <Image className="rounded-lg"
            src="/core7.png"
            width={580}
            height={2}
            alt="Image1"
          />
        </div>
        <div className="py-8 w-full md:w-auto">
          <Image className="rounded-lg"
            src="/core2.png"
            width={390}
            height={2}
            alt="Image1"
          />
        </div>
      </div>
      <div>
        <p className="text-xl pb-10">Ready for IOT, Artificial Intelligence, Supercomputer, Cloud Computing, Distributed Computing, Computer Vision, Quantum Computing and more...</p>
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          <div>
            <Image className="rounded-lg"
              src="/core3.png"
              width={500}
              height={2}
              alt="image"
            />
          </div>
          <div>
            <Image className="rounded-lg"
              src="/core4.jpg"
              width={500}
              height={2}
              alt="image"
            />
          </div>
          <div>
            <Image className="rounded-lg"
              src="/core5.png"
              width={500}
              height={2}
              alt="image"
            />
          </div>
          <div>
            <Image className="rounded-lg"
              src="/core6.jpg"
              width={1000}
              height={2}
              alt="image"
            />
          </div>
        </div>
      </div>
    <div className="text-center my-8">
      <p className="text-xl md:text-3xl">Everything you think, everything you can imagine...</p><div><Link href="/" className="text-3xl md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 bg-clip-text font-bold text-transparent">Start here</Link></div>
    </div>
  </section>

  </>
  );
}
