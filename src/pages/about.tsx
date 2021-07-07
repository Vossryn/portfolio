import Image from "next/image";

import Container from "../components/Container";
import LocationSvg from "../components/LocationSvg";
import SchoolSvg from "../components/SchoolSvg";
import DocumentSvg from "../components/DocumentSvg";
import ExternalLinkSvg from "../components/ExternalLinkSvg";

import styles from "../styles/about.module.scss";

import familyPhoto from "../../public/images/family-photo.jpg";

export default function About() {
  return (
    <div className="">
      <Container className="flex flex-col lg:flex-row flex-wrap">
        <div className="flex flex-col w-full lg:w-1/3">
          <div
            className={`${styles["clip-path-start"]} leading-relaxed text-4xl font-bold text-blue-300 relative mb-4 ml-3 pl-1 before:bg-blue-300 before:absolute before:top-0 before:bottom-0 before:-left-3 before:w-4 before:rounded-l-sm`}
          >
            About
          </div>
          <div className="rounded-2xl border-blue-300 border-2 p-3 flex">
            <Image
              src={familyPhoto}
              width={600}
              height={450}
              alt="Picture of my family"
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="my-4 flex lg:flex-col flex-wrap justify-between">
            <div className="flex items-center align-middle m-2">
              <LocationSvg className="mr-4 h-6 w-6" /> Winston-Salem, NC
            </div>
            <div className="flex items-center align-middle m-2">
              <SchoolSvg className="mr-4 h-6 w-6" /> ECPI University
            </div>
            <div className="flex items-center align-middle m-2">
              <DocumentSvg className="mr-4 h-6 w-6" />
              <a
                href="https://docs.google.com/document/d/1T8dMNeKkUQj0jxNnFAYOCLEvKRZfxbVzMhNjVrdMxNM/edit?usp=sharing"
                className="inline-block underline"
                target="_blank"
                title="Go to Reusme"
              >
                Resume
                <ExternalLinkSvg className="h-4 w-4 inline-block" />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 lg:pl-8">
          <p className="text-2xl pb-4">
            I’m a highly motivated programmer, always looking to learn more and striving to improve
            myself.
          </p>
          <p className="pb-4">
            I earned my associates in web development as well as my bachelors in network security by
            taking night classes while working a full time job. During this time I developed a love
            of JavaScript which has allowed me to explore all things coding from back end setups to
            front end design and creation. When I’m not spending my time with my loving wife and
            amazing step son I’m usually looking up new things to add to my knowledge base.
          </p>
          <p>
            Autem ab officiis doloremque impedit laborum obcaecati nemo? Dolorem accusantium, animi
            nulla quisquam velit aliquam expedita inventore et amet laboriosam tempore id delectus
            ratione ducimus harum enim exercitationem, reiciendis veritatis repudiandae ullam
            doloremque dolorum adipisci nam repellendus? Facere vero reprehenderit rem suscipit
            fugit! Reprehenderit iste aliquid perferendis mollitia quidem placeat!
          </p>
        </div>
      </Container>
      <Container className="mt-8">Info</Container>
      <Container className="mt-8">Info</Container>
    </div>
  );
}
