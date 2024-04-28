export type Car = {
  marke: string;
  modell: string;
  jahrgang: number | null;
  kilometerstand: number | null;
  zustand: string;
  kraftstoffart: string;
  getriebe: string;
  email: string;
  bemerkungen?: string;
  preisvorstellung: number | null;
}

export type Details = {
  price: number;
  distance: string;
  fromAddress: string;
  toAddress: string;
}

export type User = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}
