"use client";

const SCHEDULE_URL =
  "https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/2024%2Fprogramma.jpg";

export const DownloadSchedule = () => {
  const onClickDownload = () => {
    const link = document.createElement("a");
    link.href = SCHEDULE_URL;
    link.download = "programma-sextival-2024.jpg";
    link.target = "_blank";
    link.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <div
      className="py-4 px-8 lg:px-10 lg:py-10 rounded-2xl shadow-lg bg-brand-rose bg-opacity-80 backdrop-blur-sm text-white border-2 drop-shadow-md border-brand-rose text-xl font-bold absolute bottom-[5%] left-1/2 -translate-x-1/2 cursor-pointer z-10 text-center"
      onClick={onClickDownload}
    >
      SCARICA IL PROGRAMMA
    </div>
  );
};
