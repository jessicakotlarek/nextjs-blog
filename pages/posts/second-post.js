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
        <>
            <Layout>
            <Head>
                <title>Second Post</title>
            </Head>
            <Script 
                src="www.linkedin.com/in/smccormack21" 
                strategy="lazyOnLoad"
                onLoad ={ () => 
                console.log('script loaded.')}/>
            <h1>Samantha's Post</h1>
            <h2>
                <a href = "https://www.linkedin.com/in/smccormack21">Samantha's LinkedIn</a>
            </h2>
            <h4> Fun Facts! </h4>
            <p> - I'm from Long Island, New York!</p>
            <p> - I'm Statistics Major!</p>
            <p> - I'm a Sophomore!</p>
            <p> - I have 2 older siblings!</p>
            <h4>Here's a cat fact!</h4>
            <p>{joke}</p>
            </Layout>
        </>
    );
}