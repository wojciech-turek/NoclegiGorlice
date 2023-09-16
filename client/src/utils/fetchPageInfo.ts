import { PageInfo } from "types/types";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const response = await fetch(process.env.BASE_URL + "/api/getPageInfo");
  const { pageInfo }: { pageInfo: PageInfo } = await response.json();
  return pageInfo;
};
