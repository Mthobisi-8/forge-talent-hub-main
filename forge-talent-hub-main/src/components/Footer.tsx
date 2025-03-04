import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-secondary hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/courses" className="text-secondary hover:text-primary transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-secondary hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-secondary">
              <li>Email: info@forgetalent.com</li>
              <li>Phone: +27 10 880 3795</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-secondary">Subscribe for updates on new courses and promotions</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} Forge Talent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
