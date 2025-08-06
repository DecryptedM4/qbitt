import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MessageCircle, 
  Mail, 
  ExternalLink,
  Heart,
  Code2,
  Zap,
  Shield
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "حولنا", href: "#about" },
    { name: "الفريق", href: "#team" },
  ];

  const services = [
    { name: "تحسينات ويندوز", href: "#services" },
    { name: "تويكات ويندوز ", href: "#services" },
    { name: "دعم تقني", href: "#services" },
    { name: "بوتات/سورسات دسكورد", href: "#services" },
  ];

  const socialLinks = [
    {
      name: "ديسكورد",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "#",
      color: "tech-primary"
    },
    {
      name: "البريد الإلكتروني",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:i4ig@outlook.com",
      color: "tech-secondary"
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <img 
                  src="./lovable-uploads/3d6be7a9-3fb0-49ad-8c79-8e6f4452e12d.png" 
                  alt="Techium Logo" 
                  className="w-12 h-12 rounded-full animate-pulse-glow"
                />
                <h3 className="text-2xl font-bold text-gradient">كيو بت</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                نحن فريق كيو بت المتخصص في تقديم خدمات تقنية احترافية عبر الديسكورد. نوفر تحسين وتطوير أداء البيسيات والدعم التقني المجاني، بالإضافة إلى بيع سورسات البوتات والحلول التقنية المبتكرة.
              </p>
              
              {/* Key Features */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <Zap className="w-4 h-4 text-tech-primary" />
                  <span className="text-muted-foreground">خدمات سريعة</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <Shield className="w-4 h-4 text-tech-secondary" />
                  <span className="text-muted-foreground">أمان مضمون</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <Code2 className="w-4 h-4 text-tech-accent" />
                  <span className="text-muted-foreground">جودة عالية</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="sm"
                    className="hover-glow transition-smooth"
                    asChild
                  >
                    <a href={link.href} className="flex items-center space-x-2 space-x-reverse">
                      <span className={`text-${link.color}`}>{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 space-x-reverse group"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 space-x-reverse group"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2026 Qbit. جميع الحقوق محفوظة.
              </p>
            </div>
            
            <div className="flex items-center space-x-1 space-x-reverse text-sm text-muted-foreground">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>للمجتمع العربي</span>
            </div>
          </div>
        </div>

        {/* Discord CTA */}
        <div className="pb-8">
          <div className="bg-gradient-primary/10 rounded-2xl p-6 text-center border border-tech-primary/20">
            <h4 className="text-xl font-bold mb-2">جاهز للانضمام إلى مجتمعنا؟</h4>
            <p className="text-muted-foreground mb-4">
              انضم إلى سيرفر الديسكورد الآن واستمتع بخدماتنا المجانية والحصرية
            </p>
            <Button className="gradient-primary hover-glow" asChild>
              <a href="https://discord.gg/qbi" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 ml-2" />
                انضم لسيرفر Qbit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
