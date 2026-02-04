import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import before/after images
import beforeImage from "@/assets/gallery/artistic-kisses.jpg";
import afterImage from "@/assets/gallery/fashion-elevator.jpg";
const TELEGRAM_URL = "https://t.me/marry_pechataet";
export const Hero = () => {
  return <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex items-end justify-center">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center lg:text-left">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Фотосессии</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Глянцевые фотосессии{" "}
              <span className="gradient-text">без фотографа</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">Создаем глянцевые фотосессии с помощью нейросетей. Без фотографов, студий и визажистов. Идеальный результат за 5 минут.</p>

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="glow" size="xl" asChild className="group">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Заказать съемку в Telegram
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">100+</p>
                <p className="text-sm text-muted-foreground">Стилей</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">5 минут</p>
                <p className="text-sm text-muted-foreground">Выполнение</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">1 000+</p>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Before/After Showcase */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative">
            <div className="relative flex items-center justify-center gap-4 md:gap-6">
              {/* Before Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative overflow-hidden rounded-2xl gradient-border">
                  <img src={beforeImage} alt="До — Селфи" className="w-36 md:w-48 h-52 md:h-72 object-cover image-hover" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                    До
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-float">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-l from-accent/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative overflow-hidden rounded-2xl gradient-border glow-effect">
                  <img src={afterImage} alt="После — Профессиональный AI-портрет" className="w-44 md:w-56 h-64 md:h-80 object-cover image-hover" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-medium text-primary-foreground">
                    AI Результат
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};