/**
 * TeamShowcase - 球队展示区域
 * 展示14支城市代表队的信息卡片，横向滚动
 * 支持开灯/关灯模式
 */

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Team {
  name: string;
  city: string;
  rank: number;
  points: number;
  color: string;
  region: string;
  slogan: string;
}

const teams: Team[] = [
  { name: "长沙队", city: "长沙", rank: 1, points: 35, color: "#C84B31", region: "湘中", slogan: "星城雄狮" },
  { name: "株洲队", city: "株洲", rank: 2, points: 27, color: "#2B4C7E", region: "湘中", slogan: "动力之城" },
  { name: "常德队", city: "常德", rank: 3, points: 26, color: "#5B7553", region: "湘北", slogan: "桃源铁军" },
  { name: "娄底队", city: "娄底", rank: 4, points: 23, color: "#8B6914", region: "湘中", slogan: "钢铁之师" },
  { name: "永州队", city: "永州", rank: 5, points: 22, color: "#C84B31", region: "湘南", slogan: "永冲锋" },
  { name: "衡阳队", city: "衡阳", rank: 6, points: 20, color: "#A0522D", region: "湘南", slogan: "雁城战鹰" },
  { name: "郴州队", city: "郴州", rank: 7, points: 19, color: "#2B4C7E", region: "湘南", slogan: "福城勇士" },
  { name: "岳阳队", city: "岳阳", rank: 8, points: 19, color: "#5B7553", region: "湘北", slogan: "洞庭之子" },
  { name: "益阳队", city: "益阳", rank: 9, points: 18, color: "#8B6914", region: "湘北", slogan: "银城猛虎" },
  { name: "邵阳队", city: "邵阳", rank: 10, points: 13, color: "#A0522D", region: "湘中", slogan: "宝庆勇士" },
  { name: "湘潭队", city: "湘潭", rank: 11, points: 11, color: "#C84B31", region: "湘中", slogan: "莲城风暴" },
  { name: "怀化队", city: "怀化", rank: 12, points: 6, color: "#5B7553", region: "湘西", slogan: "五溪铁骑" },
  { name: "湘西队", city: "湘西", rank: 13, points: 5, color: "#2B4C7E", region: "湘西", slogan: "神秘湘西" },
  { name: "张家界队", city: "张家界", rank: 14, points: 4, color: "#5B7553", region: "湘西", slogan: "仙境之队" },
];

export default function TeamShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { isLightMode } = useTheme();

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -340 : 340;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  const fadeBg = isLightMode ? "#FFFFFF" : "#F5EDE0";

  return (
    <section className="py-12 md:py-16" id="teams">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-7 md:mb-8"
        >
          <div>
            <span
              className="text-[10px] md:text-xs tracking-[0.3em] text-[#A0522D]/45 uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Teams
            </span>
            <h2
              className="text-2xl md:text-3xl mt-1 text-[#2C2C2C]"
              style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
            >
              十四城战队
            </h2>
          </div>

          {/* Scroll Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-8 h-8 md:w-9 md:h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-[#2C2C2C]/20 text-[#2C2C2C]/50 hover:border-[#C84B31]/60 hover:text-[#C84B31]"
                  : "border-[#C8A882]/15 text-[#C8A882]/25"
              }`}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-8 h-8 md:w-9 md:h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-[#2C2C2C]/20 text-[#2C2C2C]/50 hover:border-[#C84B31]/60 hover:text-[#C84B31]"
                  : "border-[#C8A882]/15 text-[#C8A882]/25"
              }`}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>

        {/* Scrollable Team Cards */}
        <div className="relative">
          {/* Fade edges - adapt to theme */}
          <div
            className="absolute left-0 top-0 bottom-4 w-8 z-10 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: canScrollLeft ? 1 : 0,
              background: `linear-gradient(to right, ${fadeBg}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-4 w-8 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeBg}, transparent)`,
            }}
          />

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {teams.map((team, i) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                className="flex-shrink-0 w-[170px] md:w-[200px] group cursor-pointer"
              >
                <div className={`border rounded-sm p-4 md:p-5 h-full transition-all duration-500 relative overflow-hidden ${
                  isLightMode
                    ? "bg-white border-gray-200/60 group-hover:border-[#C84B31]/30 group-hover:shadow-[0_8px_30px_rgba(200,75,49,0.08)]"
                    : "bg-[#F5EDE0] border-[#C8A882]/15 group-hover:border-[#C84B31]/25 group-hover:shadow-[0_6px_24px_rgba(200,75,49,0.06)]"
                }`}>
                  {/* Subtle top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: team.color }}
                  />

                  {/* Rank Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: team.color }}
                    >
                      {team.rank}
                    </div>
                    <span className="text-[9px] md:text-[10px] text-[#A0522D]/35 tracking-wider" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}>
                      {team.region}
                    </span>
                  </div>

                  {/* Team Name */}
                  <h3
                    className="text-base md:text-lg text-[#2C2C2C] mb-0.5"
                    style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}
                  >
                    {team.name}
                  </h3>

                  {/* Slogan */}
                  <p className="text-[10px] md:text-xs text-[#A0522D]/40 mb-3 md:mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}>
                    {team.slogan}
                  </p>

                  {/* Points */}
                  <div className={`flex items-baseline gap-1 pt-3 border-t ${
                    isLightMode ? "border-gray-200/50" : "border-[#C8A882]/12"
                  }`}>
                    <span
                      className="text-xl md:text-2xl text-[#2C2C2C]"
                      style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700 }}
                    >
                      {team.points}
                    </span>
                    <span className="text-[9px] md:text-[10px] text-[#A0522D]/35" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}>
                      积分
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
