import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const TELEGRAM_URL = "https://t.me/marry_pechataet";

export const MobileBottomBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="glass-card border-t border-border/50 p-4">
        <Button
          variant="glow"
          size="lg"
          asChild
          className="w-full"
        >
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Send className="w-5 h-5 mr-2" />
            Заказать съемку в Telegram
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
