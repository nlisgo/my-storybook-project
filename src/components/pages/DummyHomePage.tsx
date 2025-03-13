import React from "react";
import Layout from "../templates/Layout";
import Card from "../molecules/Card";
import styles from "./DummyHomePage.module.css";
import Food from "../molecules/Food";

interface DummyHomePageProps {
  title?: string;
  weather?: {
    temperature: number;
    unit: string;
  },
}

const DummyHomePage: React.FC<DummyHomePageProps> = ({ title, weather }) => {
  return (
    <Layout>
      <section className={styles.home}>
        <h2>{title ?? "Welcome to My Site"}</h2>
        <Card>
          {weather && <p>🌤️ Current Temperature in New York: {weather.temperature}{weather.unit}</p>}
        </Card>
      </section>
      <Food burger="cheeseburger" people={[{name: "burt", surname: "smith"}]}/>
    </Layout>
  );
};

export default DummyHomePage;
