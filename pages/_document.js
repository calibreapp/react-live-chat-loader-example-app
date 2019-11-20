import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            body {
              background-color: #041452;
              color: white;
              font-size: 16px;
              line-height: 1.5;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
              height: 100vh;
              margin: 0;
              padding: 0;
              width: 100%;
              -webkit-text-size-adjust: 100%;
              -webkit-font-smoothing: antialiased;
            }
          `}</style>
        </body>
      </Html>
    )
  }
}

export default MyDocument
