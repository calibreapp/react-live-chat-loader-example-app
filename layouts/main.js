import Head from 'next/head'

export default ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style global jsx>{`
      body {
        background-color: #041452;
        color: white;
        font-size: 16px;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        height: 100vh;
        margin: 0;
        padding: 0;
        width: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
    {children}
  </>
)
