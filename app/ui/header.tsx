import Link from 'next/link';
import BarNav from '@/app/ui/bar-nav';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex flex-row justify-between p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 text-white text-sm md:text-base">
      <Link href="/">
        TNOS
      </Link>
      <Link href="/download" className="hidden md:inline">
        Products
      </Link>
      <Link href="/home" className="hidden md:inline">
        Use cases
      </Link>
      <Link href="/" className="hidden md:inline">
        Support
      </Link>
      <Link href="/" className="hidden md:inline">
        About us
      </Link>
      <p>tu-nguyen@tu-nguyen.com</p>
    </section>

    <BarNav />
  </header>

  </>
  );
}
