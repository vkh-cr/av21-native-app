import { ActivityData } from "../types";
import { useStaticData } from "./useStaticData";

export const useActivity = (
  activityId: string
): ActivityData | undefined => {
  const staticData = useStaticData();

  return staticData.data.activities.find(
    (activity) => activity.id === activityId
  );
};
