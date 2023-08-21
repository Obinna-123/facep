import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { FacepalContext } from '@/settings/global'

export default function App({ Component, session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <FacepalContext>
        <Component {...pageProps} /> 
      </FacepalContext>
    </SessionProvider>
  )
}