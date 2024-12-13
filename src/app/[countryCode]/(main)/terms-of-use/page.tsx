"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown,
  AlertCircle,
  Book,
  Globe,
  Copyright,
  ShoppingCart,
  Truck,
  RotateCcw,
  Shield,
  Lock,
  Settings,
  Mail,
  Scale
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

const TermsOfUsePage = () => {
  const categoryData: CategoryItem[] = [
    {
      id: "introduction",
      title: "Introduction",
      icon: Book,
      description: "Basic terms and website usage agreement",
      sections: [
        {
          id: 1,
          title: "Agreement to Terms",
          content: "Welcome to Charandhul.com. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services. If you do not agree with these terms, you should not use this website.\n\nCharandhul.com ('we', 'us', or 'our') operates this website. By accessing this website, you agree to these terms and conditions, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.",
          expanded: false,
        }
      ],
    },
    {
      id: "website-usage",
      title: "Website Usage",
      icon: Globe,
      description: "Guidelines for using our website",
      sections: [
        {
          id: 1,
          title: "Acceptable Use",
          content: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. You must not misuse this website by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.",
          expanded: false,
        }
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Copyright,
      description: "Copyright and ownership information",
      sections: [
        {
          id: 1,
          title: "Rights and Restrictions",
          content: "All content on this website, including text, graphics, logos, images, and software, is the property of Charandhul.com or its content suppliers and is protected by international copyright laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission from us.",
          expanded: false,
        }
      ],
    },
    {
      id: "products",
      title: "Product Information",
      icon: ShoppingCart,
      description: "Details about our products",
      sections: [
        {
          id: 1,
          title: "Product Details",
          content: "We strive to ensure that all descriptions, images, and prices of products appearing on the website are accurate. However, we do not warrant that product descriptions or other content on the website are error-free. All prices are subject to change without notice and we reserve the right to modify or discontinue any product at any time.",
          expanded: false,
        }
      ],
    },
    {
      id: "orders",
      title: "Orders and Payments",
      icon: ShoppingCart,
      description: "Ordering and payment processes",
      sections: [
        {
          id: 1,
          title: "Order Processing",
          content: "By placing an order, you are offering to purchase a product subject to these terms and conditions. All orders are subject to availability and confirmation of the order price. We reserve the right to refuse any order you place with us. In the event of an error in the processing of your order, we will inform you of this as soon as possible and offer a refund or alternative solution.",
          expanded: false,
        }
      ],
    },
    {
      id: "shipping",
      title: "Shipping and Delivery",
      icon: Truck,
      description: "Delivery information",
      sections: [
        {
          id: 1,
          title: "Delivery Terms",
          content: "We aim to dispatch orders promptly, but delivery times are estimates and not guaranteed. We are not responsible for delays caused by factors beyond our control, such as customs clearance or postal delays. Risk of loss and title for products pass to you upon our delivery to the carrier.",
          expanded: false,
        }
      ],
    },
    {
      id: "returns",
      title: "Returns and Refunds",
      icon: RotateCcw,
      description: "Return and refund policies",
      sections: [
        {
          id: 1,
          title: "Return Process",
          content: "If you are not satisfied with your purchase, you may return it in accordance with our Return Policy, which is incorporated by reference into these terms and conditions. Products must be returned in their original condition within the specified return period. Refunds will be processed based on the original payment method, minus any shipping or handling fees, if applicable.",
          expanded: false,
        }
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Shield,
      description: "Liability limitations",
      sections: [
        {
          id: 1,
          title: "Liability Terms",
          content: "To the fullest extent permitted by law, Charandhul.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. We shall not be liable for any damages resulting from the use or inability to use our website or products.",
          expanded: false,
        }
      ],
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: Lock,
      description: "Privacy information",
      sections: [
        {
          id: 1,
          title: "Privacy Terms",
          content: "Your use of the website is also governed by our Privacy Policy, which is incorporated by reference into these terms and conditions. We are committed to protecting your privacy and personal information.",
          expanded: false,
        }
      ],
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: Settings,
      description: "Updates to terms",
      sections: [
        {
          id: 1,
          title: "Modifications",
          content: "We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.",
          expanded: false,
        }
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Scale,
      description: "Legal jurisdiction",
      sections: [
        {
          id: 1,
          title: "Jurisdiction",
          content: "These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of our courts.",
          expanded: false,
        }
      ],
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("introduction");
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

  const handleEmailClick = () => {
    window.location.href = "mailto:team@charandhul.com";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-light mb-6 text-center">
            Terms and Conditions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services
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
            <h3 className="text-xl font-semibold mb-4">Questions about our Terms?</h3>
            <p className="text-gray-600 mb-6">Contact us for clarification on any of our terms and conditions</p>
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

export default TermsOfUsePage;