import { useState } from 'react'
// import { MapPin, Mail, Phone, Clock, Send, Linkedin } from 'lucide-react'
import { MapPin, Mail, Phone, Clock, Send, Share2 } from 'lucide-react'

const SERVICES = [
  'Export Market Development',
  'Sales & Channel Development',
  'Business Strategy & Commercial Advisory',
  'Operations & Execution Systems',
  'Market-Ready Business Communication',
  'Custom Strategic Engagement',
]

const INDUSTRIES = [
  'Agriculture, Food Processing & FPOs',
  'Manufacturing & Industrial Products',
  'Exporters & Trading Businesses',
  'Consumer & Educational Products',
  'Infrastructure & Project Supplies',
  'Other',
]

const CONTACT_METHODS = ['Email', 'Phone', 'WhatsApp']

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    service: '',
    market: '',
    description: '',
    preferredContact: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* ── Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Contact
            </span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-2xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Let's Discuss the
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>Opportunity.</em>
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: 'var(--color-muted)' }}>
            Tell us about your business, current challenge and the outcome you are seeking. We
            will review the requirement and determine whether StratRoot is the right partner for
            the assignment.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* ── Contact details ── */}
            <div className="lg:col-span-4">
              <div className="space-y-8 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
                      Email
                    </p>
                  </div>
                  <p className="text-base font-medium" style={{ color: 'var(--color-primary)' }}>
                    [Official business email]
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
                      Phone / WhatsApp
                    </p>
                  </div>
                  <p className="text-base font-medium" style={{ color: 'var(--color-primary)' }}>
                    [Official number]
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
                      Office
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                    Nagpur, Maharashtra, India
                    <br />
                    <span style={{ color: 'var(--color-muted)' }}>[Confirmed address pending]</span>
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Share2 size={16} style={{ color: 'var(--color-accent)' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
                      LinkedIn
                    </p>
                  </div>
                  <p className="text-base font-medium" style={{ color: 'var(--color-primary)' }}>
                    [Official LinkedIn page]
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={16} style={{ color: 'var(--color-accent)' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
                      Business Hours
                    </p>
                  </div>
                  <p className="text-base font-medium" style={{ color: 'var(--color-primary)' }}>
                    Monday to Saturday, 10:00 AM – 6:30 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* ── Form ── */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-12 border rounded-lg bg-white text-center shadow-sm" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(28,55,42,0.08)' }}
                  >
                    <Send size={22} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                    Requirement received.
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    We will review the requirement and get back to you.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 lg:p-10 border rounded-lg bg-white shadow-sm"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--color-primary)' }}>
                    Submit Your Requirement
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Full Name" required>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Company Name" required>
                      <input
                        type="text"
                        required
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Your company"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Designation">
                      <input
                        type="text"
                        value={form.designation}
                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Your role"
                      />
                    </Field>
                    <Field label="Email Address" required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="your@email.com"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Phone / WhatsApp Number" required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </Field>
                    <Field label="Company Website">
                      <input
                        type="text"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="www.yourcompany.com"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Industry">
                      <select
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)', color: form.industry ? 'var(--color-charcoal)' : '#9CA3AF' }}
                      >
                        <option value="">Select industry</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Service Required">
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)', color: form.service ? 'var(--color-charcoal)' : '#9CA3AF' }}
                      >
                        <option value="">Select service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mb-5">
                    <Field label="Target Market or Geography">
                      <input
                        type="text"
                        value={form.market}
                        onChange={(e) => setForm({ ...form, market: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="e.g. Domestic, Middle East, Europe"
                      />
                    </Field>
                  </div>

                  <div className="mb-5">
                    <Field label="Brief Description of Requirement" required>
                      <textarea
                        required
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors resize-none"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Tell us briefly about your business and the challenge you're facing..."
                      />
                    </Field>
                  </div>

                  <div className="mb-6">
                    <Field label="Preferred Method of Contact">
                      <select
                        value={form.preferredContact}
                        onChange={(e) => setForm({ ...form, preferredContact: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)', color: form.preferredContact ? 'var(--color-charcoal)' : '#9CA3AF' }}
                      >
                        <option value="">Select preference</option>
                        {CONTACT_METHODS.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mb-6 flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="consent"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                      I consent to StratRoot India using the information provided to respond to
                      this enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors cursor-pointer"
                    style={{ background: 'var(--color-accent)' }}
                  >
                    Submit Your Requirement
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>
        {label} {required && '*'}
      </label>
      {children}
    </div>
  )
}