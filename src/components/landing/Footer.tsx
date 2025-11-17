import { MessageCircle, Mail, MapPin } from "lucide-react"

const Footer = () => {
  const links = {
    company: [
      { label: "من نحن", href: "#" },
      { label: "المدونة", href: "#" },
      { label: "الوظائف", href: "#" },
      { label: "تواصل معنا", href: "#" },
    ],
    resources: [
      { label: "مركز المساعدة", href: "#" },
      { label: "الشروط والأحكام", href: "#" },
      { label: "سياسة الخصوصية", href: "#" },
      { label: "شروط الاستخدام", href: "#" },
    ],
  }

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="text-xl font-bold text-foreground">
                هلا كوميرس
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              منصة عربية متكاملة للتجارة الإلكترونية في الخليج
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">الشركة</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-4">الموارد</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-secondary" />
                <span>واتس آب: +966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-secondary" />
                <span>support@halakommerce.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 هلا كوميرس. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
