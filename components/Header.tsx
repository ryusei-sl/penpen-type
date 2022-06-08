import Image from "next/image";

export const Header = () => {
  return (
    <div className="text-center m-4">
      <h1 className="text-red-600 font-bold text-4xl ">Hello TypeScript</h1>
      <Image src="/penpen.png" alt="penpen" width={300} height={300} />
      <h2>ぺんぺんがtypescriptを勉強するよ</h2>
    </div>
  );
};
