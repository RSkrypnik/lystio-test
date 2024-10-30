import type { Tenement } from "@/types";
import { formatEur } from "@/lib/currency";
import { extractTenementImg, getTenementFeatures } from "@/lib/tenement";

interface TenementCardProps {
  tenement: Tenement;
}

export const TenementMapCard = ({ tenement }: TenementCardProps) => {
  return (
    <div className="p-3.5 pb-[25px] bg-white rounded-xl absolute right-4 bottom-4">
      <div className="w-[297px] h-[198px] relative">
        <img src={extractTenementImg(tenement)} className="size-full absolute inset-0 object-cover" alt={tenement.title} />
      </div>
      <div className="text-[18px]/[21px] text-[#000000] my-4 font-semibold">
        {formatEur(tenement.rent)}
      </div>
      <div className="text-[#000000]/[60%]">{tenement.address}</div>
      <div className="flex justify-between mt-4">
        {getTenementFeatures(tenement).map(({ content }, idx) => (
          <div className="text-[#000000] text-[12px]/[16.8px] font-medium" key={idx}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};
