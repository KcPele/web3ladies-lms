import axios from "axios";
import { useMutation, queryCache } from "react-query";

// export default function useSave(queryKey, url) {
//   return useMutation(
//     (values) =>
//       axios.patch(`${url}/${values.id}`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         const previousPost = queryCache.getQueryData([queryKey, values.id]);

//         queryCache.setQueryData([queryKey, values.id], (old) => ({
//           ...old,
//           ...values,
//         }));

//         return () =>
//           queryCache.setQueryData([queryKey, values.id], previousPost);
//       },
//       onError: (error, values, rollback) => rollback(),
//       onSuccess: async (values) => {
//         queryCache.refetchQueries("posts");
//         await queryCache.refetchQueries([queryKey, values.id]);
//       },
//     }
//   );
// }

export default function useSave(queryKey, url) {
  return useMutation(
    (values) =>
      axios.patch(`${url}/${values.id}`, values).then((res) => res.data),
    {
      onMutate: (values) => {
        queryCache.cancelQueries(queryKey);

        const oldPost = queryCache.getQueryData([queryKey, values.id]);

        queryCache.setQueryData([queryKey, values.id], values);

        return () => queryCache.setQueryData([queryKey, values.id], oldPost);
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: (data, variables) => {
        queryCache.invalidateQueries(queryKey);
        queryCache.invalidateQueries([queryKey, variables.id]);
      },
    }
  );
}
