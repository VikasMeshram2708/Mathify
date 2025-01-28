import React from "react";
import { Twitter, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { navLinks } from "@/data";
import Link from "next/link";
import { SparklesText } from "../ui/sparkles-text";
import { Badge } from "../ui/badge";

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
    { icon: <Facebook className="h-4 w-4" />, href: "#" },
    { icon: <Instagram className="h-4 w-4" />, href: "#" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#" },
  ];

  return (
    <footer className="border-t dark:bg-muted/10 bg-muted">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="relative w-72">
            <Link href="/">
              <SparklesText text="Mathify" />
            </Link>
            <Badge className="text-sm absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600">
              AI
            </Badge>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md my-8">
            Making mathematics accessible and understandable for everyone
            through AI-powered assistance.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-blue-600 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                target="_blank"
                key={index}
                href={social.href}
                className="p-2"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 mb-8">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:support@mathify.ai"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              support@mathify.ai
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 Mathify. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
