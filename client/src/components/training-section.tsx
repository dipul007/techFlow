import { GraduationCap, Users, Award, BookOpen, Code, TestTube, Cloud, Settings, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import trainingImage from "@assets/ChatGPT Image Jul 12, 2025, 05_51_31 PM_1752322916271.png";

export default function TrainingSection() {
  const trainingPrograms = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases",
      duration: "3-6 months",
      level: "Beginner to Advanced",
      color: "blue"
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Learn manual and automated testing methodologies",
      duration: "2-4 months",
      level: "Beginner to Intermediate",
      color: "emerald"
    },
    {
      icon: Settings,
      title: "Automation Testing with Selenium & Python",
      description: "Master test automation frameworks and tools",
      duration: "2-3 months",
      level: "Intermediate",
      color: "indigo"
    },
    {
      icon: Cloud,
      title: "DevOps Essentials",
      description: "CI/CD, containerization, and infrastructure automation",
      duration: "3-4 months",
      level: "Intermediate to Advanced",
      color: "purple"
    },
    {
      icon: BookOpen,
      title: "Cloud Fundamentals (AWS/Azure)",
      description: "Cloud computing, services, and deployment strategies",
      duration: "2-3 months",
      level: "Beginner to Intermediate",
      color: "amber"
    },
    {
      icon: TrendingUp,
      title: "Soft Skills & Client Demo Preparation",
      description: "Communication, presentation, and professional skills",
      duration: "1-2 months",
      level: "All Levels",
      color: "rose"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Industry Experts",
      description: "Learn from professionals working with top global IT firms"
    },
    {
      icon: BookOpen,
      title: "Hands-on Projects",
      description: "Work on real-world projects and build your portfolio"
    },
    {
      icon: Award,
      title: "Mock Interviews",
      description: "Practice with actual interview scenarios and feedback"
    },
    {
      icon: CheckCircle,
      title: "Career Guidance",
      description: "Get personalized career advice and job placement support"
    }
  ];

  const getColorClasses = (color: string, type: "bg" | "text" = "bg") => {
    const colorMap = {
      blue: type === "bg" ? "bg-blue-50" : "text-blue-600",
      emerald: type === "bg" ? "bg-emerald-50" : "text-emerald-600",
      indigo: type === "bg" ? "bg-indigo-50" : "text-indigo-600",
      purple: type === "bg" ? "bg-purple-50" : "text-purple-600",
      amber: type === "bg" ? "bg-amber-50" : "text-amber-600",
      rose: type === "bg" ? "bg-rose-50" : "text-rose-600"
    };
    return colorMap[color as keyof typeof colorMap] || (type === "bg" ? "bg-gray-50" : "text-gray-600");
  };

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Training & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Placement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Train with the tech leaders. Our programs are designed by experienced engineers and team leads 
            from global tech companies, bridging the gap between academic knowledge and industry expectations.
          </p>
        </div>

        {/* Hero Image and Key Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <img
              src={trainingImage}
              alt="DakshinaMurthy Technologies Training & Placement"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-blue-600" size={24} />
                <div>
                  <div className="font-semibold">100+ Students Trained</div>
                  <div className="text-sm text-gray-600">Successfully Placed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Training?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Our Training Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${getColorClasses(program.color)} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={getColorClasses(program.color, "text")} size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tech Career?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our comprehensive training programs and get hands-on experience with industry-standard tools 
            and technologies. Each program includes practical projects, mock interviews, and career guidance 
            to ensure you're job-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View All Programs
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}