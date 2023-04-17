import { useRouter } from "next/router";
import { useCallback } from "react";

export const HeroCta = () => {
  const router = useRouter();

  const onClickChangePage = useCallback(() => {
    router.push("/sostieni");
  }, [router]);

  return (
    <div
      onClick={onClickChangePage}
      className="mt-6 max-w-[250px] text-center py-4 px-6 bg-sex-red-4 bg-opacity-60 font-bold rounded-md text-white cursor-pointer"
    >
      SOSTIENI IL SEXTIVAL
    </div>
  );
};
