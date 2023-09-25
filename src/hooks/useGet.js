import { useQuery } from "react-query";
import axios from "axios";
import { appUrl } from "../context/AppStateContext";

export const fetchPost = (queryKey, id) =>
  axios.get(`/api/posts/${id}`).then((res) => res.data);

export default function usePost(queryKey, url, id) {
  return useQuery(queryKey && [queryKey, id], () =>
    axios.get(`${appUrl}/${url}/${id}`).then((res) => res.data)
  );
}
