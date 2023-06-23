import styles from "../../styles/components/find.module.scss"
import Image from "next/image";

export default function OurApp() {
    return (
        <>
            <div id="apps" className="container">
                <div className={styles.provider}>
                    <div className={styles.provider_content}>
                        <h3>Download Our Mobile Apps</h3>
                        <Image src="/icons/line.svg" alt="Line Icon" height={20} width={40}/>
                        <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.</p>
                        <div className={styles.btn}><button>Learn More</button></div>
                    </div>
                    <div className={styles.provider_img}>
                        <Image src="/images/mobile-app.png" alt="App Image" height={400} width={550}/>
                    </div>
                </div>
            </div>
        </>
    );
}