import { staticData } from "../data";
import { StaticData } from "../types";

// TODO sync with server for latest version
export const useStaticData = (): StaticData => {
  return staticData;
};
