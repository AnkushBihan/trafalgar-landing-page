import styles from "../../styles/components/header.module.scss"
import Image from "next/image";
import Link from "next/link";

const links = [
    {
        title:"Services",
        slug:"#services"
    },
    {
        title: "Find a Doctor",
        slug: "#find"
    },
    {
        title:"Apps",
        slug: "#apps"
    },
    {
        title: "Reviews",
        slug: "#reviews"
    },
    {
        title: "Latest Articles",
        slug: "#articles"
    }
]

export default function Header() {
    
    return (
        <>
            <div className="container">
                <div className={styles.nav}>
                    <div className={styles.nav_logo}>
                        <Image className={styles.logo_img} src="/icons/logo.svg" alt="Logo icon" height={40} width={40}/>
                        <Image className={styles.logo_text} src="/icons/T.svg" alt="Logo icon" height={30} width={30}/>
                        <h4>Trafalgar</h4>
                    </div>
                    <div className={styles.nav_menu}>
                        <ul>
                            {links.map((link) =>(
                                <li><Link href={link.slug}>{link.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}