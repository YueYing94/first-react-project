import { useGetJoke } from "./useGetJoke";

function Api() {
  const { jokeData, isLoading, refetch } = useGetJoke();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={refetch}>Click to see more fun jokes!</button>
      <p>
        {jokeData?.setup}
        {jokeData?.punchline}
      </p>
    </div>
  );
}

export default Api;
