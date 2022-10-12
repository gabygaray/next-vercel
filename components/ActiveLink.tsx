import React, { CSSProperties, PropsWithChildren } from 'react'; 

import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  text: string,
  href: string,
};

const style: CSSProperties= {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: React.FC<PropsWithChildren<Props>> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
