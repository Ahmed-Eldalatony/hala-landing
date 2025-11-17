import { useState } from "react"
import { Card } from "../ui/card"
import { Store, Megaphone, Package2 } from "lucide-react"
const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    {
      title: "للتجار",
      icon: Store,
      benefits: [
        "قلّل المرتجعات بنسبة تصل إلى 28%",
        "وسّع الشحن لكل دول الخليج بأسعار DDP تنافسية",
        "ارفع هامش الربح مع خدمات fulfillment متكاملة",
      ],
    },
    {
      title: "للمسوقين",
      icon: Megaphone,
      benefits: [
        "احصل على منتجات جاهزة للانطلاق مع عروض وأسعار واضحة",
        "تتبع عمولاتك ومدفوعاتك بسهولة من لوحة واحدة",
        "ركز على التسويق ودعنا نتولى الباقي",
      ],
    },
    {
      title: "للموردين",
      icon: Package2,
      benefits: [
        "افتح أسواق الخليج بمخزون ذكي وتوزيع أسرع",
        "ربط مباشر مع التجار والمسوقين",
        "شفافية كاملة في المبيعات والمدفوعات",
      ],
    },
  ]
  return (
    <section className="py-20 md:py-32 bg-card/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 py-0">
            حلول مصممة لكل احتياجاتك
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-smooth ${activeTab === index ? "gradient-primary text-white shadow-glow" : "bg-card text-muted-foreground hover:text-foreground"}`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <Card className="max-w-3xl  shadow-card border-none mx-auto">
          <div className=" rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                {(() => {
                  const Icon = tabs[activeTab].icon
                  return <Icon className="w-8 h-8 text-white" />
                })()}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {tabs[activeTab].title}
              </h3>
            </div>

            <ul className="space-y-6">
              {tabs[activeTab].benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  )
}
export default UseCases
