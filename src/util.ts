import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (storageKey: string) => {
  const value = await AsyncStorage.getItem(storageKey);
  if (value !== null) {
    return JSON.parse(value);
  }
};

export const storeData = async (storageKey: string, data: string) => {
  await AsyncStorage.setItem(storageKey, data);
};
