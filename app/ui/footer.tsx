import Link from 'next/link';

export default function Footer() {
  return (
  <>

  <footer className="flex justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 text-white p-6 text-sm md:text-base">
    <section>
      <p>Privacy Polity | Terms of Use</p>
      <p>A product from <Link href="https://tu-nguyen.org/" target="_blank">TN ADVANCEMENT</Link></p>
      <p>&#169; 2025 TN OS Project. All rights reserved.</p>
    </section>
  </footer>

  </>
  );
}
