export interface NewsData {
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  date: Date;
}

export interface News {
  version: number;
  data: NewsData[];
}

export interface ActivityData {}
export interface PresenterData {}
export interface ContactData {}
export interface HarmonogramData {}
export interface MapData {}
export interface ImageData {}
export interface TextData {}

export interface StaticData {
  version: number;
  data: {
    activities: ActivityData[];
    presenters: PresenterData[];
    contacts: ContactData[];
    harmonogram: HarmonogramData[];
    maps: MapData[];
    images: ImageData[];
    texts: TextData[];
  };
}
