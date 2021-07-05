import Link from "next/link";

import LogoSvg from "../components/LogoSvg";
import Container from "../components/Container";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-center flex-1">
      <Container className="flex flex-col lg:flex-row justify-center items-center">
        <LogoSvg
          className="flex-none w-1/2 h-1/2 lg:w-1/3 lg:h-1/3"
          width="100%"
          height="100%"
          gradient
        />
        <div className="z-10 text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-blue-500 pb-5 flex flex-col items-center justify-center">
          <div className="font-extrabold text-6xl lg:text-7xl">Philip Flynt</div>
          <div className="font-extrabold text-3xl py-4">Full Stack Developer</div>
          <div>
            <Link href="/contact" passHref>
              <a className={`inline-block ${styles.contactButton}`}>Contact Me</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
