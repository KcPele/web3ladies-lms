import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "./utils";

// export default function useSave(queryKey, url) {
//   return useMutation(
//     (values) =>
//       axios.patch(`${url}/${values.id}`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         const previousPost = queryClient.getQueryData([queryKey, values.id]);

//         queryClient.setQueryData([queryKey, values.id], (old) => ({
//           ...old,
//           ...values,
//         }));

//         return () =>
//           queryClient.setQueryData([queryKey, values.id], previousPost);
//       },
//       onError: (error, values, rollback) => rollback(),
//       onSuccess: async (values) => {
//         queryClient.refetchQueries("posts");
//         await queryClient.refetchQueries([queryKey, values.id]);
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
        queryClient.cancelQueries(queryKey);

        const oldPost = queryClient.getQueryData([queryKey, values.id]);

        queryClient.setQueryData([queryKey, values.id], values);

        return () => queryClient.setQueryData([queryKey, values.id], oldPost);
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries(queryKey);
        queryClient.invalidateQueries([queryKey, variables.id]);
      },
    }
  );
}
