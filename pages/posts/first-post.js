import Head from 'next/head'
import Layout from '../../components/layout';
import uS from '../../styles/utils.module.scss';

const title = 'First post';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <body>
        <h1>{title}</h1>
      </body>
    </Layout>
  )
}
