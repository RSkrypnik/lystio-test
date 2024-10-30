import type { Tenement, LocationPoint } from "@/types"
import { postRequest } from "../http"

type FetchTenementsResponse = { res: Tenement[] }

export const fetchTenements = async (body: { rent: number[] }) => {
  const data = await postRequest<FetchTenementsResponse>("/tenement/search", { body: { ...body, zoom: 12 } });
  return data?.res;
}
export const fetchTenementsMap = (body: object) => postRequest<LocationPoint[]>("/tenement/search/map", { body })