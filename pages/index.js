import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is our final project using Next.js!</p>
        <p>
          <a href="/posts/first-post">Jess's Post</a>
        </p>
        <p>
          <a href="/posts/second-post">Samantha's Post</a>
        </p>
        <p>
          <a href="/posts/third-post">Anna's Post</a>
        </p>
      </section>
    </Layout>
  );
}
