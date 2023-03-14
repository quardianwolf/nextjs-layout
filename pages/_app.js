import '../styles/globals.css';
import Head from 'next/head';
import Seo from '@component/Seo';

function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charset="utf-8"/>
        <meta name="language" content="tr-tr" />
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859"></meta>
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="/"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Buçağ Medya | Sosyal Medya | Web Tasarim | Google Ads"/>
        <meta name="author" content="Atilla KURT"/>
        <meta name="publisher" content="Atilla KURT" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content=""/>
        <meta property="og:url" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:site_name" content=""/>
        <meta property="og:image:width" content="200"/>
        <meta property="og:image:height" content="200"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content=""/>
        <meta name="twitter:creator" content="Bucag Medya | Atilla KURT"/>
        <meta name="twitter:url" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image:src" content=""/>
        <meta name="twitter:domain" content=""/>
        <meta name="twitter:app:name:iphone" content=""/>
        <meta name="twitter:app:name:ipad" content=""/>
        <meta name="twitter:app:name:googleplay" content=""/>
    </Head>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default App
