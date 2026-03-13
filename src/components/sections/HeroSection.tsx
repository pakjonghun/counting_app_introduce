import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export function HeroSection() {
  const { t } = useTranslation()

  const mockItems = [
    { code: "8801234...", qty: 12, nameKey: "hero.mockupItemA" as const },
    { code: "8809876...", qty: 8, nameKey: "hero.mockupItemB" as const },
    { code: "8805555...", qty: 24, nameKey: "hero.mockupItemC" as const },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[128px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[15%] w-64 h-64 border border-white/[0.04] rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-[10%] w-96 h-96 border border-white/[0.03] rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-0 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="glow">
              <Sparkles size={12} />
              {t("hero.badge")}
            </Badge>
          </motion.div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("hero.titleLine1")}
            <br />
            <span className="bg-gradient-to-r from-accent via-primary-lighter to-primary-light bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
            {t("hero.titleEnd")}
          </h1>

          <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg whitespace-pre-line">
            {t("hero.description")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-1"
          >
            <Button size="lg" asChild>
              <a href="#download">
                <Download size={18} />
                {t("hero.ctaPrimary")}
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#features">
                {t("hero.ctaSecondary")}
                <ArrowDown size={16} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-6 mt-2 text-xs text-white/30"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {t("hero.trustFree")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("hero.trustPlatform")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-lighter" />
              {t("hero.trustOffline")}
            </span>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 scale-110 bg-primary/20 rounded-[3rem] blur-[60px]" />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-[260px] sm:w-[280px] rounded-[2.8rem] bg-gradient-to-b from-gray-800 to-gray-900 p-[3px] shadow-2xl shadow-black/40">
                <div className="rounded-[2.6rem] bg-gradient-to-b from-gray-700 to-gray-800 p-[2px]">
                  <div className="w-full rounded-[2.5rem] bg-gray-950 overflow-hidden">
                    <div className="flex justify-between items-center px-7 pt-3 pb-1">
                      <span className="text-[10px] text-white/40 font-medium">9:41</span>
                      <div className="w-24 h-6 bg-gray-900 rounded-full" />
                      <div className="flex gap-1">
                        <div className="w-4 h-2 rounded-sm bg-white/30" />
                      </div>
                    </div>

                    <div className="px-5 py-4 h-[440px] sm:h-[480px] bg-gradient-to-b from-surface-dark to-navy">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-7 h-7 rounded-lg bg-primary/30 flex items-center justify-center">
                          <img src="/app-icon.png" alt="" className="w-5 h-5 rounded" />
                        </div>
                        <span className="text-white/80 text-xs font-semibold">
                          {t("hero.mockupAppName")}
                        </span>
                      </div>

                      <div className="mx-auto w-36 h-36 rounded-2xl border-2 border-accent/40 flex items-center justify-center mb-5 relative">
                        <div className="absolute inset-0 rounded-2xl bg-accent/5" />
                        <motion.div
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-28 h-0.5 bg-accent/60 rounded-full"
                        />
                        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent rounded-br-lg" />
                      </div>

                      {mockItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.3 }}
                          className="flex items-center justify-between py-2.5 border-b border-white/5"
                        >
                          <div>
                            <p className="text-white/70 text-[11px] font-medium">{t(item.nameKey)}</p>
                            <p className="text-white/30 text-[9px] font-mono">{item.code}</p>
                          </div>
                          <span className="text-accent text-xs font-bold tabular-nums">
                            x{item.qty}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-8 glass-card rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-[11px] font-bold text-accent">{t("hero.floatScan")}</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-1 -left-10 glass-card rounded-xl px-4 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-[11px] font-bold text-green-400">{t("hero.floatOffline")}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-400/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
