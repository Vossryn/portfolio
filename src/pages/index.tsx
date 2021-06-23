import Link from "next/link";

import LogoSvg from "../components/LogoSvg";
import Container from "../components/Container";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-center flex-1">
      <Container className="flex justify-center items-center">
        <LogoSvg className="" width="100%" height="100%" gradient />
        <div
          className={`flex-none z-10 text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-blue-500 text-center pb-5`}
        >
          <div className={`font-extrabold text-6xl sm:text-9xl`}>Philip Flynt</div>
          <div
            className={`text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-blue-500 text-center py-4`}
          >
            <div className="font-extrabold text-xl sm:text-3xl">Full Stack Developer</div>
          </div>
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
