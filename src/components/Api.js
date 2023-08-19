import { useQuery } from "@tanstack/react-query";

function Api() {
  const { data, isLoading, refetch } = useQuery(["joke"], () =>
    fetch("https://official-joke-api.appspot.com/random_joke").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <button onClick={refetch}>Click to see more fun jokes!</button>
      <p>
        {data?.setup}
        {data?.punchline}
      </p>
    </div>
  );
}

export default Api;
