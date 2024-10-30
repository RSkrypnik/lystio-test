import type { Tenement } from "@/types";
import { formatEur } from "@/lib/currency";

interface TenementCardProps {
  tenement: Tenement
}

export const TenementMapCard = ({ tenement }: TenementCardProps) => {
  const tenementFeatures = [
    { icon: "", content: tenement.size },
    { icon: "", content: tenement.roomsBed },
    { icon: "", content: tenement.roomsBath },
  ]

  const image = tenement.media ? tenement.media[0].cdnUrl : "https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder.jpg";

  return (
    <div className="p-3.5 pb-[25px] bg-white rounded-xl absolute right-4 bottom-4">
      <img src={image} alt={tenement.title} width={297} height={198}  />
      <div className="text-[18px]/[21px] text-[#000000] my-4">{formatEur(tenement.rent)}</div>
      <div className="text-[#000000]/[60%]">{tenement.address}</div>
      <div className="flex justify-between">
        { tenementFeatures.map(({ content }, idx) => (
          <div className="text-[12px]/[16.8px]" key={idx}>{content}</div>
        )) }
      </div>
    </div>
  );
}