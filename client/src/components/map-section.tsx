import React from "react";

export default function MapSection() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div
        className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200"
        style={{ height: "300px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.373510909153!2d77.40102731501358!3d23.259933794263287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4c5e1a2035a5%3A0xea9abe60613a6deb!2sBhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1694191090232!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-0"
          title="Bhopal Location Map"
        ></iframe>
      </div>
    </div>
  );
}
