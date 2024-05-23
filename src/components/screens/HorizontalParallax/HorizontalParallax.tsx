import { useParallax } from "react-scroll-parallax";
import { FC, useRef } from "react";
import Image from "next/image";
import Layout from "../../layout/Layout";
import styles from "./styles.module.scss";

const HorizontalParallaxPage: FC = () => {
  const parallaxBackground = useRef<HTMLDivElement>(null);
  const train = useParallax<HTMLDivElement>({
    speed: 500,
    targetElement: parallaxBackground.current ?? undefined,
  });

  const cloud = useParallax<HTMLDivElement>({
    speed: 100,
    targetElement: parallaxBackground.current ?? undefined,
  });

  return (
    <Layout title="Horizontal Parallax" description="Horizontal Parallax page">
      <div className={styles.wrapper} ref={parallaxBackground}>
        <div className={styles.sun}>
          <Image src="/Sun.png" height={120} width={120} alt="Sun" />
        </div>
        <div className={styles.train} ref={train.ref}>
          <Image src="/Train.png" height={350} width={700} alt="Train" />
        </div>
        <div className={styles.cloud} ref={cloud.ref}>
          <Image src="/Cloud.png" height={200} width={1000} alt="Cloud" />
        </div>
      </div>
    </Layout>
  );
};

export default HorizontalParallaxPage;
