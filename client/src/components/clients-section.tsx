import { Heart, ShoppingCart, DollarSign, Factory, GraduationCap, Home, Laptop, Plus } from "lucide-react";

export default function ClientsSection() {
  const industries = [
    { icon: Heart, name: "Healthcare", color: "text-red-500" },
    { icon: ShoppingCart, name: "E-commerce", color: "text-emerald-500" },
    { icon: DollarSign, name: "Finance", color: "text-amber-500" },
    { icon: Factory, name: "Manufacturing", color: "text-purple-500" },
    { icon: GraduationCap, name: "Education", color: "text-orange-500" },
    { icon: Home, name: "Real Estate", color: "text-gray-600" },
    { icon: Laptop, name: "IT & Staffing", color: "text-cyan-500" },
    { icon: Plus, name: "And More", color: "text-indigo-500" }
  ];

  const getBgColor = (color: string) => {
    const colorMap = {
      "text-red-500": "from-red-50 to-pink-50 border-red-100",
      "text-emerald-500": "from-emerald-50 to-teal-50 border-emerald-100",
      "text-amber-500": "from-yellow-50 to-amber-50 border-yellow-100",
      "text-purple-500": "from-purple-50 to-violet-50 border-purple-100",
      "text-orange-500": "from-orange-50 to-red-50 border-orange-100",
      "text-gray-600": "from-gray-50 to-slate-50 border-gray-100",
      "text-cyan-500": "from-cyan-50 to-blue-50 border-cyan-100",
      "text-indigo-500": "from-indigo-50 to-purple-50 border-indigo-100"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-50 to-slate-50 border-gray-100";
  };

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">100+</span> Organizations
          </h2>
          <p className="text-xl text-gray-600">We have proudly served clients across diverse industries</p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${getBgColor(industry.color)} rounded-xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                <Icon className={`mx-auto mb-4 ${industry.color}`} size={32} />
                <h4 className="font-semibold text-lg">{industry.name}</h4>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white text-center">
          <blockquote className="text-xl mb-6 italic">
            "Our clients trust us because we deliver – on time, every time."
          </blockquote>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
