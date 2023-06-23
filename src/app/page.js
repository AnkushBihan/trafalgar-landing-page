import Image from 'next/image'
import styles from '../styles/page.module.scss'
import Banner from "./components/banner"
import Services from "./components/services"
import FindaDoctor from "./components/findadoctor"
import OurApp from "./components/ourapp"
import Reviews from "./components/reviews"
import Articles from "./components/articles"


export default function Home() {
  return (
    <>
        <Banner />
        <Services />
        <FindaDoctor/>
        <OurApp/>
        <Reviews/>
        <Articles/>
    </>
  )
}
