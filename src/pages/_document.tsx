import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}} lang='pt-BR'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/KAOmqplghJT2PrJlOgZ5.png?auto=format"></link>
        <link rel="icon" type="image/png" sizes="228x228" href="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/KAOmqplghJT2PrJlOgZ5.png?auto=format"></link>
      </Head>
      <body className='antialiased bg-gray-900 text-gray-200 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}