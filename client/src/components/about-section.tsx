import { Users, Briefcase, Settings, Rocket } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Users,
      title: "100+ Active Clients",
      description: "Across India and overseas",
      color: "blue",
    },
    {
      icon: Briefcase,
      title: "Proven Success",
      description: "In placing tech talent across top MNCs",
      color: "emerald",
    },
    {
      icon: Settings,
      title: "Expert Team",
      description: "Engineers, developers, designers & consultants",
      color: "indigo",
    },
    {
      icon: Rocket,
      title: "Strong Presence",
      description: "Software development, IT consulting & staffing",
      color: "amber",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-600",
      emerald: "bg-emerald-50 text-emerald-600",
      indigo: "bg-indigo-50 text-indigo-600",
      amber: "bg-amber-50 text-amber-600",
    };
    return (
      colorMap[color as keyof typeof colorMap] || "bg-gray-50 text-gray-600"
    );
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DakshinaMurthy Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At DakshinaMurthy Technologies, we believe that technology should be
            a bridge — not a barrier — to growth and innovation. We're a trusted
            IT firm known for our commitment to digital transformation and
            technical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  Our mission is to empower businesses and individuals by
                  delivering innovative, reliable, and sustainable solutions. We
                  aim to create meaningful impact through quality services,
                  ethical practices, and a commitment to continuous improvement.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  We strive to enhance the lives of our customers by providing
                  exceptional products and services that combine quality with
                  value. Our mission is to build lasting relationships based on
                  trust, transparency, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Technology innovation workspace"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Key Highlights */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 ${getColorClasses(
                    highlight.color
                  )} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon size={24} />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
