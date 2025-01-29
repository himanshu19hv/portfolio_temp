"use client";

import styles from "../styles/Challenges.module.scss";

export default function Challenges() {
  return (
    <>
      <section className={styles.features2}>
        <div className="container">
          <h2 className={styles.features2__title2}>
            a new challenge
            <br />
            waits ahead
          </h2>
          <div className={styles.features2__text2}>
            <p>
              We’re excited to introduce the Fly Forex Card, a prepaid card
              designed for users traveling abroad. It offers a hassle-free way
              to transact and shop in foreign currencies, providing both
              convenience and security while on the go. With easy top-ups and
              global acceptance, the card simplifies international spending for
              travellers.
            </p>
            <p>
              But this is just the start. There’s much more in store as we
              continue to evolve the cross-border payments experience. Stay
              tuned to see how we plan to further enhance the user journey and
              redefine financial freedom for global travelers.
            </p>
          </div>
          <div className={styles.features2__button}>
            case study coming soon
          </div>
          <div className={styles.features2__grid}>
            <div className={styles.features2__card}>
              <div className={styles.features2__phone}>
                <img src={"/assets/challenge.png"} alt="cards" className={styles.features2__image} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
