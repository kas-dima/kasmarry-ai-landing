import { motion } from "framer-motion";
import { useState } from "react";

// Import gallery images
import russianTraditional from "@/assets/gallery/russian-traditional.jpg";
import fashionElevator from "@/assets/gallery/fashion-elevator.jpg";
import urbanFashion from "@/assets/gallery/urban-fashion.jpg";
import romanticCouple from "@/assets/gallery/romantic-couple.jpg";
import russianWinter from "@/assets/gallery/russian-winter.jpg";
import pinkAesthetic from "@/assets/gallery/pink-aesthetic.jpg";
import nightCity from "@/assets/gallery/night-city.jpg";
import artisticKisses from "@/assets/gallery/artistic-kisses.jpg";
interface GalleryItem {
  id: number;
  image: string;
  title: string;
  style: string;
}
const galleryItems: GalleryItem[] = [{
  id: 1,
  image: russianTraditional,
  title: "Царское наследие",
  style: "Традиционный"
}, {
  id: 2,
  image: fashionElevator,
  title: "Городская элегантность",
  style: "Фэшн"
}, {
  id: 3,
  image: urbanFashion,
  title: "Неоновые ночи",
  style: "Киберпанк"
}, {
  id: 4,
  image: romanticCouple,
  title: "Зимняя романтика",
  style: "Для пар"
}, {
  id: 5,
  image: russianWinter,
  title: "Сказка",
  style: "Фэнтези"
}, {
  id: 6,
  image: pinkAesthetic,
  title: "Розовые мечты",
  style: "Эстетика"
}, {
  id: 7,
  image: nightCity,
  title: "Ритм города",
  style: "Уличный"
}, {
  id: 8,
  image: artisticKisses,
  title: "Люби себя",
  style: "Арт"
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};
export const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return <section id="gallery" className="py-20 relative md:py-[50px]">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Более <span className="gradient-text">100 стилей</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От элегантных бизнес-портретов до креативных фэнтези-съемок — ваш идеальный образ ждёт вас.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map(item => <motion.div key={item.id} variants={itemVariants} className="relative group cursor-pointer" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
              <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20 rounded-xl blur-xl transition-opacity duration-500 ${hoveredId === item.id ? "opacity-70" : "opacity-0"}`} />
                
                {/* Image */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className={`transform transition-all duration-300 ${hoveredId === item.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                    <span className="inline-block px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium mb-2">
                      {item.style}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Border gradient */}
                <div className="absolute inset-0 rounded-xl border border-border/50 group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};