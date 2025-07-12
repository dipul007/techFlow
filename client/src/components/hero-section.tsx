import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CounterProps {
  target: number;
  suffix?: string;
  delay?: number;
}

function AnimatedCounter({ target, suffix = "", delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          const timer = setTimeout(() => {
            let current = 0;
            const increment = target / 50;
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              setCount(Math.floor(current));
            }, 40);
          }, delay);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, delay, hasStarted]);

  return (
    <div id={`counter-${target}`} className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
}

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Powering the Future
                </span>
                <br />
                with Technology
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering innovation through technology, training, and transformation. 
                DakshinaMurthy Technologies is a leading IT solutions provider based in Central India, 
                delivering customized software and professional training.
              </p>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
              <div className="text-center">
                <AnimatedCounter target={100} suffix="+" delay={0} />
                <div className="text-sm text-gray-600 font-medium">Trusted Clients</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={5} suffix="" delay={200} />
                <div className="text-sm text-gray-600 font-medium">Core Services</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={50} suffix="+" delay={400} />
                <div className="text-sm text-gray-600 font-medium">Expert Team</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToServices}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Services
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="relative animate-float">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Software development team collaborating"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
