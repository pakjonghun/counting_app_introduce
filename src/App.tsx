import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"
import { FeaturesSection } from "./components/sections/FeaturesSection"
import { HowItWorksSection } from "./components/sections/HowItWorksSection"
import { ScreenshotSection } from "./components/sections/ScreenshotSection"
import { TechSection } from "./components/sections/TechSection"
import { CtaSection } from "./components/sections/CtaSection"
import { PrivacyPage, TermsPage } from "./pages/LegalPage"

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotSection />
        <TechSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
