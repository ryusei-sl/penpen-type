import { Header } from "src/components/Header";
import { HexGame } from "src/components/HexGame";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Header />
      <h1>
        Typescript / Next.js / tailwindcssを勉強したことをアウトプットします
      </h1>
      <Link href="/">
        <a className=" text-blue-400 hover:text-blue-600">back to home</a>
      </Link>
      <HexGame />
    </div>
  );
};

export default About;
