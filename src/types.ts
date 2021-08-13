export interface NewsData {
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  date: Date;
}

export enum TextTypes {
  NADPIS,
  TEXT,
}

export enum ActivityTypes {
  VOLNOCAS,
  DUCHOVNI,
  PREDNASKA,
  NONE,
}
export interface InfoData {
  type: TextTypes;
  text: string;
}

export interface News {
  version: number;
  data: NewsData[];
}

export interface ActivityData {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string | null;
  presenter: PresenterData;
  block: number;
  capacity?: number;
  type: ActivityTypes;
}

export interface PresenterData {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  avatar?: string;
  activities: [number];
  display?: boolean;
}
export interface ContactData {}
export interface HarmonogramData {
  title: string;
  time: string;
  location: string;
  data: ActivityData[];
  icon: string;
}
export interface MapData {}
export interface ImageData {}
export interface TextData {}

export interface StaticData {
  version: number;
  data: {
    activities: ActivityData[];
    presenters: PresenterData[];
    contacts: ContactData[];
    harmonogram: HarmonogramData[][];
    maps: MapData[];
    images: ImageData[];
    texts: TextData[];
    info: InfoData[];
  };
}
