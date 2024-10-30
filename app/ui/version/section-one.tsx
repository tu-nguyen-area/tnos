import Link from 'next/link';
import Image from 'next/image';

export default function SectionOne() {
  return (
    <>

      <div className="m-16">
        <div>
          <p className="text-xl">TNOS for desktops</p>
          <p>The number 120 open source operating system powers millions of PCs and laptops around the world.</p>
          <div>
            <Link className="hover:text-xl" href="/">Download TNOS Desktop</Link>
          </div>
        </div>
      </div>

    </>
  );
}
