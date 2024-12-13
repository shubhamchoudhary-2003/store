"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown,
  Shield,
  Eye,
  Lock,
  Cookie,
  MessageSquare,
  Share2,
  Database,
  AlertCircle,
  Settings,
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

const PrivacyPolicyPage = () => {
  const categoryData: CategoryItem[] = [
    {
      id: "data-collection",
      title: "Data Collection",
      icon: Database,
      description: "Information about how we collect your data",
      sections: [
        {
          id: 1,
          title: "Information We Collect",
          content: `We collect the following information:
          - **Personal Information**: Name, email address, phone number, billing/shipping addresses, and payment information.
          - **Non-Personal Information**: Browser details, device type, operating system, and Internet service providers.`,
          expanded: false,
        },
        {
          id: 2,
          title: "How We Use Your Data",
          content: `We use your information for:
          - Processing and managing orders, including delivery and returns.
          - Personalizing your shopping experience.
          - Enhancing website and customer service.
          - Sending periodic emails related to orders, products, and services.`,
          expanded: false,
        },
      ],
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      icon: Share2,
      description: "How we share your information",
      sections: [
        {
          id: 1,
          title: "Third-Party Sharing",
          content: `We may share your information with:
          - Trusted third parties assisting in website operations or customer service, under strict confidentiality agreements.
          - Legal entities when required by law or to protect rights, property, or safety.`,
          expanded: false,
        },
      ],
    },
    {
      id: "security",
      title: "Data Security",
      icon: Lock,
      description: "Measures to protect your information",
      sections: [
        {
          id: 1,
          title: "Security Measures",
          content: `We safeguard your personal information with:
          - SSL encryption for secure transactions.
          - Secure servers with restricted access.
          - Continuous monitoring and updates to maintain data integrity.`,
          expanded: false,
        },
        {
          id: 2,
          title: "Data Breach Protocol",
          content: "In case of a data breach, affected users and authorities will be notified promptly as per legal requirements.",
          expanded: false,
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: Cookie,
      description: "Our use of cookies",
      sections: [
        {
          id: 1,
          title: "Cookie Usage",
          content: `We use cookies to:
          - Improve website functionality.
          - Analyze user interactions.
          - Deliver personalized experiences.
          You can manage cookie preferences through your browser settings.`,
          expanded: false,
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: Shield,
      description: "Your data protection rights",
      sections: [
        {
          id: 1,
          title: "Access and Control",
          content: `You have the right to:
          - Access your personal data.
          - Request corrections or deletions.
          - Withdraw consent for data processing.`,
          expanded: false,
        },
      ],
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: Settings,
      description: "Changes to this Privacy Policy",
      sections: [
        {
          id: 1,
          title: "Policy Changes",
          content: "We may update this policy. Changes will be posted here, and the modification date updated.",
          expanded: false,
        },
      ],
    },
  ];
  

  const [activeCategory, setActiveCategory] = useState<string>("data-collection");
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto"
          >
            We care about your privacy and are committed to protecting your personal data
          </motion.p>
        </div>
      </motion.div>

      {/* Last Updated Banner */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <AlertCircle className="w-4 h-4 mr-2" />
            Last Updated: November 16, 2024
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
            <h3 className="text-xl font-semibold mb-4">Have questions about our privacy practices?</h3>
            <p className="text-gray-600 mb-6">Our privacy team is here to help you understand how we protect your data</p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
