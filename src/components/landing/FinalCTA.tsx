import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 gradient-primary opacity-10 -z-10" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            جاهز تنقل تجارتك للمستوى الجاي؟
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            انضم لمئات التجار والمسوقين الذين حققوا نجاح أكبر مع هلا كوميرس
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-glow transition-smooth text-lg px-10 h-14"
            >
              سجّل الآن
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-secondary rounded-xl transition-smooth text-lg text-secondary !px-8 h-14 hover:text-white hover:bg-secondary"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              تحدث مع خبير
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
