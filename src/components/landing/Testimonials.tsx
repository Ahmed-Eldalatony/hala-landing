import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "من أول شهر، نسبة التسليم زادت والمرتجعات قلت—تجربة فارقة",
      author: "عبدالعزيز المطيري",
      role: "تاجر عبايات",
      avatar: "ع",
    },
    {
      quote: "لوحة التحكم واضحة وكل شيء متكامل—وفرت علينا وقت كثير",
      author: "منى السالم",
      role: "مسوّقة",
      avatar: "م",
    },
    {
      quote: "الدعم الفني رائع والتكامل مع متجرنا كان سلس جدًا",
      author: "خالد العتيبي",
      role: "مورد منتجات إلكترونية",
      avatar: "خ",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section id="testimonials" className="py-20 md:py-32" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card  shadow-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-20 h-20 text-secondary" />
            </div>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-secondary/90 transition-smooth cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-secondary/90 transition-smooth cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentIndex ? "bg-secondary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
