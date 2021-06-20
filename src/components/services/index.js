import React from "react";

import styles from "./services.module.css";

import Header from "../../helper/header";
import ServicesBox from "../../helper/servicesBox";

function Services() {
  return (
    <div className={styles.services}>
      <Header title="The Services I Provide" header="MY SERVICES" />
      <div className="grid grid-cols-3 gap-y-8 pt-20">
        <ServicesBox
          title="UI/UX Design"
          paragraf="Creative designs and creating the appropriate design model according to the subject."
          number="01"
        >
          <img className={styles.icon} src="image/Vector.svg" alt="icon" />
        </ServicesBox>
        <ServicesBox
          title="USER INTERFACE"
          paragraf="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          number="02"
        >
          <img className={styles.icon} src="image/laptop.svg" alt="icon" />
        </ServicesBox>
        <ServicesBox
          title="CLEEN CODE"
          paragraf="I am creating a good infrastructure by coding your site with consistent and correct coding."
          number="03"
        >
          <img
            className={styles.icon}
            src="image/address-card.svg"
            alt="icon"
          />
        </ServicesBox>
        <ServicesBox
          title="BRANDING"
          paragraf="I am building a website by taking the right steps towards branding and researching."
          number="04"
        >
          <img className={styles.icon} src="image/flag.svg" alt="icon" />
        </ServicesBox>
        <ServicesBox
          title="SEO OPTIMIZED"
          paragraf="I create websites by increasing your site's visibility in organic search results to get more traffic."
          number="05"
        >
          <img className={styles.icon} src="image/globe.svg" alt="icon" />
        </ServicesBox>
        <ServicesBox
          title="FAST SUPPORT"
          paragraf="Support status is available for any error that may occur."
          number="06"
        >
          <img className={styles.icon} src="image/headset.svg" alt="icon" />
        </ServicesBox>
      </div>
    </div>
  );
}

export default Services;
