import Image from "next/image";
import { FC } from "react";

export const Headline: FC = () => {
  return (
    <div className="text-center m-4">
      <h1 className="text-red-600 font-bold text-4xl ">Hello TypeScript</h1>
      <Image src="/penpen.png" alt="penpen" width={300} height={300} />
    </div>
  );
};
