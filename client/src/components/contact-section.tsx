import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
  resume: File | null;
}
export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    resume: null,
  });
  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
        resume: null,
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("firstName", formData.firstName);
    formPayload.append("lastName", formData.lastName);
    formPayload.append("email", formData.email);
    formPayload.append("company", formData.company);
    formPayload.append("service", formData.service);
    formPayload.append("message", formData.message);

    // Attach resume file only if service is tech-talent
    if (formData.service === "tech-talent" && formData.resume) {
      formPayload.append("resume", formData.resume);
    }

    const response = await fetch("https://formspree.io/f/xzzvdpkj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message sent successfully!",
        description: "Thanks! I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
        resume: null,
      });
    } else {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = <K extends keyof FormDataType>(
    field: K,
    value: FormDataType[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "Plot no. 56 Sector A, Bagroda Industrial Area, Bhopal, Huzur - 462026",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7440272222",
      color: "emerald",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@dmtechs.com",
      color: "indigo",
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.dmtechs.com",
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Let's collaborate and build something extraordinary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-development">
                      Software Development
                    </SelectItem>
                    <SelectItem value="it-consulting">IT Consulting</SelectItem>
                    <SelectItem value="tech-talent">
                      Tech Talent Placement
                    </SelectItem>
                    <SelectItem value="web-mobile">
                      Web & Mobile Development
                    </SelectItem>
                    <SelectItem value="cloud-devops">Cloud & DevOps</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {formData.service === "tech-talent" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume (PDF only)
                  </label>
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      handleChange("resume", e.target.files?.[0] || null)
                    }
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Max size: 5MB, PDF only.
                  </p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 ${getColorClasses(
                          info.color
                        )} rounded-lg flex items-center justify-center`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={20} />
                <h4 className="font-semibold text-lg">Office Hours</h4>
              </div>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <img
                    src="https://img.icons8.com/color/48/linkedin.png"
                    alt="LinkedIn"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <img
                    src="https://img.icons8.com/color/48/twitter.png"
                    alt="Twitter"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
               
                    <img
                      src="https://img.icons8.com/ios-glyphs/48/instagram-new.png"
                      alt="Instagram"
                      className="w-10 h-10 transition-shadow duration-300 hover:drop-shadow-lg"
                    />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <img
                    src="https://img.icons8.com/color/48/youtube-play.png"
                    alt="YouTube"
                    className="w-10 h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
