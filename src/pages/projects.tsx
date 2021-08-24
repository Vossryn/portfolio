import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Container from "../components/Container";
import ExternalLinkSvg from "../components/Svg/ExternalLinkSvg";

import styles from "../styles/projects.module.scss";

export default function projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-4 lg:gap-x-4">
      <Head>
        <title>Philip Portfolio - Projects</title>
      </Head>
      <Container className="w-full col-span-3">
        <div
          className={`${styles["clip-path-start"]} leading-relaxed text-4xl font-bold text-blue-300 relative ml-3 pl-1 uppercase before:bg-blue-300 before:absolute before:top-0 before:bottom-0 before:-left-3 before:w-4 before:rounded-l-sm`}
        >
          Projects
        </div>
      </Container>

      <Container className="lg:col-start-2 p-3">
        <Image
          src="/images/southern_district_website_screen_shot.png"
          width={950}
          height={475}
          className="w-full rounded-md pb-4"
        />
        <Link href="https://southerndistrictscouting.org/" passHref>
          <a target="_blank">
            <div className="text-xl text-blue-200 text-center pb-4">
              Southern District Scouting <ExternalLinkSvg className="inline-block h-5 w-5" />
            </div>
          </a>
        </Link>
        <div className="pb-4">
          This is a website that I put together to help the Scouting district that my father was a
          part of when he told me that their last one was dying.
        </div>
        <div className="pb-4">
          I built this site using React and Material-UI, and have it hosted on AWS. The primary gaol
          for me in the project was to try and produce something that could replace their old
          website that lost all support while lowerig the monthly cost of hosting it.
        </div>
      </Container>
    </div>
  );
}
