import { useEffect } from 'react';
import type { NextPage } from 'next';
import { getTournaments } from 'resources/index';
import { setGlobalLoading } from 'store/loading';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const Home: NextPage = () => {
  useEffect(() => {
    getTournaments();
  }, []);
  const dispatch = useDispatch();
  const loadData = () => dispatch(setGlobalLoading());
  return (
    <div className={styles.container}>
      <Button onClick={loadData}>Test</Button>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const tournaments = await getTournaments();
  } catch (e) {
    console.log(e);
  }
  return {
    props: {},
  };
}

export default Home;
