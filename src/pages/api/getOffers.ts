import { sanityClient } from "@/lib/sanity.client";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Offer } from "types/types";

const query = groq`
*[_type == "offers"]
`;

type Data = {
  offers: Offer[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const offers: Offer[] = await sanityClient.fetch(query);

  res.status(200).json({ offers });
}
