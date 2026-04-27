/**
 * ScheduleTimeline - 赛程时间轴
 * 展示湘超联赛关键赛事节点，水墨风格时间轴
 */

import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const timeline: TimelineItem[] = [
  { date: "9月7日", title: "揭幕战", description: "长沙贺龙体育场 · 开幕式", highlight: true },
  { date: "9月-11月", title: "常规赛", description: "14队单循环 · 13轮比赛" },
  { date: "12月6日", title: "常规赛收官", description: "积分前8名晋级淘汰赛" },
  { date: "12月13日", title: "四分之一决赛", description: "淘汰赛首轮 · 单回合制" },
  { date: "12月20日", title: "半决赛", description: "四强争夺 · 巅峰对决" },
  { date: "12月27日", title: "总决赛", description: "永州队夺冠 · 贺龙体育场", highlight: true },
];

export default function ScheduleTimeline() {
  return (
    <section className="py-12 md:py-16 border-t border-[#C8A882]/15" id="schedule">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span
            className="text-[10px] md:text-xs tracking-[0.3em] text-[#A0522D]/45 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Schedule
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mt-2 text-[#2C2C2C]"
            style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
          >
            赛事时间轴
          </h2>
          <p
            className="text-sm text-[#2C2C2C]/40 mt-2.5"
            style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
          >
            2025赛季关键节点
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-8 bg-[#C8A882]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C84B31]/40" />
            <div className="h-px w-8 bg-[#C8A882]/30" />
          </div>
        </motion.div>

        {/* Timeline - Desktop: alternating, Mobile: left-aligned */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A882]/10 via-[#C8A882]/25 to-[#C8A882]/10 md:-translate-x-px" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 z-10 top-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      item.highlight
                        ? "bg-[#C84B31] border-[#C84B31] shadow-[0_0_8px_rgba(200,75,49,0.3)]"
                        : "bg-[#F5EDE0] border-[#C8A882]/40 hover:border-[#C84B31]/60"
                    }`}
                  />
                </div>

                {/* Content - Mobile always right, Desktop alternating */}
                <div className={`ml-10 md:ml-0 md:flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                    <span
                      className={`text-xs tracking-wider inline-block ${
                        item.highlight ? "text-[#C84B31] font-medium" : "text-[#A0522D]/50"
                      }`}
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {item.date}
                    </span>
                    <h3
                      className="text-base md:text-lg text-[#2C2C2C] mt-0.5"
                      style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs text-[#2C2C2C]/40 mt-0.5"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
