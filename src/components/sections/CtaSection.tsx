import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "../ui/button"

export function CtaSection() {
  const { t } = useTranslation()

  return (
    <section id="download" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-navy" />
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at 20% 60%, rgba(56,189,248,0.15), transparent), radial-gradient(ellipse 40% 50% at 80% 40%, rgba(91,146,224,0.2), transparent)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.05] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.03] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-7"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/app-icon.png"
            alt={t("footer.appName")}
            className="w-20 h-20 rounded-2xl shadow-2xl shadow-black/30 ring-2 ring-white/10"
          />

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-lg whitespace-pre-line"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("cta.title")}
          </h2>

          <p className="text-white/55 max-w-md text-base leading-relaxed whitespace-pre-line">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <div className="relative group">
              <Button variant="white" size="xl" disabled>
                <Download size={18} />
                {t("cta.button")}
              </Button>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {t("nav.comingSoon")}
              </span>
            </div>
          </div>

          <p className="text-xs text-white/30 mt-2">
            {t("cta.notice")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
