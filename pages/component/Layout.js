import React from 'react'
import Head from 'next/head'
import Header from './Header'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'


const Layout = ({ children }) => {
      const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(()=>{
  //   if (status !== "authenticated") {
  //     router.push('/Login');
  //     // return null; // 컴포넌트를 렌더링하지 않음
  //   }
  // },[])
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
        </>
    )
}

export default Layout