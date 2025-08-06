import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Clock, 
  MessageSquare,
  TrendingUp,
  Heart,
  Shield,
  Zap
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "عميل راضي",
      color: "tech-primary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100+",
      label: "مشروع مكتمل",
      color: "tech-secondary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "دعم متواصل",
      color: "tech-accent"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      number: "95%",
      label: "معدل الرضا",
      color: "tech-primary"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "أمان وموثوقية",
      description: "جميع خدماتنا آمنة ومضمونة 100%"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "سرعة في التنفيذ",
      description: "نقدم خدمات سريعة وفعالة"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "دعم مجاني",
      description: "دعم تقني مجاني لجميع خدماتنا"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "جودة عالية",
      description: "نضمن أعلى مستويات الجودة"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            حول تكنيوم
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن فريق من المطورين والتقنيين المتخصصين في تقديم أفضل الخدمات التقنية
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-tech-primary/20 text-tech-primary border-tech-primary/30">
                من نحن
              </Badge>
              <h3 className="text-3xl font-bold">
                رؤيتنا تقديم أفضل الخدمات التقنية
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                تكنيوم هو مشروع تقني يهدف إلى تقديم خدمات تحسين الحاسوب والدعم التقني عن بُعد مجاناً 
                لمجتمع الديسكورد العربي، بالإضافة إلى توفير مصادر بوتات الديسكورد المتقدمة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نؤمن بأن التقنية يجب أن تكون في متناول الجميع، لذلك نقدم خدماتنا الأساسية مجاناً 
                ونساعد المجتمع في حل مشاكلهم التقنية بكل سهولة ويسر.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="text-tech-primary mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-tech transition-all duration-500 hover:-translate-y-2 group">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${stat.color}/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                    <div className={`text-${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-accent/10 border-tech-accent/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                مهمتنا
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نسعى لتكون تكنيوم المرجع الأول في الخدمات التقنية العربية على الديسكورد، 
                ونهدف إلى بناء مجتمع تقني متطور يساعد بعضه البعض في تطوير مهاراته التقنية 
                والاستفادة من أحدث التقنيات بأبسط الطرق.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;