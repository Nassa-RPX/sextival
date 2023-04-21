const Radials = () => {
  return (
    <>
      <div className="absolute top-[-400px] right-[-400px] lg:right-[-200px] rounded-full h-[800px] w-[800px] bg-gradient-radial from-blue-900 via-transparent to-transparent opacity-30 pointer-events-none overflow-hidden z-[-10]" />

      <div className="absolute bottom-[-150px] lg:bottom-[-400px] left-[-400px] lg:left-[-200px] rounded-full h-[800px] w-[800px] bg-gradient-radial from-red-400 via-transparent to-transparent opacity-40 pointer-events-none overflow-hidden z-[-10]" />
    </>
  );
};

export default Radials;
