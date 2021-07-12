import { useEffect, useState } from "react";
import { news as staticNews } from "../data";
import { News } from "../types";
import { getData, storeData } from "../util";

const fetchNews = async () => {
  try {
    const response = await fetch("https://ff0000.cz/remote.json", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    const raw = await response.text();
    const json = JSON.parse(raw);
    return json;
  } catch (e) {
    return null;
  }
};

export const useNews = (): {
  news: News;
  syncNews: () => void;
  loading: boolean;
} => {
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(false);

  async function tryLoadRemoteNews() {
    setLoading(true);
    try {
      const remoteNews = await fetchNews();
      const localNews = await getData("@news");

      const { version: remoteVersion } = remoteNews || {};
      const { version: localVersion } = localNews || {};

      if (!localVersion || (localVersion < remoteVersion && remoteVersion)) {
        storeData("@news", JSON.stringify(remoteNews));
      }
    } catch (error) {
      console.log("remote sync error", error);
    } finally {
      setLoading(false);
    }
  }

  const loadNews = async () => {
    try {
      const news = await getData("@news");
      setNews(news);
    } catch (error) {
      console.log("storing error", error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return {
    news: news || staticNews,
    syncNews: async () => {
      await tryLoadRemoteNews();
      await loadNews();
    },
    loading,
  };
};
