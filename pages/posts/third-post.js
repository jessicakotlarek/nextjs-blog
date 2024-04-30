import Link from 'next/Link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import { useState, useEffect} from 'react';

export default function ThirdPost() {
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
            <title>Anna's Post</title>
        </Head>
        <h1>Anna's Post</h1>
        <h2><a href="https://www.linkedin.com/in/anna-shirley">Anna's LinkedIn</a></h2>
        <h4>Fun Facts: </h4>
        <p>- I am from Doylestown, Pennsylvania!</p>
        <p>- I am a Mathematics Major!</p>
        <p>- I am a Sophomore!</p>
        <p>- I have 2 siblings!</p>
        <h4> Here's a cat fact!</h4>
        <p>{joke}</p>
    </Layout>
    );
}