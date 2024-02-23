import { FC } from "react";

export interface ModelCardProps {
  /** Image url for model icon */
  icon: string;
  /** Model modelAuthor */
  modelAuthor: string;
  /** Model name */
  modelName: string;
  /** External link to model */
  externalLink?: string;
}

const ModelCard: FC<ModelCardProps> = ({
  icon,
  modelAuthor,
  modelName,
  externalLink,
}) => (
  <div className="card model-card">
    <div className="info">
      <img className="icon" src={icon} alt={`${modelAuthor} icon`} />
      <p>
        <span>{modelAuthor}</span>/<span>{modelName}</span>
      </p>
    </div>
    {externalLink && (
      <a href={externalLink} target="_blank">
        <img src="/icons/external-link.svg" alt="Follow link" />
      </a>
    )}
  </div>
);

export default ModelCard;
