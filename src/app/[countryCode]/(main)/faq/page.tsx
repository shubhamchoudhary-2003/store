"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown,
  Package,
  Star,

  HandMetal,
  ShoppingCart,
  CreditCard,
  Plane,
  Truck,
  MapPin,
  RotateCcw,
  Headphones,
  Users,
  Utensils,
  Mail,
  Search
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ElementType;
}

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What materials are used in your products?",
      answer: "Our products primarily use high-quality brass and copper, along with other traditional materials.",
      category: "Products",
      icon: Package
    },
    {
      id: 2,
      question: "What are the benefits of using brass and copper kitchenware?",
      answer: "Brass and copper kitchenware offer excellent heat conductivity, durability, and natural antimicrobial properties.",
      category: "Products",
      icon: Star
    },
    {
      id: 3,
      question: "How do I care for and clean my brass and copper items?",
      answer: "Clean with gentle soap and warm water, dry thoroughly, and occasionally polish with appropriate metal cleaners.",
      category: "Care",
     icon:  Star
    },
    {
      id: 4,
      question: "Are your products handmade?",
      answer: "Yes, our products are handcrafted by skilled artisans using traditional techniques.",
      category: "Products",
      icon: HandMetal
    },
    {
      id: 5,
      question: "How can I place an order?",
      answer: "Browse our website, add items to your cart, and proceed to checkout. It's that simple!",
      category: "Orders",
      icon: ShoppingCart
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, and other major payment methods.",
      category: "Payment",
      icon: CreditCard
    },
    {
      id: 7,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to many countries worldwide. Shipping costs vary by location.",
      category: "Shipping",
      icon: Plane
    },
    {
      id: 8,
      question: "How long will it take to receive my order?",
      answer: "Delivery times vary by location, typically 3-7 business days for domestic orders.",
      category: "Shipping",
      icon: Truck
    },
    {
      id: 9,
      question: "Can I track my order?",
      answer: "Yes, you'll receive a tracking number once your order ships.",
      category: "Shipping",
      icon: MapPin
    },
    {
      id: 10,
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
      category: "Returns",
      icon: RotateCcw
    },
    {
      id: 11,
      question: "How can I contact customer support?",
      answer: "Email us at team@charandhul.com or use our contact form. We're here to help!",
      category: "Support",
      icon: Headphones
    },
    {
      id: 12,
      question: "Do you offer customization or bulk orders?",
      answer: "Yes, we offer both customization and bulk order options. Contact us for details.",
      category: "Orders",
      icon: Users
    },
    {
      id: 13,
      question: "Are your products safe for cooking and storing food?",
      answer: "Yes, our products are food-safe and meet all applicable safety standards.",
      category: "Safety",
      icon: Utensils
    },
    {
      id: 14,
      question: "Can I change or cancel my order?",
      answer: "If you need to change or cancel your order, please contact us as soon as possible at team@charandhul.com. We will do our best to accommodate your request before the order is processed and shipped.",
      category: "Orders",
      icon: ShoppingCart
    }
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEmailClick = () => {
    window.location.href = "mailto:team@charandhul.com";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-light mb-6 text-center">
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto"
          >
            These questions might not be on everyone&rsquo;s FAQ list, but we&rsquo;ve got your back in case you were curious.
          </motion.p>
        </div>
      </motion.div>

      {/* Search Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center text-left hover:bg-gray-50"
              >
                <faq.icon className="w-5 h-5 text-gray-500 mr-4 flex-shrink-0" />
                <span className="font-medium pr-6 flex-grow">
                  {faq.question}
                </span>
                <motion.div 
                  initial={false}
                  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    <div className="pl-9">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can&rsquo;t find the answer you&rsquo;re looking for? Please contact our customer support team.</p>
            <button 
              onClick={handleEmailClick}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              <Mail className="w-5 h-5" />
              Contact Us 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;