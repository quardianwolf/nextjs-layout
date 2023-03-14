import Head from 'next/head';

export default function SEO({
  title = '',
  description = '',
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
      </Head>
    </>
  );
}