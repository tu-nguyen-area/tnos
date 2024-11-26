import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import Footer from '@/app/ui/footer';
import SectionOne from '@/app/ui/about/section-one';
import styles from '@/app/utils/about.module.css';

export default function Page() {
  return (
    <>

      <div className={`${styles.aboutBackground}`}>
        <Header />
        <BarNav />
        <div>
          <SectionOne />
          <h1>Section Two</h1>
          <h1>Section Three</h1>
        </div>
        <Footer />
      </div>

    </>
  );
}
