import { Code, Lightbulb, UserPlus, Smartphone, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "From concept to code, we develop scalable, secure, and user-friendly applications that fuel business growth.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "We help businesses plan and implement tech strategies that align with their goals and drive innovation.",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: UserPlus,
      title: "Tech Talent Placement",
      description: "Connecting organizations with skilled developers, testers, DevOps, data scientists, and more – fast and reliably.",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Designing intuitive and feature-rich web and mobile solutions across all platforms.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Helping businesses leverage the power of the cloud with automation and scalability.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-2xl text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our expertise can drive your next project to success.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
