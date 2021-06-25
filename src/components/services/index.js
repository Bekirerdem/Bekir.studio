import React from "react";

import styles from "./services.module.css";

import Header from "../../helper/header";
import ServicesBox from "../../helper/servicesBox";

function Services() {
  return (
    <section className={styles.services}>
      <Header title="The Services I Provide" header="MY SERVICES" />
      <div className="flex gap-x-10 flex-wrap justify-center w-full pt-14">
        <ServicesBox
          className={styles.box1}
          title="UI/UX Design"
          paragraf="Creative designs and creating the appropriate design model according to the subject."
          number="01"
        >
          <img className={styles.icon} src="image/Vector.svg" alt="icon" />
        </ServicesBox>
        {/*         <ServicesBox
          title="USER INTERFACE"
          paragraf="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          number="02"
        >
          <img className={styles.icon} src="image/laptop.svg" alt="icon" />
        </ServicesBox> */}
        <ServicesBox
          title="BRANDING"
          paragraf="I am building a website by taking the right steps towards branding and researching."
          number="02"
        >
          <img className={styles.icon} src="image/flag.svg" alt="icon" />
        </ServicesBox>
        <ServicesBox
          title="SEO OPTIMIZED"
          paragraf="I create websites by increasing your site's visibility in organic search results to get more traffic."
          number="03"
        >
          <img className={styles.icon} src="image/globe.svg" alt="icon" />
        </ServicesBox>
      </div>
    </section>
  );
}

export default Services;
