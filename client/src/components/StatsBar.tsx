/**
 * StatsBar - 赛事数据统计条
 * 展示湘超联赛核心数据，数字翻牌动画
 * 支持开灯/关灯模式
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const stats = [
  { value: 14, label: "参赛城市", suffix: "城" },
  { value: 98, label: "比赛场次", suffix: "场" },
  { value: 700, label: "参赛球员", suffix: "+" },
  { value: 17, label: "赛事周期", suffix: "周" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const { isLightMode } = useTheme();

  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`grid grid-cols-4 gap-2 md:gap-0 md:flex md:items-center md:justify-center md:gap-16 lg:gap-24 py-6 px-4 md:px-12 border-y relative transition-colors duration-700 ${
            isLightMode
              ? "border-gray-200/60 bg-gray-50/30"
              : "border-[#C8A882]/25"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-1 h-1 rounded-full bg-[#C84B31]/30" />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-1 h-1 rounded-full bg-[#C84B31]/30" />
          </div>

          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2C2C2C]"
                style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700 }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-[9px] sm:text-[10px] md:text-xs text-[#A0522D]/50 mt-1.5 tracking-wider"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
