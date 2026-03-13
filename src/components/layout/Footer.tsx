import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Mail, Github, FileText, Shield, X, Send, Loader2 } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type FormStatus = "idle" | "sending" | "sent" | "error"

export function Footer() {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState<FormStatus>("idle")
  const modalRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current || status === "sending") return

    setStatus("sending")
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus("sent")
      formRef.current.reset()
      setTimeout(() => {
        setShowModal(false)
        setStatus("idle")
      }, 2000)
    } catch (err) {
      console.error("[EmailJS]", err)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  useEffect(() => {
    if (!showModal) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false)
        setStatus("idle")
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [showModal])

  return (
    <>
      <footer className="relative bg-surface-darker text-gray-500 py-14 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/app-icon.png"
                alt={t("footer.appName")}
                className="h-10 w-10 rounded-xl opacity-80"
              />
              <div>
                <span
                  className="font-bold text-white/90 text-base block"
                  style={{ fontFamily: "var(--font-family-display)" }}
                >
                  {t("footer.appName")}
                </span>
                <span className="text-xs text-gray-600">{t("footer.tagline")}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail size={14} />
                </div>
                {t("footer.contact")}
              </button>
              <Link
                to="/privacy"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Shield size={14} />
                </div>
                {t("footer.privacy")}
              </Link>
              <Link
                to="/terms"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <FileText size={14} />
                </div>
                {t("footer.terms")}
              </Link>
              <a
                href={import.meta.env.VITE_GITHUB_URL || "https://github.com/pakjonghun/counting-app"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Github size={14} />
                </div>
                GitHub
              </a>
            </div>

            <p className="text-xs text-gray-600">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Email Form Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={(e) => {
              if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setShowModal(false)
                setStatus("idle")
              }
            }}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-surface-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary-lighter" />
                  <h3 className="text-white font-bold text-base">{t("footer.contact")}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setStatus("idle") }}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="px-5 pb-5 space-y-3">
                <div>
                  <label htmlFor="contact-name" className="text-[11px] text-gray-500 font-medium mb-1 block">
                    {t("footer.formName")}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder={t("footer.formNamePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-[11px] text-gray-500 font-medium mb-1 block">
                    {t("footer.formEmail")}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder={t("footer.formEmailPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="contact-title" className="text-[11px] text-gray-500 font-medium mb-1 block">
                    {t("footer.formTitle")}
                  </label>
                  <input
                    id="contact-title"
                    name="title"
                    type="text"
                    required
                    className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder={t("footer.formTitlePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-[11px] text-gray-500 font-medium mb-1 block">
                    {t("footer.formMessage")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                    placeholder={t("footer.formMessagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed bg-primary hover:bg-primary-light text-white disabled:opacity-60"
                >
                  {status === "idle" && (
                    <>
                      <Send size={14} />
                      {t("footer.formSend")}
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      {t("footer.formSending")}
                    </>
                  )}
                  {status === "sent" && (
                    <span className="text-green-300">{t("footer.formSent")}</span>
                  )}
                  {status === "error" && (
                    <span className="text-red-300">{t("footer.formError")}</span>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
