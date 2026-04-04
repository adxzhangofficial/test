import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  AlertCircle,
  X,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

/* ── Toast Component ───────────────────────────────── */
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-sm font-semibold ${
          type === 'success'
            ? 'bg-emerald-500 text-white'
            : 'bg-red-500 text-white'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 shrink-0" />
        )}
        {message}
        <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Whether you're a potential partner, investor, or customer — we'd love to
          hear from you.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const s = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmed = form.name.trim();
    if (!trimmed) errs.name = 'Full name is required.';
    else if (trimmed.length < 2) errs.name = 'Name must be at least 2 characters.';

    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = 'Please enter a valid email address.';

    if (!form.subject) errs.subject = 'Please select a subject.';

    const msg = form.message.trim();
    if (!msg) errs.message = 'Message is required.';
    else if (msg.length < 10) errs.message = 'Message must be at least 10 characters.';

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setToast({ message: 'Please fix the errors below.', type: 'error' });
      return;
    }

    const timestamp = new Date().toISOString();
    const entry = { ...form, timestamp };

    // Save to localStorage so admin can review later
    let existing: unknown[] = [];
    try { existing = JSON.parse(localStorage.getItem('asg_submissions') || '[]'); } catch { existing = []; }
    if (!Array.isArray(existing)) existing = [];
    existing.push(entry);
    localStorage.setItem('asg_submissions', JSON.stringify(existing));

    setToast({ message: 'Message sent successfully!', type: 'success' });
    setSubmitted(true);
  };

  const fieldError = (field: string) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
        <AlertCircle className="w-3.5 h-3.5" />
        {errors[field]}
      </p>
    ) : null;

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-red-500 focus:ring-red-500/20'
    } focus:ring-2 outline-none transition-all text-sm`;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`grid lg:grid-cols-5 gap-12 lg:gap-16 anim-hidden ${
            s.isVisible ? 'anim-visible' : ''
          }`}
        >
          {/* Info Side */}
          <div className="lg:col-span-2">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3 leading-tight">
              Let's Build Something Together
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Have a question, partnership opportunity, or just want to learn more
              about what we do? Fill out the form and our team will respond within
              24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-700">
                    Headquarters
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    1507 Lampman Court
                    <br />
                    Wyoming 82007
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-700">Email</h4>
                  <a
                    href="mailto:support@asggroupinc.com"
                    className="text-gray-500 text-sm mt-1 hover:text-red-500 transition-colors"
                  >
                    support@asggroupinc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-700">Phone</h4>
                  <a
                    href="tel:+13232890039"
                    className="text-gray-500 text-sm mt-1 hover:text-red-500 transition-colors"
                  >
                    +1 (323) 289-0039
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-700">
                    Business Hours
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Monday – Friday: 8:00 AM – 6:00 PM CT
                    <br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            {submitted ? (
              <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-12 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy-700">
                  Message Sent!
                </h3>
                <p className="text-gray-500 mt-3 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your message
                  and respond within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', company: '', subject: '', message: '' });
                  }}
                  className="mt-6 text-red-500 font-semibold hover:text-red-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-lg"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: '' })); }}
                      className={inputClass('name')}
                      placeholder="John Smith"
                    />
                    {fieldError('name')}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: '' })); }}
                      className={inputClass('email')}
                      placeholder="john@company.com"
                    />
                    {fieldError('email')}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass('company')}
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">
                      Subject *
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrors((p) => ({ ...p, subject: '' })); }}
                      className={`${inputClass('subject')} bg-white`}
                    >
                      <option value="">Select a topic</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="investor">Investor Relations</option>
                      <option value="media">Media & Press</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {fieldError('subject')}
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-semibold text-navy-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors((p) => ({ ...p, message: '' })); }}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Tell us how we can help..."
                  />
                  {fieldError('message')}
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const s = useInView();
  const offices = [
    { city: 'Wyoming', label: 'Headquarters', address: '1507 Lampman Court, 82007', planned: false },
    { city: 'New York, NY', label: 'East Coast Hub', address: 'Location TBD', planned: true },
    { city: 'Los Angeles, CA', label: 'West Coast Hub', address: 'Location TBD', planned: true },
    { city: 'Atlanta, GA', label: 'Logistics Center', address: 'Location TBD', planned: true },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Our Offices
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3">
            Current & Planned Locations
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-gray-100 p-7 card-hover anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${office.planned ? 'bg-gray-200' : 'bg-navy-700'}`}>
                <MapPin className={`w-5 h-5 ${office.planned ? 'text-gray-500' : 'text-white'}`} />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy-700">
                {office.city}
              </h3>
              <p className="text-red-500 text-sm font-semibold mt-1">{office.label}</p>
              <p className="text-gray-500 text-sm mt-2">{office.address}</p>
              {office.planned && (
                <span className="inline-block mt-3 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">
                  Planned 2027
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactForm />
      <MapSection />
    </>
  );
}
