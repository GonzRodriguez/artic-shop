import type { InferGetStaticPropsType, NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Products from '../components/organism/Products'
import Pagination from "../components/molecules/Pagination";
import { IConfig, IPagination, IInfo,  IProduct } from '../types'

const Home = ( { products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  const [state, setState] = useState(products);
  const [page, setPage] = useState({current_page: state.pagination.current_page, total_pages: state.pagination.total_pages})
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const goToPage = async () => {
      
      setLoading(true)

      try {
        const res = await fetch(
          `https://api.artic.edu/api/v1/products?page=${page.current_page}&limit=10`
      );

      const products: {
        pagination: IPagination;
        data: IProduct[];
        info: IInfo;
        config: IConfig;
      } = await res.json();

      setState(products);
      
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);            
        }
      } finally {
        setLoading(false);
      }
    };
    goToPage();
  }, [page.current_page])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Art Institute of Chicago unofficial store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to{" "}
          <a href="https://https://shop.artic.edu/">Art Institute of Chicago</a>{" "}
          unofficial store.
        </h2>

        <Pagination page={page} setPage={setPage} />
        {loading ? (
          <div className={styles.loading}>
            <h2> Loading...</h2>{" "}
          </div>
        ) : (
          <Products product={state.data} />
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://grgsalamanca.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created By Gonzalo Rodriguez
          <span className={styles.logo}>
            <Image src="/my-logo.svg" alt="My Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home


// This gets called on every request
export async function getStaticProps() {


  // Fetch data from Art Institute of Chicago API
  const res = await fetch(
    `https://api.artic.edu/api/v1/products?page=1&limit=10`
  );
  const products: {
    pagination: IPagination;
    data: IProduct[];
    info: IInfo;
    config: IConfig;
  } = await res.json();
    
  // Pass products to the page via props
  return { props: { products }};
}
