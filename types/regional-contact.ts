export interface Location {
  officeName: string;
  addressLines: string[];
  city: string;
  phone: string;
}

export type RegionalContactData = {
  country: string;
  locations: Location[];
  emails: string[];
};
