import '../view/styles/reset.css'
import '../view/styles/variables.css'
import '../view/styles/components.css'
import Head from 'next/head'

function EnergyConnect({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Energy Connect SV</title>
        <link href="/css/print.css" type="text/css" media="print" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
export default EnergyConnect
