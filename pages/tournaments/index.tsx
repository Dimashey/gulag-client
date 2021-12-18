import { InferGetServerSidePropsType } from 'next';
import { getTournaments } from 'resources/index';

export default function Tournamerns({
  tournaments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{JSON.stringify(tournaments, null, ' ')}</div>;
}

export const getServerSideProps = async () => {
  const { data } = await getTournaments();

  return { props: { tournaments: data } };
};
