import Link from 'next/link';
import Image from 'next/image';

export default function SectionOne() {
  return (
    <>

      <div className="m-16 sm:flex justify-between">
        <div>
          <p className="text-xl">TNOS for desktops</p>
          <p>The open source operating system powers billions of PCs and laptops around the world.</p>
          <p>Ship with Xorg, Fluxbox, Nodejs, Firefox web browser.</p>
          <div className="mt-6 mb-6">
            <Link className="p-3 sm:pl-12 sm:pr-12 transition-all hover:text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl" target="_blank" href="https://drive.google.com/file/d/1USu9C8GpXMU-I___rYb8rcsK2rRozwFN/view">Download TNOS Desktop</Link>
          </div>
          <div className="p-6">
            <p className="text-xl">The secure, modern operating system used by billions</p>
            <div className="sm:ml-8">
              <p>&#9989; The preferred choice for professional web developers.</p>
              <p>&#9989; Everything you need to daily drive.</p>
              <p>&#9989; Private and secure and stable by design.</p>
              <p>&#9989; Thousands of applications.</p>
              <p>&#9989; Linux gaming with Proton and Wine.</p>
            </div>
          </div>
        </div>
        <div>
          <Image className="rounded-xl"
            src="/pc1.svg"
            width={500}
            height={2}
            alt="image"
          />
        </div>
      </div>

      <div className="m-12 p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

    </>
  );
}
