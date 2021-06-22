import Image from "next/image";

import Container from "../components/Container";

import familyPhoto from "../../public/images/family-photo.jpg";

export default function About() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      <Container>
        <div className="flex-none">
          <div className="rounded-2xl border-blue-300 border-2 pt-3 pl-3 pr-3 pb-2">
            <Image
              src={familyPhoto}
              width={300}
              height={225}
              alt="Picture of my family"
              className="rounded-2xl"
            ></Image>
          </div>
        </div>
        <div className="ml-8">
          <div className="text-4xl border-b-2 font-bold border-blue-300 text-blue-300">
            About Me
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa beatae sequi
            dolorem quos repellat? Beatae ab rem voluptatibus, quas mollitia voluptatum
            reprehenderit distinctio ipsam provident tenetur dolores ex amet laborum ad? Beatae,
            nam. Delectus eligendi magnam quos in perspiciatis, corporis debitis nemo voluptatem
            nihil obcaecati error, sint, veniam alias.
          </div>
          <div>
            Necessitatibus voluptate, tenetur ea alias omnis facilis quisquam recusandae saepe
            placeat! Mollitia, in asperiores similique at facilis ullam omnis! Quos, temporibus, ad
            repellendus libero totam ipsum quisquam vitae eligendi cupiditate perspiciatis unde
            reiciendis magnam veniam! Repellendus facilis est, odit a, provident accusantium nihil
            omnis illo eveniet vitae asperiores officia voluptates?
          </div>
          <div>
            Autem ab officiis doloremque impedit laborum obcaecati nemo? Dolorem accusantium, animi
            nulla quisquam velit aliquam expedita inventore et amet laboriosam tempore id delectus
            ratione ducimus harum enim exercitationem, reiciendis veritatis repudiandae ullam
            doloremque dolorum adipisci nam repellendus? Facere vero reprehenderit rem suscipit
            fugit! Reprehenderit iste aliquid perferendis mollitia quidem placeat!
          </div>
        </div>
      </Container>
      <Container className="w-5/12">Skills</Container>
      <Container className="w-5/12">Skills</Container>
    </div>
  );
}
