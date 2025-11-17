
const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "مناسب للبدايات",
      features: [
        "تأكيد الطلبات بالدفع لكل طلب",
        "تكامل أساسي + تقارير بسيطة",
        "دعم عبر واتس آب",
      ],
      cta: "ابدأ الآن",
      popular: false,
    },
    {
      name: "Growth",
      subtitle: "للتجار النشطين",
      features: [
        "خصومات شحن وDDP",
        "تقارير متقدمة + مدير حساب",
        "ربط متعدد القنوات",
        "أولوية في الدعم",
      ],
      cta: "جرّب مجانًا",
      popular: true,
    },
    {
      name: "Scale",
      subtitle: "للشركات",
      features: [
        "SLAs + تخصيص تكاملات",
        "فرق متعددة، صلاحيات",
        "دعم على مدار الساعة",
        "مدير حساب مخصص",
      ],
      cta: "تواصل للمؤسسات",
      popular: false,
    },
  ]
  return (
    <section id="pricing" className="py-20 md:py-32" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
           {plans.map((plan, index) => (
             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
               <h3 className="text-xl font-bold">{plan.name}</h3>
               <p className="text-gray-600">{plan.subtitle}</p>
               <ul className="mt-4">
                 {plan.features.map((feature, i) => (
                   <li key={i} className="flex items-center">
                     <span className="text-green-500 mr-2">✓</span>
                     {feature}
                   </li>
                 ))}
               </ul>
               <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                 {plan.cta}
               </button>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
export default Pricing
