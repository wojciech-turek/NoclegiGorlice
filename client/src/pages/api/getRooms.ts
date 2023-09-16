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

  // sort rooms by location
  rooms.sort((a, b) => {
    if (a.location < b.location) {
      return -1;
    }
    if (a.location > b.location) {
      return 1;
    }
    return 0;
  });

  res.status(200).json({ rooms });
}
