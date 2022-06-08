import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-8 h-[48px] bg-indigo-200">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <ul>
          <li>
            <Link href="/about">
              <a className="p-2">このサイトについて</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
