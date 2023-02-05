interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Room extends SanityBody {
  _type: "rooms";
  title: string;
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
  phoneNumber: string;
  email: string;
  addressData: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
