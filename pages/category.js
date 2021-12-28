import Head from "next/head"
import BannerCategory from "../components/BannerCategory"
import CategorySection from "../components/CategorySection"
import Header from "../components/Header"
import styles from '../styles/Home.module.css'


const category = () => {
    return (
        <div>
            <Head>
                <title>Código Hábil</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <BannerCategory />

            <CategorySection />

        </div>
    )
}

export default category
