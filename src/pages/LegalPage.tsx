import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import { ArrowLeft, Globe } from "lucide-react"
import { useEffect } from "react"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="text-lg font-bold text-gray-900 mb-3 tracking-tight"
        style={{ fontFamily: "var(--font-family-display)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500 leading-relaxed">{children}</p>
}

export function PrivacyPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko")
  }

  return (
    <LegalLayout
      title={t("privacy.title")}
      effectiveDate={t("privacy.effectiveDate")}
      onToggleLang={toggleLang}
      currentLang={i18n.language}
    >
      <Paragraph>{t("privacy.intro")}</Paragraph>

      <Section title={t("privacy.section1Title")}>
        <BulletList items={t("privacy.section1Items", { returnObjects: true }) as string[]} />
      </Section>

      <Section title={t("privacy.section2Title")}>
        <BulletList items={t("privacy.section2Items", { returnObjects: true }) as string[]} />
      </Section>

      <Section title={t("privacy.section3Title")}>
        <Paragraph>{t("privacy.section3Desc")}</Paragraph>
      </Section>

      <Section title={t("privacy.section4Title")}>
        <BulletList items={t("privacy.section4Items", { returnObjects: true }) as string[]} />
      </Section>

      <Section title={t("privacy.section5Title")}>
        <Paragraph>{t("privacy.section5Desc")}</Paragraph>
      </Section>

      <Section title={t("privacy.section6Title")}>
        <Paragraph>{t("privacy.section6Desc")}</Paragraph>
        <a
          href={`mailto:${t("privacy.contactEmail")}`}
          className="inline-block mt-2 text-sm font-medium text-primary hover:underline"
        >
          {t("privacy.contactEmail")}
        </a>
      </Section>
    </LegalLayout>
  )
}

export function TermsPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko")
  }

  return (
    <LegalLayout
      title={t("terms.title")}
      effectiveDate={t("terms.effectiveDate")}
      onToggleLang={toggleLang}
      currentLang={i18n.language}
    >
      <Paragraph>{t("terms.intro")}</Paragraph>

      <Section title={t("terms.section1Title")}>
        <Paragraph>{t("terms.section1Desc")}</Paragraph>
      </Section>

      <Section title={t("terms.section2Title")}>
        <Paragraph>{t("terms.section2Desc")}</Paragraph>
      </Section>

      <Section title={t("terms.section3Title")}>
        <BulletList items={t("terms.section3Items", { returnObjects: true }) as string[]} />
      </Section>

      <Section title={t("terms.section4Title")}>
        <BulletList items={t("terms.section4Items", { returnObjects: true }) as string[]} />
      </Section>

      <Section title={t("terms.section5Title")}>
        <Paragraph>{t("terms.section5Desc")}</Paragraph>
      </Section>

      <Section title={t("terms.section6Title")}>
        <Paragraph>{t("terms.section6Desc")}</Paragraph>
      </Section>

      <Section title={t("terms.section7Title")}>
        <Paragraph>{t("terms.section7Desc")}</Paragraph>
        <a
          href={`mailto:${t("terms.contactEmail")}`}
          className="inline-block mt-2 text-sm font-medium text-primary hover:underline"
        >
          {t("terms.contactEmail")}
        </a>
      </Section>
    </LegalLayout>
  )
}

function LegalLayout({
  title,
  effectiveDate,
  onToggleLang,
  currentLang,
  children,
}: {
  title: string
  effectiveDate: string
  onToggleLang: () => void
  currentLang: string
  children: React.ReactNode
}) {
  const { t } = useTranslation()
  const location = useLocation()
  const isPrivacy = location.pathname === "/privacy"

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-gray-200/60">
        <div className="mx-auto max-w-3xl flex items-center justify-between px-6 h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/app-icon.png"
              alt={t("footer.appName")}
              className="h-8 w-8 rounded-lg"
            />
            <span
              className="font-bold text-gray-900 text-sm tracking-tight"
              style={{ fontFamily: "var(--font-family-display)" }}
            >
              {t("footer.appName")}
            </span>
          </Link>

          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Globe size={14} />
            {currentLang === "ko" ? "EN" : "KO"}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          {t("footer.appName")}
        </Link>

        <h1
          className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-family-display)" }}
        >
          {title}
        </h1>
        <p className="text-xs text-gray-400 mb-10">{effectiveDate}</p>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 mb-10">
          {children}
        </div>

        {/* Cross-link */}
        <div className="text-center">
          <Link
            to={isPrivacy ? "/terms" : "/privacy"}
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            {isPrivacy ? t("footer.terms") : t("footer.privacy")} →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200/60 py-8">
        <p className="text-center text-xs text-gray-400">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </footer>
    </div>
  )
}
