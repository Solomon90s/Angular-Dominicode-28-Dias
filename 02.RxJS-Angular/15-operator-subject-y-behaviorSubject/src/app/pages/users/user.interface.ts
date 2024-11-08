export interface Location {
  city: string;
  country: string;
  postcode: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  location: Location;
  //? Esta propiedad es opcional, puede venir o no
  countryName?: string;
}
