import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { prepareSearchStringFromObject } from "../helper/data_transform";

export default function useQueryParams(defaultParams) {
  const [search, changeSearch] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    transformSearchObj(defaultParams);
  }, [defaultParams]);

  const transformSearchObj = (obj) => {
    if (obj?.updateUrl || !location?.search) {
      delete obj["updateUrl"];
      changeSearch(prepareSearchStringFromObject(obj));
    }
  };

  return [search, transformSearchObj];
}
