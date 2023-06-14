import Link from "next/link";
import { LinkIcon, MapIcon } from "../icon";

export const HeroWhere = () => {
  return (
    <Link href="/edizioni/2023/dove-trovarci">
      <a className="flex items-center gap-1 text-6xl lg:text-[80px] text-sex-blue-8 font-bold">
        <MapIcon className="h-8 w-8 lg:w-[40px] lg:h-[40px]" />
        <h1>
          RAPALLO
        </h1>
        <LinkIcon />
      </a>
    </Link>
  );
};
