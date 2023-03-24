import React from 'react';
import type { AppProps } from 'next/app'
import './style.scss'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }