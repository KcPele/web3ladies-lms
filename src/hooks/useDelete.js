import axios from "axios";
import { useMutation, queryCache } from "react-query";

export default function useDeletePost(queryKey, url) {
  return useMutation(
    (id) => axios.delete(`${url}/${id}`).then((res) => res.data),
    {
      onSuccess: () => queryCache.refetchQueries(queryKey),
    }
  );
}

// export default function useDelete(queryKey, url) {
//     return useMutation(
//       (id) => axios.delete(`${url}/${id}`).then((res) => res.data),
//       {
//         onError: (error, variables, rollback) => {
//           rollback && rollback()
//         },
//         onSuccess: (data, id) => {
//           const previousPosts = queryCache.getQueryData(queryKey)

//           const optimisticPosts = previousPosts.filter((d) => d.id !== id)

//           queryCache.setQueryData(queryKey, optimisticPosts)
//           queryCache.invalidateQueries(queryKey)
//         },
//       }
//     )
//   }
