// pages/_app.js
import { Provider } from 'react-redux';
import store from '../redux/Store';
import '../styles/globals.css'; // Your global styles
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Your App Title</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
