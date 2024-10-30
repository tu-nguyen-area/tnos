import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import Footer from '@/app/ui/footer';
import SectionOne from '@/app/ui/version/section-one';
import SectionTwo from '@/app/ui/version/section-two';
import SectionThree from '@/app/ui/version/section-three';

export default function Page() {
  return (
    <>

      <div>
        <Header />
        <BarNav />

        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>

      </div>

      <Footer />

    </>
  );
}
