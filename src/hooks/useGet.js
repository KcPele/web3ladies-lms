import { useQuery } from "react-query";
import axios from "axios";
import { appUrl } from "../context/AppStateContext";

// export const fetchPost = (queryKey, id) =>
//   axios.get(`/api/posts/${id}`).then((res) => res.data);

export default function useGets(queryKey, url, id, token) {
  return useQuery(queryKey && [queryKey, id], () =>
    axios
      .get(`${appUrl}/${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${
            token ? token : JSON.parse(localStorage.getItem("tokenUser"))
          }}`,
        },
      })
      .then((res) => res.data)
  );
}
