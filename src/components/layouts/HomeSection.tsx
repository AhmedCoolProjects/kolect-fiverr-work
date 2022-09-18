import React from "react";

export function HomeSection(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <section className="px-4 md:px-24 mb-12">
      {/* </div> */}
      {children}
    </section>
  );
}
