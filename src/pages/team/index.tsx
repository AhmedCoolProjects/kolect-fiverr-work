import React from "react";
import Layout from "@theme/Layout";

type ContributorProps = {
  name: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  image: string;
  post: string;
};

const teamData: ContributorProps[] = [
  {
    name: "Slug",
    github: "https://github.com/SlugLR",
    image: "https://github.com/SlugLR.png",
    post: "Design Lead",
  },
  {
    name: "Ermec",
    github: "https://github.com/ermaclooksrare",
    image: "https://github.com/ermaclooksrare.png",
    post: "Graphic Designer",
  },
  {
    name: "Cobretti",
    github: "https://github.com/cobrettilooksrare",
    image: "https://github.com/cobrettilooksrare.png",
    post: "UX Specialist",
  },
  {
    name: "Arya",
    github: "https://github.com/aryastark2019",
    image: "https://github.com/aryastark2019.png",
    post: "Community and Marketing",
  },
  {
    name: "Gizmo",
    github: "https://github.com/0xGizmo",
    image: "https://github.com/0xGizmo.png",
    post: "Product Manager",
  },
  {
    name: "Ferris",
    github: "https://github.com/0xFerris",
    image: "https://github.com/0xFerris.png",
    post: "Product Manager",
  },
];

function ContributorCard(props: ContributorProps) {
  const { name, github, image, post, linkedin, twitter } = props;
  return (
    <div
      style={{
        backgroundColor: "var(--ifm-navbar-background-color-custom)",
      }}
      className="flex flex-col items-center justify-center space-y-2
   rounded-2xl shadow-xl pb-3 pt-8 
    "
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <p className="font-semibold">{name}</p>
      <p className="text-xs">{post}</p>
      <a href={github ? github : linkedin ? linkedin : twitter} target="_blank">
        {github ? (
          <img
            src="/img/svgs/github.svg"
            alt="github_logo"
            className="w-5 h-5 mt-4"
          />
        ) : null}
      </a>
    </div>
  );
}

export default function Team(): JSX.Element {
  return (
    <Layout title="Team" description="">
      <p className="text-5xl mt-16 mb-14 text-center ">LooksRare Team</p>
      <main className="grid px-8 mb-14 md:px-20 pb-4 grid-cols-1 md:grid-cols-4 gap-8">
        {teamData.map((contributor, indx) => (
          <ContributorCard key={indx} {...contributor} />
        ))}
      </main>
    </Layout>
  );
}
