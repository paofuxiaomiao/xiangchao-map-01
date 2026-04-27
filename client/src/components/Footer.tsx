/**
 * Footer - 页面底部
 * 新中式风格，简洁的底部信息
 */

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#C8A882]/20 mt-4">
      <div className="container py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#2C2C2C] flex items-center justify-center">
                <span className="text-[#F5EDE0] text-[10px] font-bold" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  湘
                </span>
              </div>
              <div>
                <span
                  className="text-sm text-[#2C2C2C] tracking-wider"
                  style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}
                >
                  湘超联赛地图
                </span>
                <p className="text-[10px] text-[#A0522D]/40 mt-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}>
                  快乐足球 · 全民参与
                </p>
              </div>
            </div>

            {/* Center - Decorative */}
            <div className="hidden md:flex items-center gap-4">
              <div className="h-px w-10 bg-[#C8A882]/25" />
              <span
                className="text-[10px] text-[#A0522D]/30 tracking-[0.2em]"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                Hunan Football League
              </span>
              <div className="h-px w-10 bg-[#C8A882]/25" />
            </div>

            {/* Right - Links */}
            <div className="flex items-center gap-6">
              {["关于湘超", "赛事规程", "联系我们"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-[#2C2C2C]/35 hover:text-[#C84B31] transition-colors duration-300"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
                  onClick={(e) => e.preventDefault()}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-5 border-t border-[#C8A882]/10 text-center">
            <p className="text-[10px] text-[#2C2C2C]/20" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}>
              2025 湖南省足球联赛 · 湘超联赛互动地图
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
