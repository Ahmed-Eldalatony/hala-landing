const Coverage = () => {
  const countries = [
    {
      flag: "🇸🇦",
      name: "المملكة العربية السعودية",
    },
    {
      flag: "🇰🇼",
      name: "الكويت",
    },
    {
      flag: "🇦🇪",
      name: "الإمارات العربية المتحدة",
    },
    {
      flag: "🇴🇲",
      name: "سلطنة عُمان",
    },
    {
      flag: "🇶🇦",
      name: "دولة قطر",
    },
    {
      flag: "🇧🇭",
      name: "مملكة البحرين",
    },
  ]
  return (
    <section className="py-20 md:py-32 bg-card/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 py-0 md:text-5xl">
            الدول التي نغطيها
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعمل هلا كوميرس في جميع دول الخليج العربي من خلال شبكة لوجستية
            متكاملة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-glow transition-smooth hover:scale-105 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                {country.flag}
              </div>
              <h3 className="text-foreground font-semibold">{country.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold gradient-text">
            ✨ هلا كوميرس — شركاؤك في النمو بكل أسواق الخليج ✨
          </p>
        </div>
      </div>
    </section>
  )
}
export default Coverage
