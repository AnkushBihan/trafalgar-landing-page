import styles from "../../styles/components/find.module.scss"
import Image from "next/image";

export default function FindaDoctor() {
    return (
        <>
            <div id="find" className="container">
                <div className={styles.provider}>
                    <div className={styles.provider_img}>
                        <Image src="/images/provider.png" alt="Provider Image" height={400} width={550}/>
                    </div>
                    <div className={styles.provider_content}>
                        <h3>Leading Healthcare providers</h3>
                        <Image src="/icons/line.svg" alt="Line Icon" height={20} width={40}/>
                        <p>Trafalgor provides progressive, and affordable healthcare, accessible on moblie and online for everyone. To us, it's not just work. We take pride in the solutions we deliver.</p>
                        <div className={styles.btn}><button>Learn More</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}