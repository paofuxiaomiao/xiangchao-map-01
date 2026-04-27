/**
 * Navbar - 顶部导航栏
 * 新中式卷轴题签风格，米白底色+墨色文字+朱砂红强调
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Utensils, Menu, X } from "lucide-react";

const navItems = [
  { label: "全部", href: "#all", active: true },
  { label: "湘北赛区", href: "#north" },
  { label: "湘中赛区", href: "#central" },
  { label: "湘南赛区", href: "#south" },
  { label: "湘西赛区", href: "#west" },
];

const quickLinks = [
  { icon: MapPin, label: "地图", href: "#map" },
  { icon: Calendar, label: "日历", href: "#schedule" },
  { icon: Utensils, label: "文旅", href: "#culture" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5EDE0]/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,75,49,0.12)]"
          : "bg-[#F5EDE0]/80 backdrop-blur-sm"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C84B31] to-[#A0522D]"
        style={{ width: progressWidth }}
      />

      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#2C2C2C] flex items-center justify-center shadow-sm">
              <span className="text-[#F5EDE0] font-bold text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                湘
              </span>
            </div>
            <span
              className="text-base tracking-wider text-[#2C2C2C] hidden sm:block"
              style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}
            >
              湘超联赛地图
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 text-[13px] tracking-wide transition-all duration-300 relative rounded-sm ${
                  item.active
                    ? "text-[#F5EDE0]"
                    : "text-[#2C2C2C]/55 hover:text-[#2C2C2C]/90"
                }`}
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: item.active ? 500 : 400 }}
              >
                {item.active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-[#2C2C2C] rounded-sm"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex items-center gap-5">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-[13px] text-[#2C2C2C]/50 hover:text-[#C84B31] transition-colors duration-300 group"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                <link.icon size={15} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#F5EDE0]/98 backdrop-blur-md border-t border-[#C8A882]/15 overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block px-4 py-2.5 text-sm rounded-sm transition-colors ${
                    item.active
                      ? "bg-[#2C2C2C] text-[#F5EDE0]"
                      : "text-[#2C2C2C]/60 hover:text-[#2C2C2C] hover:bg-[#C8A882]/10"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex gap-5 pt-3 mt-2 border-t border-[#C8A882]/15">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 text-sm text-[#2C2C2C]/50"
                  >
                    <link.icon size={15} strokeWidth={1.5} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
