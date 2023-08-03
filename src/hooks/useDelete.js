import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "./utils";

export default function useDeletePost(queryKey, url) {
  return useMutation(
    (id) => axios.delete(`${url}/${id}`).then((res) => res.data),
    {
      onSuccess: () => queryClient.refetchQueries(queryKey),
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
