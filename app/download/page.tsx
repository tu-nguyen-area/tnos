import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import Footer from '@/app/ui/footer';
import SectionOne from '@/app/ui/download/section-one';
import SectionTwo from '@/app/ui/download/section-two';
import SectionThree from '@/app/ui/download/section-three';
import styles from '@/app/utils/download.module.css';

export default function Page() {
  return (
    <>

      <div className={`${styles.downloadBackground}`}>
        <Header />
        <BarNav />

        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>

        <Footer />
      </div>

    </>
  );
}
