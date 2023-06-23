import styles from "../../styles/components/footer.module.scss"
import Image from "next/image";

const companies = ["About", "Testimonials", "Find a doctor", "Apps"];
const regions = ["Indonesia", "Singapore", "Hongkong", "Canada"];
const helps = ["Help center", "Contact support", "Instructions", "How it works"];

export default function Footer() {
    return (
        <>
            <div className={styles.bgColor}>
                <div className="container">
                    <div className={styles.footer}>
                        <div className={styles.footer_logo_content}>
                            <div className={styles.footer_logo}>
                                <Image className={styles.logo_img} src="/icons/footer-logo.svg" alt="Logo icon" height={40} width={40}/>
                                <Image className={styles.logo_text} src="/icons/footer-logo-t.svg" alt="Logo icon" height={30} width={30}/>
                                <h4>Trafalgar</h4>
                            </div>
                            <div className={styles.footer_content}>
                                <p>Trafalgar provides progressive, <br/>and affordable healthcare <br/>accessible on mobile and online for everyone</p>
                                <p>©Trafalgar PTY LTD {new Date().getFullYear()}. All rights reserved</p>
                            </div>
                        </div>

                        <div className={styles.footer_menu}>
                            <h4>Company</h4>
                            <ul>
                                {companies.map((company)=>(
                                    <li>{company}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.footer_menu}>
                            <h4>Region</h4>
                            <ul>
                                {regions.map((region)=>(
                                    <li>{region}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.footer_menu}>
                            <h4>Help</h4>
                            <ul>
                                {helps.map((help)=>(
                                    <li>{help}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}