import React from "react";
import Link from "@docusaurus/Link";
import { HomeSection } from "../layouts";

type DocProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const DocList: DocProps[] = [
  {
    title: "Guides",
    description: "Learn how to use all the features of Kolect.",
    link: "/guides",
    image: "/img/guides.svg",
  },
  {
    title: "About",
    description: "What's Kolect all about?",
    link: "/docs/intro",
    image: "/img/about.svg",
  },
  {
    title: "Developers",
    description: "Developer documentation to get you started.",
    link: "/developers",
    image: "/img/developers.svg",
  },
];

function DocItem(props: DocProps) {
  const { title, description, link, image } = props;
  return (
    <Link
      className="!no-underline !text-inherit !hover:!no-underline hover:!no-underline"
      href={link}
    >
      <div
        style={{
          backgroundColor: "var(--ifm-navbar-background-color-custom)",
        }}
        className="w-full flex flex-col h-full shadow-xl hover:shadow-2xl"
      >
        <img src={image} alt={title} className="w-full mb-4 object-contain" />
        <div className="px-6 py-1">
          <h1 className="text-xl m-0 font-semibold">{title}</h1>
          <p className="mb-4 mt-2 opacity-75">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export function DocCard() {
  return (
    <HomeSection>
      <div className="grid gap-6 my-4 md:grid-cols-3 grid-cols-1 ">
        {DocList.map((props, idx) => (
          <DocItem key={idx} {...props} />
        ))}
      </div>
    </HomeSection>
  );
}
