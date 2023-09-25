import { useQuery } from "react-query";
import axios from "axios";
import { appUrl, useAppStateContent } from "../context/AppStateContext";

export default function useGets(queryKey, url) {
  const { token } = useAppStateContent();
  console.log("token", token);
  return useQuery(queryKey, () =>
    axios
      .get(`${appUrl}/${url}`, {
        headers: {
          Authorization: `Bearer ${
            token ? token : localStorage.getItem("tokenUser")
          }}`,
        },
      })
      .then((res) => res.data)
  );
}
