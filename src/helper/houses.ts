export interface House {
  id: string;
  ubid: string;
  lng: number;
  lat: number;
  name: string;
  active: boolean;
  currentResidency: Residency;
  residencyHistory: Residency[];
  created_at: string;
  updated_at: string;
}

export interface Residency {
  id: string;
  birds: number;
  eggs: number;
  created_at: string;
}

export interface HousesResultSet {
  data: House[];
  count: number;
}
