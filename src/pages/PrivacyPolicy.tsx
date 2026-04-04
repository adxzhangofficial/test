import HeroCanvas from '../components/HeroCanvas';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
        <HeroCanvas />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
          <p className="text-sm text-gray-400 mb-8">Last Updated: April 5, 2026</p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            American Service Group ("ASG," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing or using our services, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">2. Information We Collect</h2>
          <h3 className="text-lg font-heading font-semibold text-navy-700 mt-6 mb-3">Personal Information</h3>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information that you voluntarily provide when you:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3">
            <li>Fill out a contact form or application</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Apply for a career position</li>
            <li>Engage with our customer support</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            This may include your name, email address, phone number, mailing address, and any other information you choose to provide.
          </p>

          <h3 className="text-lg font-heading font-semibold text-navy-700 mt-6 mb-3">Automatically Collected Information</h3>
          <p className="text-gray-600 leading-relaxed">
            When you visit our website, we may automatically collect certain information, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. We may use cookies, web beacons, and similar tracking technologies for this purpose.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you communications related to our services, updates, and promotions</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations and protect our rights</li>
            <li>Process job applications</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">4. Sharing of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3">
            <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website, conducting our business, or providing services to you, subject to confidentiality agreements.</li>
            <li><strong>Affiliates:</strong> Our subsidiaries and affiliated divisions within the American Service Group family of brands.</li>
            <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process, or to protect the rights, property, or safety of ASG, our users, or the public.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:support@asggroupinc.com" className="text-red-500 hover:text-red-600">
              support@asggroupinc.com
            </a>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">7. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website uses cookies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">8. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">9. Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected information from a child under 13, we will delete it promptly.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-700 mt-10 mb-4">11. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 text-gray-600 leading-relaxed">
            <p className="font-semibold text-navy-700">American Service Group</p>
            <p>1507 Lampman Court, Wyoming 82007</p>
            <p>
              Email:{' '}
              <a href="mailto:support@asggroupinc.com" className="text-red-500 hover:text-red-600">
                support@asggroupinc.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
