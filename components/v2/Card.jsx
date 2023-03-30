import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ResultItem } from "./General";

const Card = ({ slug, id, logo, name }) => {
  return (
    <Link href={`/paths/${slug}`}>
      <a>
        <ResultItem>
          <Image
            src={logo}
            alt={`cursos de ${name}`}
            width="50"
            height="50"
          />
          <a href="#" className="title-card">{name}</a>
        </ResultItem>
      </a>
    </Link>
  );
};

export default Card;
