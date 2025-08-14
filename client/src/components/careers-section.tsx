import {
  Code,
  Bug,
  Server,
  Cloud,
  TrendingUp,
  Plus,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const benefits = [
    {
      icon: Check,
      title: "Growth-Oriented Environment",
      description: "Continuous learning and career advancement opportunities",
      color: "blue",
    },
    {
      icon: Check,
      title: "Cutting-Edge Projects",
      description: "Work on innovative solutions using latest technologies",
      color: "emerald",
    },
    {
      icon: Check,
      title: "Collaborative Culture",
      description:
        "Work with passionate professionals in a supportive environment",
      color: "indigo",
    },
  ];

  const jobOpenings = [
    {
      icon: Code,
      title: "Software Developers",
      description: "Full Stack, Backend, Frontend",
      color: "blue",
    },
    {
      icon: Bug,
      title: "QA Engineers",
      description: "Manual & Automation Testing",
      color: "emerald",
    },
    {
      icon: Server,
      title: "DevOps Engineers",
      description: "CI/CD, Cloud Infrastructure",
      color: "indigo",
    },
    {
      icon: Cloud,
      title: "Cloud Specialists",
      description: "AWS, Azure, GCP",
      color: "amber",
    },
    {
      icon: TrendingUp,
      title: "Business Analysts",
      description: "Requirements & Process Analysis",
      color: "purple",
    },
    {
      icon: Plus,
      title: "More Positions",
      description: "Explore all opportunities",
      color: "gray",
    },
  ];

  const getColorClasses = (color: string, type: "bg" | "text" = "bg") => {
    const colorMap = {
      blue: type === "bg" ? "bg-blue-50" : "text-blue-600",
      emerald: type === "bg" ? "bg-emerald-50" : "text-emerald-600",
      indigo: type === "bg" ? "bg-indigo-50" : "text-indigo-600",
      amber: type === "bg" ? "bg-amber-50" : "text-amber-600",
      purple: type === "bg" ? "bg-purple-50" : "text-purple-600",
      gray: type === "bg" ? "bg-gray-50" : "text-gray-600",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      (type === "bg" ? "bg-gray-50" : "text-gray-600")
    );
  };

  return (
    <section
      id="careers"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Looking to grow your career in a dynamic IT environment? Join a
            company where your skills are valued, your growth is prioritized,
            and innovation is a daily pursuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Business professionals collaborating"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Why Choose TechFlow?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-8 h-8 ${getColorClasses(
                        benefit.color
                      )} rounded-lg flex items-center justify-center mt-1`}
                    >
                      <Icon
                        className={getColorClasses(benefit.color, "text")}
                        size={16}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Current Openings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => {
              const Icon = job.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon
                      className={getColorClasses(job.color, "text")}
                      size={24}
                    />
                    <h4 className="font-semibold text-lg">{job.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <button
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    onClick={() => scrollToSection("contact")}
                  >
                    Apply Now →
                  </button>
                </div>
              );
            })}
          </div>

          {/* <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Don't see the right position? We're always looking for talented individuals.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Send Your Resume
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
