import '../styles/globals.css'
import Head from 'next/head'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds =[80001]
const connectors ={
  injected:{},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
    supportedChainIds={supportedChainIds}
    connectors={connectors}
    >
      <Head>
        <title>NFTShop.</title>
      </Head>
    <Component {...pageProps} />

    </ThirdwebWeb3Provider>
  )
}

export default MyApp
