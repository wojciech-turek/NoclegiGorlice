interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Room extends SanityBody {
  _type: "rooms";
  name: string;
  description: string;
  price: number;
  bedCount: number;
  bedType: string;
  maxGuests: number;
  location: string;
  equipment: string[];
  images: Image[];
}

export interface Image extends SanityBody {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  title: string;
  locations: string[];
  heroImage: Image;
  description: string;
  invitation: string;
  ownerPhoto: Image;
  attractionsDescription: string;
  roomsDescription: string;
  offersDescription: string;
  phoneNumber: string;
  email: string;
  contactInfo: string;
}

export interface Attraction extends SanityBody {
  _type: "attractions";
  title: string;
  type: string;
  description: string;
  image: Image;
}

export interface Offer extends SanityBody {
  _type: "offers";
  name: string;
  description: string;
  price: number;
  expiryDate: string;
  image: Image;
}

export interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}
