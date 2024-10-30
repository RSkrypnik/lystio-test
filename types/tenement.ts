export interface Tenement {
  owner: {
    country: string;
    name: string;
    email: string;
    phone: string;
    description: string | null;
    vat: string | null;
    billingAddress: string | null;
  };
  user: {
    id: number;
  };
  title: string;
  abstract: string;
  address: string;
  addressDoor: string;
  zip: string;
  city: string;
  country: string;
  rooms: number;
  roomsBed: number;
  roomsBath: number;
  size: number;
  rent: number;
  rentUtilities: number;
  rentFull: number | null;
  rentDeposit: number | null;
  amenities: number[];
  amenitiesTexts: Record<string, string>;
  location: [number, number];
  locationReal: [number, number] | null;
  createdAt: string;
  updatedAt: string;
  type: number;
  subType: number;
  condition: number;
  accessibility: number;
  unitType: string;
  rentType: string;
  floorType: number;
  heatingType: number;
  leaseDuration: number;
  availableFrom: string | null;
  highlight: string | null;
  active: boolean;
  verified: boolean;
  deleted: boolean;
  autoRenewUntil: string | null;
  lastRenewAt: string | null;
  constructionYear: number | null;
  modernisationYear: number | null;
  floor: number | null;
  id: number;
  media: Media[];
  tenements: Tenement[];
}

export interface Media {
  type: string; // Example: "photo"
  name: string;
  cdnUrl: string;
  sort: number;
  title: string;
  bluredDataURL: string;
  id: number;
}