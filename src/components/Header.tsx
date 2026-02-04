import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const TELEGRAM_URL = "https://t.me/marry_pechataet";
const INSTAGRAM_URL = "https://www.instagram.com/kasmarry";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold gradient-text">
            KasMarry AI
          </span>
        </a>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <Button
            variant="gradient"
            size="default"
            asChild
            className="hidden md:inline-flex"
          >
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Заказать
            </a>
          </Button>
          
          {/* Mobile CTA */}
          <Button
            variant="gradient"
            size="sm"
            asChild
            className="md:hidden"
          >
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Send className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
