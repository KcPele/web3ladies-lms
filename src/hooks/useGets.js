import { useQuery } from "react-query";
import axios from "axios";
import { appUrl } from "../context/AppStateContext";

export default function useGets(queryKey, url, token) {
  console.log(`${appUrl}${url}`);
  return useQuery(queryKey, () =>
    axios
      .get(`${appUrl}${url}`, {
        headers: {
          Authorization: `Bearer ${
            token ? token : JSON.parse(localStorage.getItem("tokenUser"))
          }}`,
        },
      })
      .then((res) => res.data)
  );
}
