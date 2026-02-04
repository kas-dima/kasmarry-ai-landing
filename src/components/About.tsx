import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Обо мне</span>
          </motion.div>

          {/* Quote */}
          <blockquote className="relative">
            <div className="absolute -top-6 -left-4 text-8xl text-primary/20 font-serif select-none">"</div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
              Привет! Я — <span className="gradient-text">Marry</span>. Я объединяю эстетику и технологии, 
              чтобы создать вашу цифровую лучшую версию. Твой идеальный кадр уже существует, 
              осталось его <span className="gradient-text">проявить</span>.
            </p>
            <div className="absolute -bottom-4 -right-4 text-8xl text-primary/20 font-serif select-none rotate-180">"</div>
          </blockquote>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <p className="text-xl font-semibold gradient-text">— Marry</p>
            <p className="text-sm text-muted-foreground mt-1">Основатель KasMarry AI</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
