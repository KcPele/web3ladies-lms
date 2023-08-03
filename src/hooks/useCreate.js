import axios from "axios";
import { useMutation, queryCache } from "react-query";

export default function useCreatePost(queryKey, url) {
  return useMutation(
    (values) => axios.post(url, values).then((res) => res.data),
    {
      onSuccess: () => queryCache.refetchQueries(queryKey),
    }
  );
}

// export default function useCreate(queryKey, url) {
//   return useMutation(
//     (values) => axios.post(url, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         queryCache.cancelQueries(queryKey)

//         const oldPosts = queryCache.getQueryData(queryKey)

//         queryCache.setQueryData(queryKey, (old) => {
//           return [...old, values]
//         })

//         return () => queryCache.setQueryData(queryKey, oldPosts)
//       },
//       onError: (error, values, rollback) => rollback(),
//       onSuccess: () => queryCache.invalidateQueries(queryKey),
//     }
//   )
// }
