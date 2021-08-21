import Image from "next/image";
import Head from "next/head";

import Container from "../components/Container";
import SkillsCard from "../components/SkillsCard";

import LocationSvg from "../components/Svg/LocationSvg";
import SchoolSvg from "../components/Svg/SchoolSvg";
import DocumentSvg from "../components/Svg/DocumentSvg";
import ExternalLinkSvg from "../components/Svg/ExternalLinkSvg";
import CodeSvg from "../components/Svg/CodeSvg";
import ServerSvg from "./../components/Svg/ServerSvg/index";
import CollectionSvg from "../components/Svg/CollectionSvg";

import styles from "../styles/about.module.scss";

import familyPhoto from "../../public/images/family-photo.jpg";

const skills = [
  {
    icon: <CodeSvg className="w-10 h-10" />,
    title: "Frontend",
    skills: ["ReactJS/Redux", "AngularJS", "Javascript", "HTML", "CSS/SASS"],
  },
  {
    icon: <ServerSvg className="w-10 h-10" />,
    title: "Backend",
    skills: ["Sql Server", "Postgres", "MongoDB", "Git", "NodeJS"],
  },
  {
    icon: <CollectionSvg className="w-10 h-10" />,
    title: "Other",
    skills: ["Photoshop", "Figma", "Microsoft Office", "Agile Methodology Trained"],
  },
];

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10">
      <Head>
        <title>Philip Portfolio - Profile</title>
      </Head>
      <Container className="w-full">
        <div
          className={`${styles["clip-path-start"]} leading-relaxed text-4xl font-bold text-blue-300 relative ml-3 pl-1 uppercase before:bg-blue-300 before:absolute before:top-0 before:bottom-0 before:-left-3 before:w-4 before:rounded-l-sm`}
        >
          Profile
        </div>
      </Container>
      <Container className="lg:w-1/3">
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
              rel="noopener nofollow"
            >
              Resume
              <ExternalLinkSvg className="h-4 w-4 inline-block" />
            </a>
          </div>
        </div>
      </Container>
      <Container className="flex-1 lg:pl-8">
        <p className="text-3xl pb-4">
          I’m a highly motivated programmer, always looking to learn more and striving to improve my
          self where and when ever possible.
        </p>
        <p className="pb-4">
          My current job has me working on everything from the backend of code, NodeJS in a Linux
          environment, to the frontend of it via web pages and micro services built using
          AngularJS/Angular 1. My personal studies have been very focused on the front end world
          using React, and lately React with SSR via NextJS. I have been expanding my knowledge
          about web accessibility and responsive design taking into account browser specific
          interactions and requirements.
        </p>
        <p>
          I earned my associates in web development as well as my bachelors in network security by
          taking night classes while working a full time job. During this time I developed a love of
          JavaScript which has allowed me to explore all things coding from back end setups to front
          end design and creation. When I’m not spending my time with my loving wife and amazing
          step son I’m usually looking up new things to add to my knowledge base.
        </p>
      </Container>
      <Container className="w-full flex flex-col">
        <div
          className={`${styles["clip-path-start"]} leading-relaxed text-4xl font-bold text-blue-300 relative ml-3 pl-1 uppercase before:bg-blue-300 before:absolute before:top-0 before:bottom-0 before:-left-3 before:w-4 before:rounded-l-sm`}
        >
          Technical Skills
        </div>
      </Container>
      {skills.map((di, index) => (
        <SkillsCard key={index} icon={di.icon} title={di.title} skills={di.skills} />
      ))}
    </div>
  );
}
