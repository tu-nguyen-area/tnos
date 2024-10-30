import Image from 'next/image';

export default function SectionThree() {
  return (
    <>
      <div className="m-16">
        <p className="text-xl">Workstations and desktops</p>
        <p>Optimised AI/ML and cloud devops.</p>
        <p>The professional developer’s preference.</p>
        <div className="mt-6 sm:flex sm:justify-between">
          <Image className="p-3"
            src="/amimage1.svg"
            width={150}
            height={2}
            alt="Image"
          />
          <Image className="p-3"
            src="/asimage1.svg"
            width={150}
            height={2}
            alt="Image"
          />
          <Image className="p-3"
            src="/deimage1.svg"
            width={80}
            height={2}
            alt="Image"
          />
          <Image className="p-3"
            src="/giimage1.svg"
            width={150}
            height={2}
            alt="Image"
          />
          <Image className="p-3"
            src="/nimage1.svg"
            width={150}
            height={2}
            alt="Image"
          />
          <Image className="p-3"
            src="/iimage1.svg"
            width={100}
            height={2}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}
