import { useEffect, useState } from "react"

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { value: 10000, suffix: "+", label: "طلب شهريًا" },
    { value: 28, prefix: "-", suffix: "%", label: "مرتجعات" },
    { value: 22, prefix: "+", suffix: "%", label: "معدل التسليم" },
    { value: 95, suffix: "%", label: "رضا العملاء" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [hasAnimated])

  return (
    <section
      id="stats-section"
      className="py-20 md:py-32 gradient-secondary"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            الأرقام تتحدث عن نفسها
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.prefix}
                {hasAnimated ? stat.value.toLocaleString() : "0"}
                {stat.suffix}
              </div>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
