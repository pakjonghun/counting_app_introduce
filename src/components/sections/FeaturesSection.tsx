import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import {
  ScanBarcode,
  FolderOpen,
  History,
  FileSpreadsheet,
  WifiOff,
  Languages,
} from "lucide-react"

const features = [
  {
    icon: ScanBarcode,
    titleKey: "features.barcode.title",
    descKey: "features.barcode.description",
    color: "from-blue-500 to-cyan-400",
    accent: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FolderOpen,
    titleKey: "features.session.title",
    descKey: "features.session.description",
    color: "from-violet-500 to-purple-400",
    accent: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: History,
    titleKey: "features.history.title",
    descKey: "features.history.description",
    color: "from-amber-500 to-orange-400",
    accent: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: FileSpreadsheet,
    titleKey: "features.sheets.title",
    descKey: "features.sheets.description",
    color: "from-emerald-500 to-green-400",
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: WifiOff,
    titleKey: "features.offline.title",
    descKey: "features.offline.description",
    color: "from-rose-500 to-pink-400",
    accent: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Languages,
    titleKey: "features.i18n.title",
    descKey: "features.i18n.description",
    color: "from-primary to-primary-light",
    accent: "bg-primary/10 text-primary",
  },
]

export function FeaturesSection() {
  const { t } = useTranslation()

  return (
    <section id="features" className="relative py-28 lg:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.02] rounded-full blur-[80px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-4"
          >
            {t("features.label")}
          </motion.span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("features.title")}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="group relative h-full rounded-2xl bg-white border border-gray-100 p-7 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-1">
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`w-11 h-11 rounded-xl ${feature.accent} flex items-center justify-center mb-5`}
                >
                  <feature.icon size={20} strokeWidth={1.8} />
                </div>

                <h3
                  className="text-lg font-bold text-gray-900 mb-2.5 tracking-tight"
                  style={{ fontFamily: "var(--font-family-display)" }}
                >
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
