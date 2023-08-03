import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "./utils";

let defaultUrl = "https://web3ladies-backend.herokuapp.com";
export default function useCreate(
  queryKey,
  url,
  { contentType = "application/json", callBack = () => {} }
) {
  return useMutation(
    (values) =>
      axios
        .post(`${defaultUrl}${url}`, values, {
          headers: {
            "Content-Type": contentType,
          },
        })
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.refetchQueries(queryKey);
        //if you want an action to be performed
        callBack();
      },
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
