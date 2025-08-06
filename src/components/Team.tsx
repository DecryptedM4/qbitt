import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Code2 } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "marshaled",
      role: " مؤسس ومطور رئيسي",
      avatar: "/lovable-uploads/marshaled-avatar.png",
      status: "متاح",
      specialty: "تطوير البوتات وتحسين الأداء",
      icon: <Crown className="w-5 h-5 text-yellow-500" />,
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      name: "Silent",
      role: "خبير التطوير و الأنظمة",
      avatar: "/lovable-uploads/silent-avatar.png",
      status: "متاح",
      specialty: "حلول الأنظمة والأمان",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Proff",
      role: "خبير التطوير",
      avatar: "/lovable-uploads/proff-avatar.webp",
      status: "متاح",
      specialty: "البرمجة المتقدمة والتطوير",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-card/30 to-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-tech-accent/10 to-tech-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-12 h-12 text-tech-primary animate-[float_3s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-tech-primary/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite]">
            فريقنا الرهيب
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تعرف على الخبراء المتخصصين الذين يقدمون لك أفضل الخدمات التقنية عبر الديسكورد
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="group hover:shadow-intense transition-all duration-500 hover-glow border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden animate-[bounce-in_1s_ease-out] relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 text-center relative z-10">
                {/* Enhanced Avatar with Status */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={`${member.name} Discord Avatar`}
                      className="w-28 h-28 rounded-full border-4 border-primary/30 relative z-10 group-hover:scale-110 transition-bounce duration-500 shadow-intense"
                    />
                    {/* Sparkle effects around avatar */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-[sparkle_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-[sparkle_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2 z-20">
                    <Badge 
                      variant="secondary" 
                      className="bg-green-500/20 text-green-400 border-green-500/30 text-xs shadow-glow animate-pulse"
                    >
                      {member.status}
                    </Badge>
                  </div>
                </div>

                {/* Enhanced Member Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse group-hover:scale-105 transition-transform">
                    <div className="group-hover:animate-[sparkle_1s_ease-in-out_infinite]">
                      {member.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-smooth">{member.name}</h3>
                  </div>
                  
                  <p className="text-tech-primary font-semibold text-lg group-hover:text-tech-accent transition-smooth">{member.role}</p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-smooth">
                    {member.specialty}
                  </p>
                </div>

                {/* Enhanced Discord Indicator */}
                <div className="mt-6 pt-4 border-t border-border/30 group-hover:border-tech-primary/30 transition-smooth">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-glow"></div>
                    <span className="font-medium">متاح على الديسكورد</span>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-tech-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-card p-8 rounded-3xl border border-border/30 max-w-2xl mx-auto shadow-intense relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/5 to-tech-secondary/5 rounded-3xl"></div>
            <div className="relative z-10">
              <p className="text-lg text-muted-foreground mb-6">
                هل تريد التحدث مع أحد أعضاء الفريق؟
              </p>
              <Button 
                size="lg"
                className="group relative overflow-hidden gradient-primary text-primary-foreground border-0 px-8 py-4 text-lg font-semibold shadow-intense hover-glow transition-bounce" 
                asChild
              >
                <a href="https://discord.gg/qbi" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">انضم لسيرفر الديسكورد للتواصل المباشر</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-secondary to-tech-accent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;