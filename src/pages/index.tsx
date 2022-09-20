import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { DocCard } from "../components";

function HomepageHeader() {
  return (
    <header className="items-center flex flex-col justify-center py-16">
      <p className="text-4xl md:text-5xl text-center">Kolect Docs</p>
      <p className="text-xl md:text-2xl opacity-75 text-center m-0">
        Your all-in-one resource for Kolect
      </p>
      <Link className="mt-2" to="/docs/category/hiring">
        Kolect is hiring ➔
      </Link>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="" description="">
      <HomepageHeader />
      <main>
        <DocCard />
      </main>
    </Layout>
  );
}
