import { useState, useEffect } from 'react';
import Link from 'next/Link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstPost() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function fetchJoke() {
      try {
        const response = await fetch('https://meowfacts.herokuapp.com/');
        const data = await response.json();
        setJoke(data.data);
      } catch (error) {
        console.error('Error fetching joke:', error);
      }
    }

    fetchJoke();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Jess's Post</title>
      </Head>
      <h1>Jess's Post</h1>
      <h2>
        <a href="https://www.linkedin.com/in/jessicakotlarek">Jess's Linkedin</a>
      </h2>
      <h4>Fun Facts:</h4>
      <p>- I am from Milwaukee, Wisconsin!</p>
      <p>- I am a Statistics major!</p>
      <p>- I am a Sophomore!</p>
      <p>- I have 4 older siblings!</p>
      <h4>Here's a cat fact!</h4>
      <p>{joke}</p>
    </Layout>
  );
}