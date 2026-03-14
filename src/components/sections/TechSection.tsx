import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Database, WifiOff, ShieldCheck } from "lucide-react"

const techs = [
  { icon: Database, tagKey: "tech.eventSourcing.tag", titleKey: "tech.eventSourcing.title", descKey: "tech.eventSourcing.description" },
  { icon: WifiOff, tagKey: "tech.offlineFirst.tag", titleKey: "tech.offlineFirst.title", descKey: "tech.offlineFirst.description" },
  { icon: ShieldCheck, tagKey: "tech.transaction.tag", titleKey: "tech.transaction.title", descKey: "tech.transaction.description" },
]

export function TechSection() {
  const { t } = useTranslation()

  return (
    <section
      id="tech"
      className="relative py-28 lg:py-36 bg-surface-dark text-white overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 noise-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-lighter/60 mb-4">
            {t("tech.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("tech.title")}
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base leading-relaxed">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.titleKey}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-2xl bg-white/[0.03] border border-white/[0.06] p-7 lg:p-8 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary-lighter/40 mb-5 font-mono">
                  {t(tech.tagKey)}
                </span>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300">
                    <tech.icon size={22} className="text-primary-lighter" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg font-bold mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-family-display)" }}
                    >
                      {t(tech.titleKey)}
                    </h3>
                    <p className="text-sm text-white/35 leading-relaxed">
                      {t(tech.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
