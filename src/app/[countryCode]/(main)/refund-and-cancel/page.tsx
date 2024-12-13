"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown,
  AlertCircle,
  RefreshCcw,
  Package,
  Clock,
  ShieldAlert,
  RotateCcw,
  Headphones,
} from "lucide-react";

interface PolicySection {
  id: number;
  title: string;
  content: string;
  expanded: boolean;
}

interface CategoryItem {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  sections: PolicySection[];
}

const RefundPolicyPage = () => {
  const categoryData: CategoryItem[] = [
    {
      id: "cancellation",
      title: "Cancellation Policy",
      icon: RotateCcw,
      description: "Guidelines for order cancellation",
      sections: [
        {
          id: 1,
          title: "Time Frame for Cancellations",
          content: "Cancellations will be considered only if the request is made within 7 days of placing the order.",
          expanded: false,
        },
        {
          id: 2,
          title: "Exclusions",
          content: `- Cancellation requests will not be entertained if the product has already been shipped or is out for delivery. In such cases, you may choose to reject the product upon delivery.
          
          - Perishable items like flowers, eatables, etc., cannot be canceled. Refunds or replacements may be made for such items only if the delivered product is proven to be of unsatisfactory quality.`,
          expanded: false,
        },
      ],
    },
    {
      id: "damaged-products",
      title: "Damaged Products",
      icon: ShieldAlert,
      description: "Process for handling damaged or defective items",
      sections: [
        {
          id: 1,
          title: "Reporting Damaged Products",
          content: "If the received product is damaged or defective, report the issue to our customer service team within 7 days of receipt.",
          expanded: false,
        },
        {
          id: 2,
          title: "Review Process",
          content: "The seller or merchant will review the reported issue, and a decision will be made after proper verification.",
          expanded: false,
        },
      ],
    },
    {
      id: "product-expectations",
      title: "Product Expectations",
      icon: Package,
      description: "What to do if the product doesn't meet expectations",
      sections: [
        {
          id: 1,
          title: "Product Not as Expected",
          content: "If the product differs from its description or your expectations, notify our customer service within 7 days of receiving the product. Our team will investigate and decide on the appropriate resolution.",
          expanded: false,
        },
      ],
    },
    {
      id: "warranty",
      title: "Warranty Claims",
      icon: Clock,
      description: "Information about warranty coverage",
      sections: [
        {
          id: 1,
          title: "Manufacturer's Warranty",
          content: "For products covered under the manufacturer's warranty, please contact the manufacturer directly to resolve any issues.",
          expanded: false,
        },
      ],
    },
    {
      id: "refund-process",
      title: "Refund Process",
      icon: RefreshCcw,
      description: "How refunds are processed",
      sections: [
        {
          id: 1,
          title: "Processing Time",
          content: "Approved refunds will be processed within 7 days of approval.",
          expanded: false,
        },
        {
          id: 2,
          title: "Refund Method",
          content: "The refund amount will be credited to the original payment method or another suitable method as agreed upon.",
          expanded: false,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("cancellation");
  const [sections, setSections] = useState<PolicySection[]>(categoryData[0].sections);

  const toggleSection = useCallback(
    (id: number) => {
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === id ? { ...section, expanded: !section.expanded } : section
        )
      );
    },
    [setSections]
  );

  const handleCategoryClick = useCallback(
    (id: string) => {
      setActiveCategory(id);
      const newSections = categoryData.find((item) => item.id === id)?.sections || [];
      setSections(newSections.map((section) => ({ ...section, expanded: false })));
    },
    [categoryData]
  );

  const getActiveCategory = useCallback(
    () => categoryData.find((item) => item.id === activeCategory),
    [activeCategory, categoryData]
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-light mb-6 text-center">
            Refund & Cancellation Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto"
          >
            This policy explains the procedures for canceling or seeking a refund for products or services purchased through Charandhul
          </motion.p>
        </div>
      </motion.div>

      {/* Last Updated Banner */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <AlertCircle className="w-4 h-4 mr-2" />
            Last Updated: November 30, 2024
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full md:w-64 flex-shrink-0">
            <nav className="grid gap-4">
              {categoryData.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    activeCategory === category.id ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className={`w-5 h-5 ${activeCategory === category.id ? "text-black" : "text-gray-500"}`} />
                    <span className={activeCategory === category.id ? "font-medium" : "text-gray-600"}>{category.title}</span>
                  </div>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Content */}
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-1 max-w-3xl">
            <div className="mb-8">
              <h2 className="text-3xl font-light mb-4">{getActiveCategory()?.title}</h2>
              <p className="text-gray-600">{getActiveCategory()?.description}</p>
            </div>

            <div className="space-y-4">
              {sections.map((section) => (
                <motion.div key={section.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                    aria-expanded={section.expanded}
                    aria-controls={`section-${section.id}`}
                  >
                    <span className="font-medium pr-6">{section.title}</span>
                    <motion.div initial={false} animate={{ rotate: section.expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {section.expanded && (
                      <motion.div
                        id={`section-${section.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-4 text-gray-600 whitespace-pre-line"
                      >
                        {section.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Need help with a refund or cancellation?</h3>
            <p className="text-gray-600 mb-6">Our customer service team is here to assist you</p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 mx-auto">
              <Headphones className="w-5 h-5" />
              Contact Customer Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;