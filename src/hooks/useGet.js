import { useQuery } from "react-query";
import axios from "axios";

export const fetchPost = (queryKey, id) =>
  axios.get(`/api/posts/${id}`).then((res) => res.data);

export default function usePost(queryKey, url, id) {
  return useQuery(id && [queryKey, id], () =>
    axios.get(`${url}/${id}`).then((res) => res.data)
  );
}
