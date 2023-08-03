import { useQuery } from "react-query";
import axios from "axios";

export default function useGets(queryKey, url) {
  return useQuery(queryKey, () => axios.get(url).then((res) => res.data));
}
