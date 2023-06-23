import styles from "../../styles/components/reviews.module.scss"
import Image from "next/image";

export default function Reviews() {
    return (
        <>
            <div id="reviews" className="container">
                <div className={styles.review_container}>
                    <h3>What our customer are saying</h3>
                    <Image src="/icons/white-line.svg" alt="Line Icon" height={20} width={40}/>

                    <div className={styles.review_img_content}>
                        <div className={styles.review_img}>
                            <div className={styles.review_photo}>
                                <Image src="/images/avatar.png" alt="Avatar Img" height={100} width={100}/>
                            </div>
                            <div className={styles.review_name}>
                                <h4>Edward Newgate</h4>
                                <p>Founder Circle</p>
                            </div>
                        </div>
                        <div className={styles.review_content}>
                            <p>"Our dedicated patient engagement app and web portal allow you ti access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"</p>
                        </div>
                    </div>
                </div>
                <div className={styles.arrow}>
                    <Image src="/icons/reviews-arrow.svg" alt="Arrow icon" height={100} width={200}/>
                </div>
            </div>
        </>
    );
}