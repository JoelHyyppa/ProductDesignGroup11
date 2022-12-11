import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session} basePath="/">
      <Component {...pageProps}/>
    </SessionProvider>
  )
}