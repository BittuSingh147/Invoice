"use client"
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import HeroImage from "@/public/Hero.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      {/* Gradient Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 opacity-50"></div>
      
      {/* Animated Blurred Gradient */}
      <motion.div 
        className="absolute inset-0 blur-3xl opacity-30"
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: [0, 360],
          transition: { 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }
        }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-r from-blue-200/50 via-teal-100/50 to-green-200/50 rounded-full animate-pulse"></div>
      </motion.div>

      <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <motion.div 
          className="text-left space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2"
          >
            <Sparkles className="text-primary w-5 h-5 animate-pulse" />
            <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-3 py-1 rounded-full">
              Introducing InvoiceSpace 1.0
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900">
            Invoicing made{" "}
            <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-green-600 text-transparent bg-clip-text">
              super easy!
            </span>
          </h1>

          <div className="flex items-start space-x-3 max-w-xl text-muted-foreground">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-lg">
              Creating Invoices can be a pain! We at Invoice Space make it super easy for you to get paid in time, with intuitive design and powerful features.
            </p>
          </div>

          <motion.div 
            className="flex space-x-4 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/login" className="w-full max-w-xs">
              <RainbowButton className="w-full text-base font-semibold py-3">
                Get Unlimited Access
              </RainbowButton>
            </Link>
            <Link 
              href="/features" 
              className="text-primary hover:underline font-medium flex items-center space-x-2"
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl blur-2xl"></div>
          <Image
            src={HeroImage}
            alt="Invoice Space Dashboard"
            priority
            className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/80 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 className="text-green-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Instant Invoice Generation</p>
              <p className="text-xs text-gray-500">Create professional invoices in seconds</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;