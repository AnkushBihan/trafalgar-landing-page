import Image from "next/image";
import styles from "../../styles/components/articles.module.scss";

export default function Articles() {
  return (
    <>
      <div id="articles" className="container">
        <div className={styles.content_heading}>
          <h3>Check out our latest articles</h3>
          <Image src="/icons/line.svg" alt="Line Icon" height={20} width={40} />
        </div>
        <div className={styles.article_cards}>
          <div className={styles.card}>
            <Image src="/images/article1.png" height={200} width={300} />
            <div className={styles.card_content}>
              <h4>Disease detection, check up in the laboratory</h4>
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <h5>
                Read more{" "}
                <span>
                  <Image
                    src="/icons/right-arrow.svg"
                    alt="Arrow Icon"
                    height={10}
                    width={30}
                  />
                </span>
              </h5>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/images/article2.png" height={200} width={300} />
            <div className={styles.card_content}>
              <h4>Herbal medicines that are safe for consumption</h4>
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <h5>
                Read more{" "}
                <span>
                  <Image
                    src="/icons/right-arrow.svg"
                    alt="Arrow Icon"
                    height={10}
                    width={30}
                  />
                </span>
              </h5>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/images/article3.png" height={200} width={300} />
            <div className={styles.card_content}>
              <h4>Natural care for healthy facial skin</h4>
              <p>
                A healthy lifestyle should start from now and also for your skin
                health. There are same...
              </p>
              <h5>
                Read more{" "}
                <span>
                  <Image
                    src="/icons/right-arrow.svg"
                    alt="Arrow Icon"
                    height={10}
                    width={30}
                  />
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button>View All</button>
        </div>
      </div>
    </>
  );
}
