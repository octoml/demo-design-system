import Image from "next/image";
import { FC, ReactElement } from "react";
import ModelCard, { ModelCardProps } from "../Cards/ModelCard/ModelCard";

interface CardGridProps {
  /** Heading above grid */
  heading?: ReactElement;
  /** Array of cards to display */
  cards: ModelCardProps[];
}

const CardGrid: FC<CardGridProps> = ({ heading, cards }) => {
  return (
    <div className="card-grid">
      {heading && <div className="heading">{heading}</div>}
      <div className="cards">
        {cards?.map((card) => (
          <ModelCard key={card?.modelAuthor + card?.modelName} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
