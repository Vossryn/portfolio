import Image from "next/image";

import Container from "../components/Container";
import LocationSvg from "../components/LocationSvg";
import SchoolSvg from "../components/SchoolSvg";

import familyPhoto from "../../public/images/family-photo.jpg";

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Container className="col-span-2 flex flex-row">
        <div className="flex-none flex flex-col">
          <div className="rounded-2xl border-blue-300 border-2 pt-3 pl-3 pr-3 pb-2">
            <Image
              src={familyPhoto}
              width={300}
              height={225}
              alt="Picture of my family"
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="my-4 flex items-center align-middle gap-x-2">
            <LocationSvg /> Winston-Salem, NC
          </div>
          <div className="flex items-center align-middle gap-x-2">
            <SchoolSvg /> ECPI University
          </div>
        </div>
        <div className="ml-8">
          <div className="text-4xl border-b-2 border-l-8 font-bold border-blue-300 text-blue-300 mb-4 pl-4">
            About Me
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa beatae sequi
            dolorem quos repellat? Beatae ab rem voluptatibus, quas mollitia voluptatum
            reprehenderit distinctio ipsam provident tenetur dolores ex amet laborum ad? Beatae,
            nam. Delectus eligendi magnam quos in perspiciatis, corporis debitis nemo voluptatem
            nihil obcaecati error, sint, veniam alias.
          </p>
          <p>
            Necessitatibus voluptate, tenetur ea alias omnis facilis quisquam recusandae saepe
            placeat! Mollitia, in asperiores similique at facilis ullam omnis! Quos, temporibus, ad
            repellendus libero totam ipsum quisquam vitae eligendi cupiditate perspiciatis unde
            reiciendis magnam veniam! Repellendus facilis est, odit a, provident accusantium nihil
            omnis illo eveniet vitae asperiores officia voluptates?
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
      <Container className="w-full">Skills</Container>
      <Container className="w-full">Skills</Container>
    </div>
  );
}
