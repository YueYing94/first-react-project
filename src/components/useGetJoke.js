import { useQuery } from "@tanstack/react-query";

export const useGetJoke = () => {
  const {
    data: jokeData,
    isLoading,
    refetch,
  } = useQuery(["joke"], () =>
    fetch("https://official-joke-api.appspot.com/random_joke").then((res) =>
      res.json()
    )
  );



  return { jokeData, isLoading, refetch };
};
