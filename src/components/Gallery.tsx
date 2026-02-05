import { motion } from "framer-motion";
import { Play, Video, Gift, Sparkles } from "lucide-react";

// Import existing gallery images
import russianTraditional from "@/assets/gallery/russian-traditional.jpg";
import fashionElevator from "@/assets/gallery/fashion-elevator.jpg";
import urbanFashion from "@/assets/gallery/urban-fashion.jpg";
import romanticCouple from "@/assets/gallery/romantic-couple.jpg";
import russianWinter from "@/assets/gallery/russian-winter.jpg";
import pinkAesthetic from "@/assets/gallery/pink-aesthetic.jpg";
import nightCity from "@/assets/gallery/night-city.jpg";
import artisticKisses from "@/assets/gallery/artistic-kisses.jpg";

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

// Import new gallery images
import audiSnow from "@/assets/gallery/audi-snow.jpg";
import bmwSnowDrift from "@/assets/gallery/bmw-snow-drift.jpg";
import bmwNightGirl from "@/assets/gallery/bmw-night-girl.jpg";
import farmFashion from "@/assets/gallery/farm-fashion.jpg";
import wheatField from "@/assets/gallery/wheat-field.jpg";
import tokyoCrosswalk from "@/assets/gallery/tokyo-crosswalk.jpg";
import gasStation from "@/assets/gallery/gas-station.jpg";
import porscheGraffiti from "@/assets/gallery/porsche-graffiti.jpg";
import cityAerial from "@/assets/gallery/city-aerial.jpg";
import f1Pitlane from "@/assets/gallery/f1-pitlane.jpg";

const galleryImages = [
  { src: russianTraditional, alt: "Царское наследие" },
  { src: fashionElevator, alt: "Городская элегантность" },
  { src: urbanFashion, alt: "Неоновые ночи" },
  { src: romanticCouple, alt: "Зимняя романтика" },
  { src: knittedArt, alt: "Вязаный арт" },
  { src: birthdayGlam, alt: "День рождения" },
  { src: lemonBath, alt: "Лимонная эстетика" },
  { src: burningCar, alt: "Кинематограф" },
  { src: moneyBath, alt: "Luxury стиль" },
  { src: audiSnow, alt: "Дрифт на снегу" },
  { src: bmwSnowDrift, alt: "Закатный дрифт" },
  { src: wheatField, alt: "Русское поле" },
  { src: tokyoCrosswalk, alt: "Токийский стиль" },
  { src: f1Pitlane, alt: "Формула 1" },
];

const galleryImagesRow2 = [
  { src: russianWinter, alt: "Сказка" },
  { src: pinkAesthetic, alt: "Розовые мечты" },
  { src: nightCity, alt: "Ритм города" },
  { src: artisticKisses, alt: "Люби себя" },
  { src: rublesBath, alt: "Rich aesthetic" },
  { src: audiNight, alt: "Ночная съемка" },
  { src: boxingWet, alt: "Спортивный образ" },
  { src: cartoonLove1, alt: "Мультяшный стиль" },
  { src: cartoonLove2, alt: "Анимация любви" },
  { src: bmwNightGirl, alt: "Ночной драйв" },
  { src: farmFashion, alt: "Ферма-глэм" },
  { src: gasStation, alt: "Заправка" },
  { src: porscheGraffiti, alt: "Граффити стиль" },
  { src: cityAerial, alt: "Город с высоты" },
];

const additionalServices = [
  {
    icon: Play,
    title: "Оживляем фотографии",
    description: "Превращаем статичные фото в живые видео",
  },
  {
    icon: Video,
    title: "Креативные видео рекламы",
    description: "Вирусные ролики для соцсетей",
  },
  {
    icon: Sparkles,
    title: "Проекты под ключ",
    description: "От идеи до готового контента",
  },
  {
    icon: Gift,
    title: "Видео подарки",
    description: "Уникальные анимированные поздравления",
  },
];

export const Gallery = () => {
  // Duplicate images for seamless infinite scroll
  const duplicatedRow1 = [...galleryImages, ...galleryImages];
  const duplicatedRow2 = [...galleryImagesRow2, ...galleryImagesRow2];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden md:py-[50px]">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
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
            Более <span className="gradient-text">4000 стилей</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От элегантных бизнес-портретов до креативных фэнтези-съемок — ваш идеальный образ ждёт вас.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative mb-12">
        {/* Gradient overlays for seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <motion.div
          className="flex gap-4 mb-4"
          animate={{
            x: [0, -288 * galleryImages.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {duplicatedRow1.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="relative flex-shrink-0 w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-foreground">{image.alt}</span>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Second row - scrolling right */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: [-288 * galleryImagesRow2.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 65,
              ease: "linear",
            },
          }}
        >
          {duplicatedRow2.map((image, index) => (
            <div
              key={`row2-${index}`}
              className="relative flex-shrink-0 w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-foreground">{image.alt}</span>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-border/50 group-hover:border-accent/50 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Additional Services */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold">
            А также <span className="gradient-text">создаём</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5"
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
              <div className="glass-card rounded-xl p-4 md:p-5 h-full text-center hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                
                <h4 className="font-semibold text-xs md:text-sm text-foreground mb-1">
                  {service.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
