import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  //access router object to get ID from query parameters

  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`);

  if (error) {
    return <div>Error: error.message</div>;
  }

  if (!data) {
    return <div>loadConfig... </div>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}

// //  const { data, error, isLoading } = useSWR(
//   `https://swapi.dev/api/people/${id}`
//   );
