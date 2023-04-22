import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useFetch(defaultData, { url, updateOnUrlChange }) {
  const [data, changeData] = useState(defaultData);
  const [loading, changeLoading] = useState(true);
  const [error, changeError] = useState(null);
  const location = useLocation();

  const fetchURL = (search = "") => {
    fetch(url + search)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }

        throw res?.statusText;
      })
      .then((data) => {
        changeData(data);
        changeLoading(false);
      })
      .catch((err) => {
        changeError(err);
        changeLoading(false);
      });
  };

  useEffect(() => {
    fetchURL(location?.search);
  }, [updateOnUrlChange && location]);

  return [loading, data, error];
}
