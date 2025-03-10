import React, { useEffect, useState } from "react";
import Layout from "../templates/Layout";
import Card from "../molecules/Card";
import styles from "./HomePage.module.css";

interface HomePageProps {
  title?: string;
  weather?: {
    temperature: number;
    unit: string;
  },
}

const HomePage: React.FC<HomePageProps> = ({ title, weather }) => {
  return (
    <Layout>
      <section className={styles.home}>
        <h2>{title ?? "Welcome to My Site"}</h2>
        <Card>
          {weather && <p>🌤️ Current Temperature in New York: {weather.temperature}{weather.unit}</p>}
        </Card>
      </section>
    </Layout>
  );
};

export default HomePage;
