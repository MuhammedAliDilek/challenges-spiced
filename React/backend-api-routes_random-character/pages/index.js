import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load character</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.name} />{" "}
      {/* I have no image data but when I do I can use this code */}
    </div>
  );
}
