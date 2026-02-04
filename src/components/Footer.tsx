import { Instagram, Send, Heart } from "lucide-react";
const TELEGRAM_URL = "https://t.me/marry_pechataet";
const INSTAGRAM_URL = "https://www.instagram.com/kasmarry";
export const Footer = () => {
  return <footer className="border-t border-border/50 py-[20px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">KasMarry AI</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300" aria-label="Telegram">
              <Send className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">Сделано <Heart className="w-4 h-4 text-accent fill-accent" /> KasMarry AI © 2026
          </p>
        </div>
      </div>
    </footer>;
};