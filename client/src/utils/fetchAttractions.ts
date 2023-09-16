import { Attraction } from "types/types";

export const fetchAttractions = async (): Promise<Attraction[]> => {
  const response = await fetch(process.env.BASE_URL + "/api/getAttractions");
  const { attractions }: { attractions: Attraction[] } = await response.json();

  return attractions;
};
