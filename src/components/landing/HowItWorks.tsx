import { UserPlus, Store, Settings, TrendingUp } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "سجّل خلال دقائق",
      description: "أنشئ حسابك وحدد دورك (تاجر/مسوق/مورد)",
      number: "01",
    },
    {
      icon: Store,
      title: "اربط متجرك",
      description: "سلة/زد/Shopify أو استيراد منتجات/طلبات",
      number: "02",
    },
    {
      icon: Settings,
      title: "فعّل الخدمات",
      description: "تأكيد الطلبات، شحن DDP، COD، إدارة مخزون",
      number: "03",
    },
    {
      icon: TrendingUp,
      title: "تابع النمو",
      description: "تقارير واضحة + دعم مدير الحساب",
      number: "04",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-card/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            كيف تبدأ مع هلا كوميرس؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            سجّل → اربط متجرك → فعّل الخدمات → تابع النتائج
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 w-full h-[1px] bg-gradient-to-l from-secondary/30 to-transparent z-10" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary text-white font-bold text-2xl mb-6 shadow-glow group-hover:scale-110 transition-smooth">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto   mb-4 rounded-2xl  flex items-center justify-center group-hover:bg-secondary/10 transition-smooth">
                  <step.icon className="w-8 h-8 text-secondary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
