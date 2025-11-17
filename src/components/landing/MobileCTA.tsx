import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled && !isDismissed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-in-bottom"
      dir="rtl"
    >
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-glow p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground mb-1">
              ابدأ رحلة نجاحك الآن
            </p>
            <p className="text-xs text-muted-foreground">
              انضم لـ 500+ تاجر ومسوّق
            </p>
          </div>
          <Button
            variant="default"
            size="lg"
            className="shadow-glow transition-smooth"
          >
            سجّل الآن
          </Button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileCTA
