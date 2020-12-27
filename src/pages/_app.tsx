import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo {...SEO} ></DefaultSeo>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
export default CustomApp