import '../styles/globals.css'
import { RobinhoodProvider } from '../context/RobinhoodContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider
      serverUrl='https://hkdkaa7mslwc.usemoralis.com:2053/server'
      appId='d5lwtHQPTUkdcUiyw96RB7sl5kID8T7vWtn23QtB'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  ) 
}

export default MyApp
