import type { Tenement } from "@/types";

export const extractTenementImg = (tenement: Tenement) =>
  tenement.media
    ? tenement.media[0].cdnUrl
    : "https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder.jpg"

export const getTenementFeatures = (tenement: Tenement) =>
  [
    { icon: "", content: `${tenement.size} m³` },
    { icon: "", content: `${tenement.roomsBed} bed` },
    { icon: "", content: `${tenement.roomsBath} bath` },
  ]
