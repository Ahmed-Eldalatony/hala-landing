const SocialProof = () => {
  const partners = [
    "سلة",
    "زد",
    "Shopify",
    "Tap",
    "PayTabs",
    "HyperPay",
    "تمارا",
    "tabby",
  ]

  return (
    <section className="py-12 border-y border-border bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-800 mb-8 font-medium">
          يثق بنا أكثر من 500 تاجر ومسوّق في الخليج
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-muted-foreground font-semibold text-lg hover:text-primary transition-smooth"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
