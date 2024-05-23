import { FC, useRef } from "react";
import styles from "./styles.module.scss";
import Layout from "../../layout/Layout";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import ContactForm from "../../contactForm/ContactForm";

const Home: FC = () => {
  const parallaxBackground = useRef<HTMLDivElement>(null);
  const ballonFirst = useParallax<HTMLDivElement>({
    speed: 120,
    targetElement: parallaxBackground.current ?? undefined,
  });
  const ballonSecond = useParallax<HTMLDivElement>({
    speed: 50,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const ballonThird = useParallax<HTMLDivElement>({
    speed: 200,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const ballonFourth = useParallax<HTMLDivElement>({
    speed: 200,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const cloudFirst = useParallax<HTMLDivElement>({
    speed: 100,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const cloudSecond = useParallax<HTMLDivElement>({
    speed: 200,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const cloudThird = useParallax<HTMLDivElement>({
    speed: 400,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const cloudFourth = useParallax<HTMLDivElement>({
    speed: 450,
    targetElement: parallaxBackground.current ?? undefined,
  });

  return (
    <Layout title="Homepage" description="Main page">
      <div ref={parallaxBackground} className={styles["parallax-wrapper"]}>
        <h1 className={styles["parallax-title"]}>Next.js Parallax Scroll</h1>
        <div className={styles["balloon-first"]} ref={ballonFirst.ref}>
          <Image layout="fill" src="/balloon1.png" alt="Balloon" />
        </div>
        <div className={styles["balloon-second"]} ref={ballonSecond.ref}>
          <Image src="/balloon2.png" width={200} height={200} alt="Balloon" />
        </div>
        <div className={styles["balloon-third"]} ref={ballonThird.ref}>
          <Image src="/balloon3.png" width={100} height={120} alt="Balloon" />
        </div>

        <div className={styles["balloon-fourth"]} ref={ballonFourth.ref}>
          <Image src="/balloon4.png" width={300} height={300} alt="Balloon" />
        </div>

        <div className={styles["cloud-first"]} ref={cloudFirst.ref}>
          <Image src="/Cloud2.png" width={300} height={200} alt="Cloud" />
        </div>
        <div className={styles["cloud-second"]} ref={cloudSecond.ref}>
          <Image src="/Cloud2.png" width={400} height={300} alt="Cloud" />
        </div>
        <div className={styles["cloud-third"]} ref={cloudThird.ref}>
          <Image src="/Cloud2.png" width={300} height={200} alt="Cloud" />
        </div>
        <div className={styles["cloud-fourth"]} ref={cloudFourth.ref}>
          <Image src="/Cloud2.png" width={400} height={300} alt="Cloud" />
        </div>

        <div className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>

        <div className={styles["contact-form"]}>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
