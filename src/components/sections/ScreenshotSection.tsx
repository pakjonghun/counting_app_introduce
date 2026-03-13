import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import {
  Search,
  Plus,
  ScanBarcode,
  ChevronRight,
  Package,
  Globe,
  X,
  Hash,
  FileText,
  Cloud,
  Trash2,
  Mail,
} from "lucide-react"

/* ─── Phone frame wrapper ─── */
function PhoneFrame({
  children,
  label,
  index,
}: {
  children: React.ReactNode
  label: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex-shrink-0 snap-center"
    >
      <div className="w-[180px] sm:w-[200px] md:w-[220px] rounded-[2.2rem] bg-gradient-to-b from-gray-800 to-gray-950 p-[3px] shadow-2xl shadow-black/20 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="rounded-[2rem] bg-gray-900 p-[2px]">
          <div className="w-full rounded-[1.9rem] overflow-hidden">
            {/* Notch */}
            <div className="flex justify-center bg-[#0a1628] pt-2 pb-1">
              <div className="w-16 h-5 bg-black rounded-full" />
            </div>
            {/* Screen content */}
            <div className="h-[300px] sm:h-[340px] md:h-[380px] bg-gradient-to-b from-[#0f1d32] to-[#0a1628] overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm font-semibold text-gray-400 group-hover:text-primary transition-colors">
        {label}
      </p>
    </motion.div>
  )
}

/* ─── 1. Item List Screen ─── */
function ItemListScreen() {
  const { t } = useTranslation()
  const items = [
    { name: "콜라 500ml", barcode: "8801234567890", qty: 24, color: "bg-red-400" },
    { name: "생수 2L", barcode: "8809876543210", qty: 48, color: "bg-blue-400" },
    { name: "초코파이", barcode: "8805432167890", qty: 12, color: "bg-amber-500" },
    { name: "새우깡", barcode: "8807654321098", qty: 36, color: "bg-orange-400" },
    { name: "바나나우유", barcode: "8803456789012", qty: 18, color: "bg-yellow-400" },
    { name: "삼각김밥", barcode: "8802345678901", qty: 8, color: "bg-green-400" },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-2">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-white/90 text-[11px] font-bold">{t("screenshots.items")}</h3>
          <div className="flex gap-1.5">
            <div className="w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center">
              <Plus size={10} className="text-primary-lighter" />
            </div>
          </div>
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-1.5 bg-white/[0.06] rounded-lg px-2.5 py-1.5">
          <Search size={9} className="text-white/30" />
          <span className="text-[8px] text-white/25">Search items...</span>
        </div>
      </div>

      {/* Count badge */}
      <div className="px-3.5 pb-1.5">
        <span className="text-[8px] text-white/30">6 items · 146 total</span>
      </div>

      {/* Item list */}
      <div className="flex-1 px-3.5 space-y-1.5 overflow-hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]"
          >
            <div className={`w-6 h-6 rounded-md ${item.color}/20 flex items-center justify-center flex-shrink-0`}>
              <Package size={10} className={`${item.color.replace("bg-", "text-")}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-white/80 font-medium truncate">{item.name}</p>
              <p className="text-[7px] text-white/25 font-mono">{item.barcode}</p>
            </div>
            <span className="text-[10px] font-bold text-accent tabular-nums">×{item.qty}</span>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-3.5 py-2 mt-auto border-t border-white/[0.06]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-white/30">Total</span>
          <span className="text-[10px] font-bold text-accent">146</span>
        </div>
      </div>
    </div>
  )
}

/* ─── 2. Scanner Ready Screen ─── */
function ScannerScreen() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-2 flex items-center justify-between">
        <h3 className="text-white/90 text-[11px] font-bold">Barcode Scanner</h3>
        <div className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center">
          <X size={9} className="text-white/40" />
        </div>
      </div>

      {/* Camera viewfinder */}
      <div className="flex-1 mx-3.5 rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-800/30 border border-white/[0.08] relative overflow-hidden">
        {/* Fake camera bg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent)]" />

        {/* Scan frame corners */}
        <div className="absolute inset-6">
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent rounded-tl-md" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent rounded-tr-md" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent rounded-bl-md" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent rounded-br-md" />
        </div>

        {/* Scan line */}
        <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2">
          <div className="h-[1px] bg-accent/50 shadow-[0_0_8px_rgba(56,189,248,0.4)]" />
        </div>

        {/* Center crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-1 h-1 rounded-full bg-accent/60" />
        </div>

        {/* Instruction */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="text-[8px] text-white/40 bg-black/40 px-2 py-0.5 rounded-full">
            Point camera at barcode
          </span>
        </div>
      </div>

      {/* Mode toggle */}
      <div className="px-3.5 py-2.5">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 bg-accent/10 rounded-lg px-2.5 py-1.5">
            <ScanBarcode size={9} className="text-accent" />
            <span className="text-[8px] text-accent font-semibold">Continuous</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.04] rounded-lg px-2.5 py-1.5">
            <span className="text-[8px] text-white/30 font-medium">Single</span>
          </div>
        </div>
      </div>

      {/* Recent scans */}
      <div className="px-3.5 pb-2">
        <span className="text-[7px] text-white/25 uppercase tracking-wider">Last scanned</span>
        <div className="mt-1 bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/[0.04]">
          <div className="flex items-center justify-between">
            <span className="text-[8px] text-white/50 font-mono">8801234567890</span>
            <span className="text-[8px] text-green-400 font-bold">+1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── 3. Scanning Active Screen ─── */
function ScanningScreen() {
  const scanned = [
    { code: "8801234567890", name: "콜라 500ml", time: "0:03", added: 1 },
    { code: "8809876543210", name: "생수 2L", time: "0:08", added: 2 },
    { code: "8805432167890", name: "초코파이", time: "0:12", added: 1 },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header with active indicator */}
      <div className="px-3.5 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <h3 className="text-white/90 text-[11px] font-bold">Scanning...</h3>
          </div>
          <div className="bg-red-500/20 rounded-md px-2 py-0.5">
            <span className="text-[8px] text-red-400 font-semibold">Stop</span>
          </div>
        </div>
      </div>

      {/* Active scan area - smaller viewfinder */}
      <div className="mx-3.5 h-24 rounded-xl bg-gradient-to-b from-green-900/20 to-gray-900/30 border border-green-400/20 relative overflow-hidden">
        {/* Scan corners */}
        <div className="absolute inset-3">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400/60 rounded-tl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400/60 rounded-tr" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400/60 rounded-bl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400/60 rounded-br" />
        </div>
        <div className="absolute top-1/2 left-5 right-5 -translate-y-1/2">
          <div className="h-[1px] bg-green-400/40 shadow-[0_0_6px_rgba(74,222,128,0.3)]" />
        </div>
        {/* Success flash */}
        <div className="absolute top-2 right-2 bg-green-400/20 rounded-md px-1.5 py-0.5">
          <span className="text-[7px] text-green-400 font-bold">OK</span>
        </div>
      </div>

      {/* Scan counter */}
      <div className="px-3.5 py-2 flex items-center justify-between">
        <span className="text-[8px] text-white/30">Scanned items</span>
        <div className="bg-accent/10 rounded-full px-2 py-0.5">
          <span className="text-[9px] text-accent font-bold">3 scans</span>
        </div>
      </div>

      {/* Scan log */}
      <div className="flex-1 px-3.5 space-y-1.5 overflow-hidden">
        {scanned.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]"
          >
            <div className="w-5 h-5 rounded-md bg-green-400/15 flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] text-green-400 font-bold">+{item.added}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-white/80 font-medium truncate">{item.name}</p>
              <p className="text-[7px] text-white/25 font-mono">{item.code}</p>
            </div>
            <span className="text-[7px] text-white/20">{item.time}</span>
          </div>
        ))}
      </div>

      {/* Total bar */}
      <div className="px-3.5 py-2 mt-auto border-t border-white/[0.06]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-white/30">Session total</span>
          <span className="text-[10px] font-bold text-green-400">+4 items</span>
        </div>
      </div>
    </div>
  )
}

/* ─── 4. Settings Screen ─── */
function SettingsScreen() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-2">
        <h3 className="text-white/90 text-[11px] font-bold">Settings</h3>
      </div>

      {/* Settings groups */}
      <div className="flex-1 px-3.5 space-y-3 overflow-hidden">
        {/* General */}
        <div>
          <span className="text-[7px] text-white/25 uppercase tracking-wider font-semibold">
            General
          </span>
          <div className="mt-1 space-y-1">
            <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]">
              <div className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                <Globe size={9} className="text-blue-400" />
              </div>
              <span className="text-[9px] text-white/70 flex-1">Language</span>
              <div className="flex items-center gap-0.5">
                <span className="text-[8px] text-white/30">한국어</span>
                <ChevronRight size={8} className="text-white/15" />
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]">
              <div className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                <Hash size={9} className="text-accent" />
              </div>
              <span className="text-[9px] text-white/70 flex-1">Default Scan Qty</span>
              <div className="flex items-center gap-0.5">
                <span className="text-[8px] text-accent font-bold">×1</span>
                <ChevronRight size={8} className="text-white/15" />
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]">
              <div className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                <FileText size={9} className="text-amber-400" />
              </div>
              <span className="text-[9px] text-white/70 flex-1">CSV BOM</span>
              <div className="w-7 h-4 rounded-full bg-accent/60 flex items-center justify-end px-0.5">
                <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Google Sheets */}
        <div>
          <span className="text-[7px] text-white/25 uppercase tracking-wider font-semibold">
            Google Sheets
          </span>
          <div className="mt-1 space-y-1">
            <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]">
              <div className="w-5 h-5 rounded-md bg-green-400/10 flex items-center justify-center flex-shrink-0">
                <Cloud size={9} className="text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-white/70">Connected</p>
                <p className="text-[6.5px] text-white/25 truncate">user@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-2 border border-white/[0.04]">
              <div className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                <Mail size={9} className="text-emerald-400" />
              </div>
              <span className="text-[9px] text-white/70 flex-1">Linked Sheet</span>
              <div className="flex items-center gap-0.5">
                <span className="text-[7px] text-green-400">●</span>
                <ChevronRight size={8} className="text-white/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Data */}
        <div>
          <span className="text-[7px] text-white/25 uppercase tracking-wider font-semibold">
            Data
          </span>
          <div className="mt-1 space-y-1">
            <div className="flex items-center gap-2 bg-red-500/[0.06] rounded-lg px-2.5 py-2 border border-red-500/[0.08]">
              <div className="w-5 h-5 rounded-md bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <Trash2 size={9} className="text-red-400" />
              </div>
              <span className="text-[9px] text-red-400/80 flex-1">Reset All Data</span>
            </div>
          </div>
        </div>
      </div>

      {/* App version */}
      <div className="px-3.5 py-2 mt-auto text-center">
        <span className="text-[7px] text-white/15">Counting App v1.0.0</span>
      </div>
    </div>
  )
}

/* ─── Main Section ─── */
export function ScreenshotSection() {
  const { t } = useTranslation()

  const screens = [
    { key: "items", labelKey: "screenshots.items", component: <ItemListScreen /> },
    { key: "scanner", labelKey: "screenshots.scanner", component: <ScannerScreen /> },
    { key: "scanning", labelKey: "screenshots.scanning", component: <ScanningScreen /> },
    { key: "settings", labelKey: "screenshots.settings", component: <SettingsScreen /> },
  ]

  return (
    <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-4">
            {t("screenshots.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {t("screenshots.title")}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {t("screenshots.subtitle")}
          </p>
        </motion.div>

        <div className="flex gap-5 md:gap-7 md:justify-center overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide px-[calc(50%-100px)] md:px-0 md:flex-wrap">
          {screens.map((screen, index) => (
            <PhoneFrame key={screen.key} label={t(screen.labelKey)} index={index}>
              {screen.component}
            </PhoneFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
