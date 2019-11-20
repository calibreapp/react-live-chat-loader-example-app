import Layout from '../layouts/main'

export default () => {
  return (
    <Layout>
      <div>
        <h1>React Live Chat Loader</h1>
      </div>
      <style jsx>{`
        div {
          align-items: center;
          display: flex;
          height: 100vh;
        }
        h1 {
          font-size: 36px;
          margin: auto;
        }
      `}</style>
    </Layout>
  )
}
