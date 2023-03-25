import { Html, Head, Main, NextScript } from 'next/document'

declare global {
  interface Window {
    cloudinary: any
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
