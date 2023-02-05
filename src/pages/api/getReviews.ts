import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleReview } from "types/types";

type Data = {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reviews = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJAQAL68TGPUcRMQh2cE4Lwl8&language=pl&fields=reviews,rating,user_ratings_total&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
  );
  const reviewsJson = await reviews.json();
  res.status(200).json(reviewsJson);
}
