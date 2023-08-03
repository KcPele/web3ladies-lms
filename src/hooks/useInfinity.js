import { useInfiniteQuery } from "react-query";
import axios from "axios";

export default function useInfinite(queryKey, url, pageSize) {
  return useInfiniteQuery(
    queryKey,
    (key, nextPageOffset = 0) =>
      axios
        .get(url, {
          params: {
            pageSize,
            pageOffset: nextPageOffset,
          },
        })
        .then((res) => res.data),
    {
      getFetchMore: (lastResult) => lastResult.nextPageOffset,
    }
  );
}
