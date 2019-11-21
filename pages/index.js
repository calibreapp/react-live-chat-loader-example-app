import Layout from '../layouts/main'

export default () => {
  return (
    <Layout title="React Live Chat Loader">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader</h1>
          <p>
            An npm module that allows you to mitigate the negative performance
            and user experience impact of chat tools. React-live-chat-loader
            shows a fake widget until the page has finished loading or users are
            ready to interact with chat. Currently works with Intercom and Help
            Scout.
          </p>
          <p>
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              Check it out on GitHub <span>→</span>
            </a>
          </p>
          <p>
            <a href="https://calibreapp.com">
              Need web performance monitoring? <span>→</span>
            </a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          align-items: center;
          display: flex;
          height: 100vh;
        }
        .inner {
          margin: auto;
          max-width: 700px;
          padding: 15px;
        }
        h1 {
          font-size: 36px;
        }
        a {
          color: white;
          font-weight: bold;
          text-decoration: none;
        }
        a span {
          display: inline-block;
          transition: margin 0.1s ease-out;
        }
        a:hover span {
          margin-left: 5px;
        }
      `}</style>
    </Layout>
  )
}
