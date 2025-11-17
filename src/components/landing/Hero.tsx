import { Button } from "@/components/ui/button"
import { Check, MessageCircle } from "lucide-react"
const heroDashboard = "/hala-landing.png"
const Hero = () => {
  const appUrl = typeof window !== 'undefined' ? `https://seller.${window.location.hostname}` : 'https://seller.halakommers.com';
  const benefits = [
    "توصيل أسرع + مرتجعات أقل",
    "لوحة تحكم عربية بسيطة",
    "دعم فني وفريق تأكيد مكالمات",
  ]
  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      dir="rtl"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero -z-10" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              حوّل تجارتك إلى{" "}
              <span className="gradient-primary bg-clip-text text-slate-950">
                الخليج
              </span>{" "}
              مع هلا كوميرس
            </h1>

            <p className="!text-lg text-gray-800 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 md:text-2xl">
              منصة متكاملة للتجار والمسوقين والموردين شراء منتجات و تخزين وشحن و
              تأكيد الطلبات في مكان واحد
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-glow  rounded-xl transition-smooth text-lg px-8 h-14"
              >


  <a
              href={`${appUrl}/auth/register`}
              className=""
            >
              سجّل الآن
            </a>


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

          {/* Dashboard Mockup */}
          <div className="relative animate-fade-in lg:animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroDashboard}
                alt="لوحة تحكم هلا كوميرس"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    +10,000 طلب شهريًا
                  </p>
                  <p className="text-xs text-muted-foreground">معدل نجاح 95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
