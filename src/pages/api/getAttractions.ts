import { sanityClient } from "@/lib/sanity.client";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Attraction } from "types/types";

const query = groq`
*[_type == "attractions"]
`;

type Data = {
  attractions: Attraction[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const attractions: Attraction[] = await sanityClient.fetch(query);

  res.status(200).json({ attractions });
}
