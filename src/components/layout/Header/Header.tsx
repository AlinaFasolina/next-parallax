import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { links } from "./links";

const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <header className={styles.header}>
      {links.map((item) => (
        <Link
          className={pathname === item.href ? styles.active : ""}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
