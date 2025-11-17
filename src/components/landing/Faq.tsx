import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const faqs = [
    {
      question: "هل أقدر أبدأ بدون متجر؟",
      answer:
        "نعم، تقدر تبدأ كلِيد ونساعدك تبني متجرك لاحقًا. نوفر لك منتجات جاهزة ودعم كامل للبدء.",
    },
    {
      question: "كيف أفعل COD وتأكيد المكالمات؟",
      answer:
        "مجرد تفعيل الخدمة من حسابك، وفريقنا يبدأ التنفيذ فوريًا. نوفر فريق محترف يتأكد من كل طلب قبل الشحن.",
    },
    {
      question: "هل تدعمون الشحن داخل السعودية فقط؟",
      answer:
        "ندعم السعودية والإمارات والكويت والبحرين وقطر وعُمان. نوفر شحن DDP لكل دول الخليج.",
    },
    {
      question: "ما طرق الدفع والعمولات؟",
      answer:
        "حسب خطتك وحجم الطلبات؛ الشفافية كاملة داخل لوحة الحساب. تقدر تشوف كل التفاصيل والمدفوعات بوضوح.",
    },
    {
      question: "هل في عقد والتزام؟",
      answer:
        "بدون التزام شهري في الباقات الأساسية، وباقات الشركات بعقود خدمة مرنة. تقدر تلغي في أي وقت.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-card/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة التي تهمك
          </p>
        </div>

        <div className="max-w-3xl  mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card shadow-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-right text-lg font-semibold text-foreground hover:text-secondary transition-smooth py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
