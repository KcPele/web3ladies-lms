import { useQuery } from "react-query";
const useUser = () => {
  return (rawUserData) =>
    useQuery("user", () =>
      fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawUserData),
      })
    );
};

export default useUser;
