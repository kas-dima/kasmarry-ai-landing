import { motion } from "framer-motion";
import { Instagram, DollarSign, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const INSTAGRAM_URL = "https://www.instagram.com/kasmarry";
const benefits = [{
  icon: DollarSign,
  title: "Экономия бюджета",
  description: "Результат глянцевого уровня по цене ужина в кафе."
}, {
  icon: MapPin,
  title: "Локации всего мира",
  description: "Париж, Бали или Киберпанк — без перелетов."
}, {
  icon: CheckCircle,
  title: "Идеально с 1-го дубля",
  description: "Никаких закрытых глаз и неудачных ракурсов."
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
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};
export const WhyUs = () => {
  return <section className="py-20 relative overflow-hidden md:py-[70px]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Benefits */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Почему <span className="gradient-text">KasMarry AI</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Испытайте будущее профессиональной фотографии с передовыми AI-технологиями.
            </p>

            <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} className="space-y-6">
              {benefits.map(benefit => <motion.li key={benefit.title} variants={itemVariants} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.li>)}
            </motion.ul>
          </motion.div>

          {/* Right - Instagram CTA */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="glass-card rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Следите за нами
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Вдохновляйтесь нашими последними AI-работами и закулисным контентом в Instagram.
                </p>

                <Button variant="gradient" size="lg" asChild>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-center">    ​<Instagram className="w-5 h-5 mr-2" />
                    @kasmarry
                  </a>
                </Button>

                {/* Stats */}
                <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold gradient-text">5K+</p>
                    <p className="text-sm text-muted-foreground">Подписчиков</p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div>
                    <p className="text-2xl font-bold gradient-text">500+</p>
                    <p className="text-sm text-muted-foreground">Работ</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};