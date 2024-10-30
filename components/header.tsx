import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-white border-b border-[#000000]/[10%] pt-[18px] pb-[12px] pl-[47px]">
      <Image src="/logo.svg" alt="logo" width={80} height={37} />
    </div>
  );
};
