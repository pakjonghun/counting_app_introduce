import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FolderPlus, ScanBarcode, FileOutput, ArrowRight } from "lucide-react"

const steps = [
  { number: "01", icon: FolderPlus, titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.description" },
  { number: "02", icon: ScanBarcode, titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.description" },
  { number: "03", icon: FileOutput, titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.description" },
]

export function HowItWorksSection() {
  const { t } = useTranslation()

  return (
    <section id="how-it-works" className="relative py-28 lg:py-36 bg-surface overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(40,86,160,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-4">
            {t("howItWorks.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("howItWorks.title")}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          <div className="hidden md:flex absolute top-24 left-[33%] w-[34%] justify-center">
            <ArrowRight size={20} className="text-primary/15" />
          </div>
          <div className="hidden md:flex absolute top-24 left-[66%] w-[34%] justify-center -translate-x-full">
            <ArrowRight size={20} className="text-primary/15" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 group">
                <span
                  className="absolute top-4 right-6 text-[5rem] font-black text-primary/[0.03] leading-none select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-family-display)" }}
                >
                  {step.number}
                </span>

                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold mb-5">
                  {step.number}
                </div>

                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center shadow-lg shadow-primary/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-family-display)" }}
                >
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {t(step.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
