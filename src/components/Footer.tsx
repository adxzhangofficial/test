import { Link, useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Divisions', path: '/companies' },
    { label: 'Careers', path: '/careers' },
    { label: 'Insights', path: '/newsroom' },
  ],
  brands: [
    { label: 'American Service Marketplace', path: '/companies' },
    { label: 'American Service Animals', path: '/companies' },
    { label: 'American Service Logistics', path: '/companies' },
    { label: 'American Service Properties', path: '/companies' },
    { label: 'American Service Health', path: '/companies' },
  ],
  resources: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
};

export default function Footer() {
  const location = useLocation();

  const shareUrl = `https://asggroupinc.com${location.pathname}`;
  const shareText = 'Check out American Service Group';

  const socials = [
    { Icon: Facebook, label: 'Share on Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { Icon: Twitter, label: 'Share on X', url: `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { Icon: Linkedin, label: 'Share on LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { Icon: Instagram, label: 'Share on Instagram', url: `https://www.instagram.com/` },
  ];

  return (
    <footer className="bg-black text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Ready to Partner with ASG?
            </h3>
            <p className="text-red-100 mt-2 text-lg">
              Let's build something extraordinary together.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-500 font-bold br-5 hover:bg-red-50 transition-colors shadow-lg text-lg"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/asg-logo.png"
              alt="American Service Group"
              className="h-10 brightness-0 invert"
            />
            <p className="mt-5 text-gray-300 leading-relaxed max-w-md">
              American Service Group is a diversified holding company and the parent brand behind nine industry-leading divisions spanning e-commerce, logistics, healthcare, technology, real estate, and more.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <a
                href="mailto:support@asggroupinc.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                support@asggroupinc.com
              </a>
              <a
                href="tel:+13232890039"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                +1 (323) 289-0039
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>1507 Lampman Court, Wyoming 82007</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Our Brands</h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} American Service Group. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 text-gray-300 hover:text-white transition-all"
                aria-label={label}
                title={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
