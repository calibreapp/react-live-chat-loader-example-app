import App from 'next/app'
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <LiveChatLoaderProvider provider="intercom" providerKey="otpo7g1i">
        <Component {...pageProps} />
        <Intercom />
      </LiveChatLoaderProvider>
    )
  }
}
