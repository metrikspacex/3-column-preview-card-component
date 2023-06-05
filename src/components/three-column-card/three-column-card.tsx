import clsx from "clsx";
import type { HTMLAttributes } from "react";

import IconLuxury from "../../assets/images/icon-luxury.svg";
import IconSedans from "../../assets/images/icon-sedans.svg";
import IconSuvs from "../../assets/images/icon-suvs.svg";
import ColumnCard from "./column-card/column-card";
import styles from "./three-column-card.module.scss";

export type ThreeColumnCardProps = HTMLAttributes<HTMLDivElement>;
export default function ThreeColumnCard({ className }: ThreeColumnCardProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <ColumnCard
        alt="Sedans"
        bgc="#e28625"
        heading="Sedans"
        src={IconSedans}
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />

      <ColumnCard
        alt="Suvs"
        bgc="#006971"
        heading="SUVs"
        src={IconSuvs}
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />

      <ColumnCard
        alt="Luxury"
        bgc="#004140"
        heading="Luxury"
        src={IconLuxury}
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
      />
    </div>
  );
}
