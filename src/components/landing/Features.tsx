import {
  Package,
  PhoneCall,
  LayoutDashboard,
  Plug,
  BarChart3,
  Headphones,
} from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Fulfillment & DDP",
      description:
        "خزن، جهّز، واشحن بذكاء داخل الخليج مع أسعار منافسة وشروط واضحة",
    },
    {
      icon: PhoneCall,
      title: "COD & Confirmation",
      description: "فريق تأكيد محترف يقلل المرتجعات ويزود الطلبات المسلّمة",
    },
    {
      icon: LayoutDashboard,
      title: "لوحة التاجر/المسوق",
      description: "راقب الطلبات والعمولات والمخزون بتقارير فورية",
    },
    {
      icon: Plug,
      title: "Integrations",
      description: "ربط مرن مع منصاتك المفضلة وWebhooks",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "شفافية كاملة في الأداء والتكلفة ومعدلات التسليم",
    },
    {
      icon: Headphones,
      title: "دعم ومدير حساب",
      description: "انضمام سريع وسند تشغيلي يومي",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            كل ما تحتاجه لنجاح تجارتك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            حلول متكاملة من التأكيد إلى التسليم، كل شيء في منصة واحدة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 lg:p-8 hover:shadow-glow transition-smooth group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
