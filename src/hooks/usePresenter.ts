import { PresenterData } from "../types";
import { useStaticData } from "./useStaticData";

export const usePresenter = (
  presenterId: string
): PresenterData | undefined => {
  const staticData = useStaticData();

  return staticData.data.presenters.find(
    (presenter) => presenter.id === presenterId
  );
};
