/**
 * FeatureNav - 功能导航区域
 * 参考农耕地图的1大+2中+2小卡片布局
 * 每个卡片对应一个功能板块，带有悬停展开效果
 * 支持开灯/关灯模式
 */

import { motion } from "framer-motion";
import { MapPin, Route, Trophy, Calendar, Utensils } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const MATCH_ROUTE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663342549613/PTTLTxHAi2ew5ErQAK9Ahy/match_route-jERHZTUWYEULUCUozqJic2.webp";
const TEAM_GLORY_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663342549613/PTTLTxHAi2ew5ErQAK9Ahy/team_glory-gnW3qkJkEBprMftVXxw3fR.webp";
const CALENDAR_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663342549613/PTTLTxHAi2ew5ErQAK9Ahy/calendar_banner-K8jYDSVNLTmzMApU4ddBP9.webp";
const CULTURE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663342549613/PTTLTxHAi2ew5ErQAK9Ahy/culture_food-o7WNptCREx9wAxdV6DPFK9.webp";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
  size?: "large" | "medium" | "small";
  tag?: string;
  isLightMode: boolean;
}

function FeatureCard({ title, subtitle, imageUrl, icon: Icon, className = "", delay = 0, size = "medium", tag, isLightMode }: FeatureCardProps) {
  const heightClass = size === "large" 
    ? "h-[280px] sm:h-[340px] md:h-[400px]" 
    : size === "medium" 
    ? "h-[220px] sm:h-[260px] md:h-[300px]" 
    : "h-[200px] sm:h-[240px] md:h-[280px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer ${heightClass} ${className} ${
        isLightMode ? "shadow-md shadow-gray-200/50" : ""
      }`}
      onClick={() => toast("功能即将上线", { description: `${title}模块正在开发中` })}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isLightMode ? "brightness-110" : ""
        }`}
        loading="lazy"
      />

      {/* Gradient Overlay - lighter in light mode */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isLightMode
          ? "bg-gradient-to-t from-[#2C2C2C]/50 via-[#2C2C2C]/10 to-transparent group-hover:from-[#2C2C2C]/65"
          : "bg-gradient-to-t from-[#1a1a1a]/75 via-[#1a1a1a]/25 to-[#1a1a1a]/5 group-hover:from-[#1a1a1a]/85"
      }`} />

      {/* Top tag */}
      {tag && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] px-2.5 py-1 bg-[#C84B31]/85 text-[#F5EDE0] rounded-sm tracking-wider" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            {tag}
          </span>
        </div>
      )}

      {/* Decorative corner lines on hover */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#F5EDE0]/0 group-hover:border-[#F5EDE0]/30 transition-all duration-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#F5EDE0]/0 group-hover:border-[#F5EDE0]/30 transition-all duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center mb-3 border transition-all duration-500 ${
          isLightMode
            ? "bg-white/20 border-white/25 group-hover:bg-[#C84B31]/80 group-hover:border-[#C84B31]/50"
            : "bg-[#F5EDE0]/10 border-[#F5EDE0]/15 group-hover:bg-[#C84B31]/80 group-hover:border-[#C84B31]/50"
        }`}>
          <Icon size={18} className="text-[#F5EDE0]" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3
          className="text-lg md:text-xl text-[#F5EDE0] mb-1.5 group-hover:translate-x-1 transition-transform duration-500"
          style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className="text-xs md:text-sm text-[#F5EDE0]/55 group-hover:text-[#F5EDE0]/80 transition-colors duration-500"
          style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
        >
          {subtitle}
        </p>

        {/* Arrow indicator */}
        <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-500">
          <div className="h-px w-6 bg-[#F5EDE0]/40" />
          <span className="text-[11px] text-[#F5EDE0]/50" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            探索
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#F5EDE0]/50">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeatureNav() {
  const { isLightMode } = useTheme();

  return (
    <section className="pb-16 md:pb-20" id="features">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span
            className="text-xs tracking-[0.3em] text-[#A0522D]/45 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Feature Navigation
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mt-2 text-[#2C2C2C]"
            style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
          >
            功能导航
          </h2>
          <p
            className="text-sm text-[#2C2C2C]/40 mt-2.5 max-w-sm mx-auto"
            style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 300 }}
          >
            探索湘超联赛的多种互动方式
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className={`h-px w-8 ${isLightMode ? "bg-gray-300/40" : "bg-[#C8A882]/30"}`} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C84B31]/40" />
            <div className={`h-px w-8 ${isLightMode ? "bg-gray-300/40" : "bg-[#C8A882]/30"}`} />
          </div>
        </motion.div>

        {/* Feature Cards Grid - 1 large + 2 medium + 2 small (matching reference layout) */}
        <div className="space-y-4 md:space-y-5">
          {/* Row 1: Full-width large card - 观赛路线推荐 */}
          <FeatureCard
            title="观赛路线推荐"
            subtitle="三条主题路线 · 文旅融合体验"
            imageUrl={MATCH_ROUTE_URL}
            icon={Route}
            size="large"
            delay={0.1}
            tag="热门"
            isLightMode={isLightMode}
          />

          {/* Row 2: Two medium cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <FeatureCard
              title="球队风采"
              subtitle="14支城市代表队 · 热血征程"
              imageUrl={TEAM_GLORY_URL}
              icon={Trophy}
              size="medium"
              delay={0.2}
              isLightMode={isLightMode}
            />
            <FeatureCard
              title="赛事日历"
              subtitle="完整赛程 · 不错过每一场"
              imageUrl={CALENDAR_URL}
              icon={Calendar}
              size="medium"
              delay={0.3}
              tag="赛程"
              isLightMode={isLightMode}
            />
          </div>

          {/* Row 3: Two smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <FeatureCard
              title="湘超文旅"
              subtitle="观赛+美食+景点 · 一站式体验"
              imageUrl={CULTURE_URL}
              icon={Utensils}
              size="small"
              delay={0.4}
              isLightMode={isLightMode}
            />
            <FeatureCard
              title="积分排行"
              subtitle="实时积分榜 · 球队数据统计"
              imageUrl="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
              icon={MapPin}
              size="small"
              delay={0.5}
              tag="数据"
              isLightMode={isLightMode}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
