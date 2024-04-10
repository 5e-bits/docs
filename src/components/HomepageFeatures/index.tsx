import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import teacher from "@site/static/img/teacher.svg";
import reference from "@site/static/img/reference.svg";
import faq from "@site/static/img/faq.svg";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tutorials",
    Svg: teacher,
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
    Svg: reference,
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
    Svg: faq,
    description: (
      <>
        Got questions about the the API? Check out our FAQ and see if we've
        already got an answer for ya.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
