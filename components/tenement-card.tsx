import { formatEur } from "@/lib/currency";
import { extractTenementImg, getTenementFeatures } from "@/lib/tenement";
import type { Tenement } from "@/types";

interface TenementCardProps {
  tenement: Tenement;
}

export const TenementCard = ({ tenement }: TenementCardProps) => {
  return (
    <div className="rounded-lg">
      <div className="w-full h-[500px] relative overflow-hidden">
        <img
          src={extractTenementImg(tenement)}
          className="rounded-lg absolute inset-0 size-full"
          alt={tenement.address}
        />
      </div>
      <div className="pt-4 px-2 space-y-4">
        {tenement.verified && (
          <div className="flex justify-between font-medium">
            <span className="flex text-[#5A0CFF]">Verified</span>
            <span className="text-[#000000]">{tenement.updatedAt}</span>
          </div>
        )}
        <div className="text-[15px]/[22.5px] text-[#000000] font-semibold overflow-hidden text-ellipsis">
          {tenement.title}
        </div>
        <div className="text-[12px]/[14.4px] text-[#000000]/[60%] font-semibold">
          {tenement.address}
        </div>
        <div className="flex justify-between text-[#000000]/[60%] text-base/[16.8px]">
          {getTenementFeatures(tenement).map(({ content }, idx) => (
            <span key={idx}>{content}</span>
          ))}
        </div>
        <div className="text-[18px]/[21.6px] font-semibold text-[#000000]">
          {formatEur(tenement.rent)}
        </div>
        <div className="flex">
          <span className="text-[#000000]/[60%]">Available from:</span>
          <span className="text-[#000000]">{tenement.availableFrom}</span>
        </div>
      </div>
    </div>
  );
};
