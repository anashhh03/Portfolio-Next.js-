import { gridItems } from "./data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">

        {/* ---------------- CARD 1 ---------------- */}
        <BentoGridItem
          id={`card-${gridItems[0].id}`}
          title={gridItems[0].title}
          description={gridItems[0].description}
          className={gridItems[0].className}
          img={gridItems[0].img}
          imgClassName={gridItems[0].imgClassName}
          titleClassName={gridItems[0].titleClassName}
          visual={gridItems[0].spareImg ? <img src={gridItems[0].spareImg} alt="" /> : null}
        />

        {/* ---------------- CARD 2 ---------------- */}
        <BentoGridItem
          id={`card-${gridItems[1].id}`}
          title={gridItems[1].title}
          description={gridItems[1].description}
          className={gridItems[1].className}
          img={gridItems[1].img}
          imgClassName={gridItems[1].imgClassName}
          titleClassName={gridItems[1].titleClassName}
          visual={gridItems[1].spareImg ? <img src={gridItems[1].spareImg} alt="" /> : null}
        />

        {/* ---------------- CARD 3 ---------------- */}
        <BentoGridItem
          id={`card-${gridItems[2].id}`}
          title={gridItems[2].title}
          description={gridItems[2].description}
          className={gridItems[2].className}
          img={gridItems[2].img}
          imgClassName={gridItems[2].imgClassName}
          titleClassName={gridItems[2].titleClassName}
          visual={gridItems[2].spareImg ? <img src={gridItems[2].spareImg} alt="" /> : null}
        />

        {/* ---------------- CARD 4 ---------------- */}
        <BentoGridItem
          id={`card-${gridItems[3].id}`}
          title={gridItems[3].title}
          description={gridItems[3].description}
          className={gridItems[3].className}
          img={gridItems[3].img}
          imgClassName={gridItems[3].imgClassName}
          titleClassName={gridItems[3].titleClassName}
          visual={gridItems[3].spareImg ? <img src={gridItems[3].spareImg} alt="" /> : null}
        />

        {/* ---------------- CARD 5 ---------------- */}
        <BentoGridItem
          id={`card-${gridItems[4].id}`}
          title={gridItems[4].title}
          description={gridItems[4].description}
          className={gridItems[4].className}
          img={gridItems[4].img}
          imgClassName={gridItems[4].imgClassName}
          titleClassName={gridItems[4].titleClassName}
          visual={gridItems[4].spareImg ? <img src={gridItems[4].spareImg} alt="" /> : null}
        />

        {/* ---------------- CARD 6 ---------------- */}
        <BentoGridItem
          id={`card-${gridItems[5].id}`}
          title={gridItems[5].title}
          description={gridItems[5].description}
          className={gridItems[5].className}
          img={gridItems[5].img}
          imgClassName={gridItems[5].imgClassName}
          titleClassName={gridItems[5].titleClassName}
          visual={gridItems[5].spareImg ? <img src={gridItems[5].spareImg} alt="" /> : null}
        />

      </BentoGrid>
    </section>
  );
};

export default Grid;
