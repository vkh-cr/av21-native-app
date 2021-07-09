import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { news as staticNews } from "../data";
import { getData } from "../util";
import { useSync } from "./useSync";

type News = {
  version: number;
  data: {
    title: string;
    description: string;
    image: string;
    imageUrl: string;
    date: Date;
  }[];
};

export const useNews = (): { news: News; refreshNews: () => void } => {
  const [news, setNews] = useState<News | null>(null);
  const { refreshNews } = useSync(false);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getData("@news");
        setNews(news);
      } catch (error) {}
    };
    loadNews();
  }, []);

  return {
    news: news || staticNews,
    refreshNews: async () => {
      await refreshNews();
      const news = await getData("@news");
      setNews(news);
    },
  };
};