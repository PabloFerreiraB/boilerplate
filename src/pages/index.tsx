import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({title = "React Avançado"}: Props) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="container">
          {title}
        </h1>
      </main>

      <footer className="container">

      </footer>
    </div>
  )
}
