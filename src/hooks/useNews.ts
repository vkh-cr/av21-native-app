import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { news as staticNews } from "../data"
const getData = async (storageKey: string) => {
  
    const value = await AsyncStorage.getItem(storageKey)
    if (value !== null) {
      return JSON.parse(value)
    }
}
type News = {
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  date: Date;
}[]

export const useNews = (): News => {
  const [news, setNews] = useState<News|null>(null);


  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getData('@news')
        setNews(news);

      } catch (error) {
      }
    }
    loadNews()
  }, [])

  return news || staticNews.data;
}