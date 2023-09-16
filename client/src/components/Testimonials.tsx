import { classNames } from "@/utils/classNames";
import { fetchReviews } from "@/utils/fetchReviews";
import { StarIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const { data } = useQuery(["reviews"], fetchReviews);
  if (!data) return null;
  const { rating, reviews, user_ratings_total } = data;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Opinie odwiedzających
          </h2>
          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rate, rateIdx) => (
                  <StarIcon
                    key={rateIdx}
                    className={classNames(
                      rating > rate ? "text-yellow-400" : "text-gray-300",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{rating} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Średnia {rating} na podstawie {user_ratings_total} opinii.
            </p>
          </div>
        </div>
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>
          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.map((review) => (
                <div key={review.author_name} className="py-12">
                  <div className="flex items-center">
                    <Image
                      src={review.profile_photo_url}
                      alt={`${review.author_name}.`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.author_name}{" "}
                        <span className="font-normal text-gray-500">
                          {review.relative_time_description}
                        </span>
                      </h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
