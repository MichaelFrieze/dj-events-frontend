import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>DJ Events</title>
        <meta name="description" content="Welcome to DJ Events" />
      </Head>

      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
