export interface Trip {
  id: number;
  name: string;
  country: string;
  start_date: string;
  end_date: string;
  price: number;
  currency: string;
  max_participants: number;
  description: string;
  picture: string[];
  map: string;
}
