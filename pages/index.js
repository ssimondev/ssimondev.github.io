import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import uS from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={uS.headingMd}>
        <p>
          Hi, I'm <strong>Simon</strong>. I'm a beginner frontend developer from the Czech Republic. If you need you can contact me on{' '}
          <a href="https://instagram.com/ssimon.jpg">Instagram</a>.
          </p>
      </section>
      {/* <h2 className={uS.headingLg}>Blog</h2>
      <ul className={uS.list}>
        <li className={uS.listItem}>
          <Link href="/posts/first-post" >First post</Link>
          <p className={uS.date}>January 2, 2023</p>
        </li>
      </ul> */}
    </Layout>
  );
}