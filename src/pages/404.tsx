import Image from "next/image";

const Page404 = () => (
  <div className="h-screen w-full flex  flex-col items-center justify-center">
    <Image
      alt="blob"
      src="https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/blob.png"
      width={530}
      height={475}
      loading="eager"
    />

    <h1 className="font-bold text-sex-blue-6 text-xl lg:text-3xl">
      WORK IN PROGRESS
    </h1>
    <h2 className="text-md lg:text-lg">Stay tuned</h2>
  </div>
);

export default Page404;
