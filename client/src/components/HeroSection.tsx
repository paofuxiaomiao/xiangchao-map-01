/**
 * HeroSection - 页面顶部英雄区域
 * 展示湘超联赛主视觉，带有卷轴展开动画效果
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HERO_MAP_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663342549613/PTTLTxHAi2ew5ErQAK9Ahy/hero_map-B8xceQvduLTu5V6oQPRsAg.webp";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.8]);

  return (
    <section ref={sectionRef} className="relative pt-16 md:pt-18">
      {/* Decorative top border */}
      <div className="absolute top-16 md:top-18 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A882]/40 to-transparent" />

      {/* Hero Content */}
      <div className="container pt-8 md:pt-10 pb-4 md:pb-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5 md:mb-6"
        >
          <span
            className="text-[10px] md:text-xs tracking-[0.3em] text-[#A0522D]/50 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Interactive Map
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl mt-2 text-[#2C2C2C]"
            style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
          >
            湘超联赛地图
          </h1>
          <p
            className="text-sm md:text-base text-[#2C2C2C]/45 mt-2.5 max-w-md mx-auto"
            style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
          >
            探索湖南十四城，感受湘超联赛的热血与文化
          </p>
        </motion.div>

        {/* Hero Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          {/* Decorative frame corners */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#C84B31]/25 z-10 transition-all duration-500 group-hover:border-[#C84B31]/50 group-hover:w-10 group-hover:h-10" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#C84B31]/25 z-10 transition-all duration-500 group-hover:border-[#C84B31]/50 group-hover:w-10 group-hover:h-10" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#C84B31]/25 z-10 transition-all duration-500 group-hover:border-[#C84B31]/50 group-hover:w-10 group-hover:h-10" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C84B31]/25 z-10 transition-all duration-500 group-hover:border-[#C84B31]/50 group-hover:w-10 group-hover:h-10" />

          {/* Map Image Container */}
          <div className="relative overflow-hidden rounded-sm">
            <motion.img
              src={HERO_MAP_URL}
              alt="湘超联赛地图 - 湖南十四城球队分布"
              className="w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] object-cover"
              style={{ y: imageY }}
            />

            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent"
              style={{ opacity: overlayOpacity }}
            />

            {/* Vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(44,44,44,0.15)]" />

            {/* Map info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C84B31]/90 flex items-center justify-center backdrop-blur-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="text-[#F5EDE0]/50 text-[10px] md:text-xs tracking-wider uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Hunan Province
                    </span>
                  </div>
                  <h2
                    className="text-lg md:text-xl lg:text-2xl text-[#F5EDE0] font-semibold"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    湘超赛事一览
                  </h2>
                  <p className="text-[#F5EDE0]/60 text-xs md:text-sm mt-1" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}>
                    14支城市代表队 · 98场精彩对决 · 三色图层
                  </p>
                </div>

                {/* Seal stamp */}
                <div className="hidden sm:block">
                  <motion.div
                    initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="border-2 border-[#C84B31]/60 px-3 py-1.5 relative"
                  >
                    <span
                      className="text-[#C84B31]/80 text-xs tracking-wider"
                      style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}
                    >
                      2025
                    </span>
                    <div className="absolute inset-0 border border-[#C84B31]/20 -m-px" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
