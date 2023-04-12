import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/app.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;