import { motion } from "framer-motion";
import { Play, Video, Gift, Sparkles, Palette, Camera } from "lucide-react";

// Import service images
import knittedArt from "@/assets/services/knitted-art.jpg";
import birthdayGlam from "@/assets/services/birthday-glam.jpg";
import lemonBath from "@/assets/services/lemon-bath.jpg";
import burningCar from "@/assets/services/burning-car.jpg";
import moneyBath from "@/assets/services/money-bath.jpg";
import rublesBath from "@/assets/services/rubles-bath.jpg";
import audiNight from "@/assets/services/audi-night.jpg";
import boxingWet from "@/assets/services/boxing-wet.jpg";
import cartoonLove1 from "@/assets/services/cartoon-love1.jpg";
import cartoonLove2 from "@/assets/services/cartoon-love2.jpg";

const serviceImages = [
  { src: knittedArt, alt: "Вязаный арт" },
  { src: birthdayGlam, alt: "Гламурный день рождения" },
  { src: lemonBath, alt: "Лимонная эстетика" },
  { src: burningCar, alt: "Кинематографичный кадр" },
  { src: moneyBath, alt: "Luxury стиль" },
  { src: rublesBath, alt: "Rich aesthetic" },
  { src: audiNight, alt: "Ночная съемка" },
  { src: boxingWet, alt: "Спортивный образ" },
  { src: cartoonLove1, alt: "Мультяшный стиль" },
  { src: cartoonLove2, alt: "Анимация любви" },
];

const additionalServices = [
  {
    icon: Play,
    title: "Оживляем фотографии",
    description: "Превращаем статичные фото в живые видео с движением",
  },
  {
    icon: Video,
    title: "Креативные видео рекламы",
    description: "Вирусные ролики для соцсетей и бизнеса",
  },
  {
    icon: Sparkles,
    title: "Проекты под ключ",
    description: "Полный цикл от идеи до готового контента",
  },
  {
    icon: Gift,
    title: "Видео подарки",
    description: "Уникальные анимированные поздравления",
  },
];

export const Services = () => {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...serviceImages, ...serviceImages];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Не только <span className="gradient-text">фотосессии</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Создаём контент любой сложности — от живых фото до полноценных видеопроектов
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative mb-16">
        {/* Gradient overlays for seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <motion.div
          className="flex gap-4 mb-4"
          animate={{
            x: [0, -50 * serviceImages.length * 16],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/50" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second row - scrolling right */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: [-50 * serviceImages.length * 16, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {[...duplicatedImages].reverse().map((image, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl ring-2 ring-accent/50" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Additional Services Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            А также <span className="gradient-text">создаём</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-5 md:p-6 h-full text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon with gradient background */}
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                
                <h4 className="font-semibold text-sm md:text-base text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
