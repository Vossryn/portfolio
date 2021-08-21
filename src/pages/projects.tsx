import Head from "next/head";
import Container from "../components/Container";

export default function projects() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10">
      <Head>
        <title>Philip Portfolio - Profile</title>
      </Head>

      <Container>
        <div className="text-2xl text-blue-200 text-center">Under Construction - Comming Soon</div>
      </Container>
    </div>
  );
}
