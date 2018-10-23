import Head from 'next/head'
import withLayout from '../lib/withLayout'

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <p>Cлава Украине!</p>
  </div>
)

export default withLayout(Index)
