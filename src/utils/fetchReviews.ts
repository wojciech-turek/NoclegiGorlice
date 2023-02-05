import { GoogleReview } from "types/types";

type ReviewData = {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
};

export const fetchReviews = async (): Promise<ReviewData> => {
  const response = await fetch("/api/getReviews");
  const data = await response.json();
  return {
    reviews: data.result.reviews,
    rating: data.result.rating,
    user_ratings_total: data.result.user_ratings_total,
  };
};
