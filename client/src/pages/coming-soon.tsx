import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // Redirect to home after countdown
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // 10 seconds

    // Countdown timer
    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [navigate]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center p-4 text-white">
      <motion.div
        className="text-center max-w-4xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Logo/Icon */}
        <motion.div 
          className="mb-8"
          variants={item}
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          variants={item}
        >
          Coming Soon
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={item}
        >
          We're working hard to bring you something amazing!
        </motion.p>

        {/* Countdown Timer */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          variants={item}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-white/10 backdrop-blur-sm rounded-xl w-24 h-24 flex items-center justify-center shadow-lg">
              {Math.floor(timeLeft / 3600)}
            </div>
            <span className="text-sm text-gray-400 mt-2 block">Hours</span>
          </div>
          <div className="text-4xl font-bold text-blue-400 flex items-center">:</div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-white/10 backdrop-blur-sm rounded-xl w-24 h-24 flex items-center justify-center shadow-lg">
              {Math.floor((timeLeft % 3600) / 60)}
            </div>
            <span className="text-sm text-gray-400 mt-2 block">Minutes</span>
          </div>
          <div className="text-4xl font-bold text-blue-400 flex items-center">:</div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-white/10 backdrop-blur-sm rounded-xl w-24 h-24 flex items-center justify-center shadow-lg">
              {timeLeft % 60}
            </div>
            <span className="text-sm text-gray-400 mt-2 block">Seconds</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-full max-w-md h-2 bg-white/10 rounded-full overflow-hidden mx-auto mb-8"
          variants={item}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 10, ease: 'linear' }}
          />
        </motion.div>

        {/* Redirect Message */}
        <motion.p 
          className="text-gray-400 mb-8"
          variants={item}
        >
          Redirecting in {timeLeft} seconds...
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={item}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate('/')}
          >
            Back to Home
          </motion.button>
          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@dakshinamurthytech.com"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </motion.a> */}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-6 mt-12"
          variants={item}
        >
          {/* {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
            <motion.a
              key={social}
              href="/coming-soon"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={social}
            >
              <span className="sr-only">{social}</span>
              <span className="text-xl">
                {social === 'twitter' && '𝕏'}
                {social === 'facebook' && 'f'}
                {social === 'linkedin' && 'in'}
                {social === 'instagram' && '📷'}
              </span>
            </motion.a>
          ))} */}
        </motion.div>
      </motion.div>
    </div>
  );
}
