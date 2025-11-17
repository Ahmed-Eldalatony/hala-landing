import { Package, PhoneCall, Warehouse } from "lucide-react"
import { Card } from "../ui/card"
import "@/index.css"

const Services = () => {
  const services = [
    {
      icon: Package,
      titleEn: "Hala Source",
      titleAr: "هلا سورس",
      subtitle: "الاستيراد الذكي من الصين",
      description:
        "خدمة الاستيراد الذكي من الصين بأسعار أقل من السوق. نوفر لك منتجات بجودة عالية من مصانع موثوقة مع مخازن جاهزة وشبكة شحن خاصة بنا داخل الخليج.",
      features: [
        "أسعار أقل من السوق بنسبة تصل إلى 20٪",
        "فحص جودة قبل الشحن",
        "شحن DDP إلى جميع دول الخليج",
        "تخزين مجاني أولي",
      ],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: PhoneCall,
      titleEn: "Hala Confirm",
      titleAr: "هلا كونفرم",
      subtitle: "تأكيد الطلبات ومتابعة العملاء",
      description:
        "خدمة تأكيد الطلبات ومتابعة العملاء بطريقة احترافية وبأرقام خليجية. فريقنا يتواصل مع عملائك باسم البراند الخاص بك بلهجة خليجية قريبة منهم.",
      features: [
        "أرقام اتصال خليجية محلية",
        "مكالمات باسم البراند",
        "تقارير أداء مفصّلة",
        "أسعار تنافسية لكل طلب مؤكد",
      ],
      gradient: "from-purple-600 to-purple-700",
    },
    {
      icon: Warehouse,
      titleEn: "Hala Fulfillment",
      titleAr: "هلا فلمنت",
      subtitle: "التخزين والتجهيز والشحن",
      description:
        "خدمة التخزين والتجهيز والشحن بدون أنظمة معقدة أو إجراءات طويلة. نستقبل بضاعتك، نخزنها في مستودعات آمنة، ونجهز الطلبات بسرعة.",
      features: [
        "تخزين آمن ومنظم",
        "تجهيز سريع ودقيق",
        "شحن سريع داخل الخليج",
        "إدارة كاملة من لوحة تحكم واحدة",
      ],
      gradient: "from-blue-600 to-blue-700",
    },
  ]

  return (
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            خدمات هلا كوميرس في مكان واحد
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            منصة هلا كوميرس تجمع 3 خدمات أساسية تحت سقف واحد لتخدم السوق الخليجي
            بأكمله. كل خدمة مصممة لتغطي جزء من رحلة التجارة الإلكترونية.
          </p>
        </div>

        <div className="space-y-8  lg:space-y-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="  rounded-2xl p-6 lg:p-10 shadow-lg/10 border-none shadow-hover-glow   transition-smooth"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Right side - Icon and Title */}
                <div>
                  <div
                    className={`w-16 h-16   rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {service.titleAr} – {service.titleEn}
                  </h3>

                  <p className="text-lg text-secondary font-semibold mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Left side - Features */}
                <div className="bg-card/50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    المميزات:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground">
            💡 كل الخدمات في مكان واحد — هلا كوميرس هي الحل الشامل لتجارة الخليج
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
