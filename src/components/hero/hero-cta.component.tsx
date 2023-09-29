'use client';

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const HeroCta = () => {
  const router = useRouter();

  const onClickChangePage = useCallback(() => {
    router.push("/sostieni");
  }, [router]);

  return (
    <div
      onClick={onClickChangePage}
      className="mt-6 max-w-[250px] text-center py-4 px-6 bg-sex-blue-2 bg-opacity-60 font-bold rounded-md text-sex-blue-4 text-opacity-60 cursor-pointer"
    >
      SOSTIENI IL SEXTIVAL
    </div>
  );
};
