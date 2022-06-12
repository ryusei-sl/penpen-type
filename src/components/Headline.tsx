import Image from "next/image";
import { FC } from "react";

export const Headline: FC = () => {
  return (
    <div className="text-center m-4">
      <h1 className="text-red-600 font-bold text-2xl ">Hello TypeScript</h1>
      <Image src="/penpen.png" alt="penpen" width={200} height={200} />
    </div>
  );
};
