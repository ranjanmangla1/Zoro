import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Zoro - AI based Email Copy Writer & Scheduler" key="title"/>
        <meta property="og:description" content="build by Ranjan" key="description"/>
        <meta
          property="og:image"
          content="/public/96.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
