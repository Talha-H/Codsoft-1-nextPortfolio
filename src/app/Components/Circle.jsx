import Image from 'next/image'
const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -bottom-2 -right-16 mix-blend-color-dodge animate-pulse duration-75 z-10'>
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;