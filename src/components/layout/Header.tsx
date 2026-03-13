import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Globe } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export function Header() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.tech"), href: "#tech" },
  ]

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko")
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm shadow-black/[0.03]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 h-16 lg:h-18">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/app-icon.png"
            alt={t("footer.appName")}
            className="h-9 w-9 rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
          />
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-gray-900" : "text-white"
            )}
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("footer.appName")}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                scrolled
                  ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer",
              scrolled
                ? "text-gray-400 hover:text-gray-900 hover:bg-gray-100/60"
                : "text-white/50 hover:text-white hover:bg-white/10"
            )}
          >
            <Globe size={14} />
            {i18n.language === "ko" ? "EN" : "KO"}
          </button>

          <div className="ml-2">
            <Button size="sm" asChild>
              <a href="#download">
                <Download size={14} />
                {t("nav.download")}
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t("nav.menu")}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary py-2.5 px-3 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-medium text-gray-400 py-2.5 px-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <Globe size={14} />
                {i18n.language === "ko" ? "English" : "한국어"}
              </button>
              <div className="mt-2 pt-2 border-t border-gray-100">
                <Button size="sm" className="w-full" asChild>
                  <a href="#download" onClick={() => setMobileOpen(false)}>
                    <Download size={14} />
                    {t("nav.download")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
