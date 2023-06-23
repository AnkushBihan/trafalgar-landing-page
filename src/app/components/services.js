import styles from "../../styles/components/services.module.scss"
import Image from "next/image";

export default function Services() {
    return (
        <>
            <div id="services" className="container">
                <div className={styles.services_content}>
                    <div className={styles.content_heading_para}>
                        <h3>Our Services</h3>
                        <Image src="/icons/line.svg" alt="Line Icon" height={20} width={40}/>
                        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                    </div>

                    <div className={styles.content_cards}>
                        <div className={styles.cards}>
                            <Image src="/icons/search.svg" alt="Search Icon" height={60} width={60}/>
                            <h4>Search Doctor</h4>
                            <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
                        </div>
                        <div className={styles.cards}>
                            <Image src="/icons/med-jar.svg" alt="Med Icon" height={60} width={60}/>
                            <h4>Online Pharmacy</h4>
                            <p>Buy your medicines with our mobile application with a simple delivery system</p>
                        </div>
                        <div className={styles.cards}>
                            <Image src="/icons/consultation.svg" alt="Consultation Icon" height={60} width={60}/>
                            <h4>Consultation</h4>
                            <p>Free consultation with our trusted doctors and get the best recomendations</p>
                        </div>
                    </div>

                    <div className={styles.content_cards}>
                        <div className={styles.cards}>
                            <Image src="/icons/details.svg" alt="Details Icon" height={60} width={60}/>
                            <h4>Details Info</h4>
                            <p>Free consultation with our trusted doctors and get the best recomendations</p>
                        </div>
                        <div className={styles.cards}>
                            <Image src="/icons/med-care.svg" alt="Med Icon" height={60} width={60}/>
                            <h4>Emergency Care</h4>
                            <p>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
                        </div>
                        <div className={styles.cards}>
                            <Image src="/icons/track.svg" alt="Tracking Icon" height={60} width={60}/>
                            <h4>Tracking</h4>
                            <p>Track and save your medical history and health data</p>
                        </div>
                    </div>

                    <div className={styles.btn}><button>Learn More</button></div>
                </div>
            </div>
        </>
    );
}