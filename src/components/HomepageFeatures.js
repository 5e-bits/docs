import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Tutorials",
    Svg: require("../../static/img/teacher.svg").default,
    description: (
      <>
        If you're a professional developer or a beginner just starting your
        journey, we've got a curated selection of tutorials and example projects
        to get you building with the API.
      </>
    ),
  },
  {
    title: "API Reference",
    Svg: require("../../static/img/reference.svg").default,
    description: (
      <>
        Jump straight into the API documentation. If you want to see what data
        the API has to offer along with some code examples in popular languages,
        this is the place for you.
      </>
    ),
  },
  {
    title: "FAQ",
    Svg: require("../../static/img/faq.svg").default,
    description: (
      <>
        Got questions about the the API? Check out our FAQ and see if we've
        already got an answer for ya.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
