import { Button } from "@/components/ui/button";
import { Monitor, Zap, Headphones, Code, Star, Sparkles } from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { icon: Monitor, position: "top-20 left-10", delay: "0s", color: "text-cyan-400" },
    { icon: Zap, position: "top-32 right-16", delay: "1s", color: "text-yellow-400" },
    { icon: Headphones, position: "bottom-32 left-16", delay: "2s", color: "text-purple-400" },
    { icon: Code, position: "bottom-20 right-10", delay: "0.5s", color: "text-pink-400" },
    { icon: Star, position: "top-48 left-1/2", delay: "1.5s", color: "text-blue-400" },
    { icon: Sparkles, position: "bottom-48 right-1/3", delay: "2.5s", color: "text-green-400" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-tech-primary/20 to-tech-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-tech-secondary/20 to-tech-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} opacity-20 animate-[float_6s_ease-in-out_infinite]`}
            style={{ animationDelay: item.delay }}
          >
            <item.icon className={`w-8 h-8 ${item.color}`} />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Logo */}
        <div className="mb-8 animate-[bounce-in_1s_ease-out]">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src="./lovable-uploads/3d6be7a9-3fb0-49ad-8c79-8e6f4452e12d.png"
              alt="Techium Logo"
              className="w-32 h-32 mx-auto rounded-full border-4 border-primary/50 relative z-10 shadow-intense hover:scale-110 transition-bounce"
            />
          </div>
        </div>

        {/* Enhanced Title */}
        <div className="space-y-6 mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-[fade-in-up_1s_ease-out] text-gradient bg-[length:200%_auto]" style={{ animationDelay: '0.2s' }}>
            Qbit
          </h1>
          
          <div className="space-y-4 animate-[fade-in-up_1s_ease-out]" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl font-semibold text-tech-primary mb-4">
              خدمات تقنية متطورة عبر الديسكورد
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              نقدم لك تحسينات للويندوز والدعم التقني المجاني، بالإضافة إلى سورسات البوتات الحصرية و المجانية
              <br />
              <span className="text-tech-accent font-semibold">نوفر جودة عالية مع سرعة في التنفيذ, ماتصدق ؟ جربنا</span>
            </p>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-[scale-in_1s_ease-out]" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="group relative overflow-hidden gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover-glow transition-bounce shadow-tech" asChild>
            <a href="https://discord.gg/qbi" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">ابدأ الآن مجاناً</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" className="group px-8 py-4 text-lg font-semibold border-2 border-tech-primary/50 hover:border-tech-primary hover:bg-tech-primary/10 hover-glow transition-bounce" asChild>
            <a href="#services">
              <span className="group-hover:text-tech-primary transition-smooth">تصفح الخدمات</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;