import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Star Wars Characters </title>
        <meta name="description" content="Beautifully made with Next.js" />
        <link rel="icon" href="/light-saber.png" />
      </Head>
      <div className="homeContainer">
        <h1>
          <Image src="/light-saber.png" alt="logo" width={40} height={40} />{' '}
          Leveraging Star Wars API
        </h1>
        <p>See stats of your favorite Star Wars characters!</p>
        <h4>
          What are you waiting for?
          <Link href="/characters">
            <a className="beginNow"> Begin now!</a>
          </Link>
        </h4>
      </div>
    </div>
  );
}
