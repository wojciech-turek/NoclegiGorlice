import { sanityClient } from "@/lib/sanity.client";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Room } from "types/types";

const query = groq`
*[_type == "rooms"]
`;

type Data = {
  rooms: Room[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const rooms: Room[] = await sanityClient.fetch(query);

  res.status(200).json({ rooms });
}
