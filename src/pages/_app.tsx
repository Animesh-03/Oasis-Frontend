import { Button } from '@/components/button/button'
import { useExampleQueryQuery } from '@/graphql/generated/graphql'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  //return <Button label="text" color="red"/>
}
