import type { Tenement, LocationPoint } from "@/types"
import { postRequest } from "../http"
import { type NavigationContextType } from "@/components/navigation";

type FetchTenementsResponse = { res: Tenement[] }

export const fetchTenements = async (body: Pick<NavigationContextType, "filter">) => {
  const data = await postRequest<FetchTenementsResponse>("/tenement/search", { body: { ...body, zoom: 12 } });
  return data?.res;
}
export const fetchTenementsMap = (body: object) => postRequest<LocationPoint[]>("/tenement/search/map", { body })