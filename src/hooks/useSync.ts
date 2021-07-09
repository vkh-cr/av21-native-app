import { useState, useEffect } from "react";
import { getData, storeData } from "../util";

const fetchNews = async () => {
  try {
    const response = await fetch("https://ff0000.cz/remote.json");
    const raw = await response.text();
    const json = JSON.parse(raw);
    return json;
  } catch (e) {
    return null;
  }
};

export const useSync = (initial: boolean) => {
  const [loading, setLoading] = useState(false);

  async function loadNews() {
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
      console.log("sync error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initial) {
      loadNews();
    }
  }, []);

  return {
    loading,
    refreshNews: async () => {
      await loadNews();
    },
  };
};
