import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import Footer from '@/app/ui/footer';
import SectionOne from '@/app/ui/home/section-one';
import SectionTwo from '@/app/ui/home/section-two';
import SectionThree from '@/app/ui/home/section-three';
import styles from '@/app/utils/home.module.css';

export default function Page() {
  return (
    <>

      <div className={`${styles.homeBackground}`}>
        <Header />
        <BarNav />

        <div>
          <SectionOne />
        </div>

        <div>
          <SectionTwo />
        </div>

        <div>
          <SectionThree />
        </div>

        <Footer />

      </div>
    </>
  );
}
