import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./column-card.module.scss";

export type ColumnCardProps = HTMLAttributes<HTMLDivElement> & {
  alt: string;
  bgc: string;
  heading: string;
  src: string;
  text: string;
};
export default function ColumnCard({
  alt,
  bgc,
  className,
  heading,
  src,
  text,
}: ColumnCardProps) {
  return (
    <div
      className={clsx(styles.column, className)}
      style={{ backgroundColor: bgc }}>
      <img alt={alt} className={clsx(styles["column-image"])} src={src} />
      <h1 className={clsx(styles["column-heading"])}>{heading}</h1>
      <p className={clsx(styles["column-text"])}>{text}</p>
      <button className={clsx(styles["column-button"])} type="button">
        Learn More
      </button>
    </div>
  );
}
