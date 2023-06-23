import styles from "../../styles/components/banner.module.scss";
import Image from "next/image";

export default function Banner() {
    return (
        <>
            <div className="container">
                <div className={styles.banner_img_content}>
                    <div className={styles.banner_content}>
                        <h1>Virtual healthcare for you</h1>
                        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                        <div className={styles.btn}><button>Consult Today</button></div>
                    </div>
                    <div className={styles.banner_img}>
                        <Image src="/images/banner-img.png" alt="Banner Img" height={400} width={500}/>
                    </div>
                </div>
            </div>
        </>
    );
}