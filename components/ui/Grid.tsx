import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((i) => (
          <BentoGridItem
            id={i.id}
            key={i.key}
            title={i.title}
            description={i.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
