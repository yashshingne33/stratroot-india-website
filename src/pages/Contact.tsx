import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { MapPin, Mail, Clock, Send, AlertCircle, Search, MessageCircleQuestion, Handshake } from 'lucide-react'

// ── Page metadata (from content brief: Contact page → Page setup) ──
const PAGE_TITLE = 'Contact StratRoot India | Discuss Your Business Requirement'
const PAGE_DESCRIPTION =
  'Contact StratRoot India to discuss export consulting, sales development, business strategy, operations or commercial communication requirements.'
const CANONICAL_URL = 'https://stratroot.com/contact'

// Google Apps Script Web App URL (see Code.gs). Set this in your .env as
// VITE_CONTACT_FORM_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const INDUSTRIES = [
  'Agriculture, Food Processing and FPOs',
  'Manufacturing and Industrial Products',
  'Exporters, Traders and Sourcing Businesses',
  'Consumer, Retail and Educational Products',
  'Infrastructure and Project Supplies',
  'Specialised and Regulated Products',
  'Other',
]

const SERVICES = [
  'Export Consulting',
  'Sales and Channel Development',
  'Business Strategy and Commercial Advisory',
  'Operations and Execution Systems',
  'Market-Ready Business Communication',
  'Custom Strategic Engagement',
  'Not Sure Yet',
]

const NEXT_STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Review',
    body: 'We examine the objective, current position and service requirement.',
  },
  {
    icon: MessageCircleQuestion,
    step: '02',
    title: 'Clarify',
    body: 'If required, we ask for the information needed to understand the assignment properly.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Discuss',
    body: 'Where there is a potential fit, we arrange a structured first conversation and define the next step.',
  },
]

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
    consent: false,
    // Honeypot — left empty by real visitors, hidden from view. If it
    // arrives filled, we treat the submission as spam without giving an
    // automated filler any clue why it failed.
    company_hp: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = PAGE_TITLE

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', PAGE_DESCRIPTION)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', CANONICAL_URL)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.company_hp) {
      // Honeypot tripped — silently drop the submission.
      return
    }

    setSending(true)
    setError(false)

    try {
      // Apps Script Web Apps don't send CORS headers on their response,
      // so even though the request reaches the script and the emails go
      // out, the browser blocks us from reading the response body back
      // (response.json() throws a CORS/network error here even on a
      // successful send). mode: 'no-cors' avoids that: the request still
      // goes through, we just can't inspect what came back, so a resolved
      // fetch (no thrown network error) is treated as success. Content-Type
      // stays text/plain so this also avoids a CORS preflight the endpoint
      // can't answer.
      await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          fullName: form.fullName,
          companyName: form.companyName,
          designation: form.designation,
          email: form.email,
          phone: form.phone,
          website: form.website,
          industry: form.industry,
          service: form.service,
          market: form.market,
          description: form.description,
          company_hp: form.company_hp,
        }),
      })

      setSubmitted(true)
    } catch (err) {
      // This only fires on an actual network failure (offline, DNS,
      // endpoint unreachable) — not on anything the script itself does.
      console.error('Contact form submission error:', err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Contact StratRoot
            </span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-4xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
          Tell Us What You Are
            <br />
            <em style={{ color: '#2F855A', fontStyle: 'normal' }}>Trying to Achieve.</em>
          </h1>

          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
            Share your business objective, present position and the issue slowing progress. We
            will review the requirement and respond with the most appropriate next step.
          </p>
        </div>
      </section>

      {/* ── Details + Form ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
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
                  <a
                    href="mailto:stratroot@gmail.com"
                    className="text-base font-medium hover:underline"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    stratroot@gmail.com
                  </a>
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
                <div className="p-8 sm:p-10 lg:p-12 border rounded-lg bg-white text-center shadow-sm" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(28,55,42,0.08)' }}
                  >
                    <Send size={22} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                    Your Requirement Has Been Received
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    Thank you. We will review the information and contact you using the details
                    provided. Please check your spam folder if you are expecting an email
                    response.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  noValidate={false}
                  className="p-6 sm:p-8 lg:p-10 border rounded-lg bg-white shadow-sm"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <h2 className="font-display text-2xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                    Submit Your Requirement
                  </h2>
                  <p className="text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
                    The information below helps us understand the requirement before the first
                    conversation. Fields marked with an asterisk are required.
                  </p>

                  {/* Honeypot field — visually and semantically hidden from real users */}
                  <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="company_hp">Leave this field empty</label>
                    <input
                      type="text"
                      id="company_hp"
                      name="company_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company_hp}
                      onChange={(e) => setForm({ ...form, company_hp: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Full Name" htmlFor="fullName" required>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Your full name"
                      />
                    </Field>
                    <Field label="Company Name" htmlFor="companyName" required>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        autoComplete="organization"
                        required
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Your company or organisation"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Designation" htmlFor="designation">
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        autoComplete="organization-title"
                        value={form.designation}
                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Your role"
                      />
                    </Field>
                    <Field label="Business Email" htmlFor="email" required>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="name@company.com"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Phone or WhatsApp Number" htmlFor="phone" required>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Include country code"
                      />
                    </Field>
                    <Field label="Company Website" htmlFor="website">
                      <input
                        type="url"
                        id="website"
                        name="website"
                        autoComplete="url"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="https://yourcompany.com"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Industry" htmlFor="industry">
                      <select
                        id="industry"
                        name="industry"
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
                    <Field label="Service Required" htmlFor="service">
                      <select
                        id="service"
                        name="service"
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
                    <Field label="Target Market or Geography" htmlFor="market">
                      <input
                        type="text"
                        id="market"
                        name="market"
                        value={form.market}
                        onChange={(e) => setForm({ ...form, market: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="India, Middle East, Europe, Russia, or not yet decided"
                      />
                    </Field>
                  </div>

                  <div className="mb-5">
                    <Field label="Business Requirement" htmlFor="description" required>
                      <textarea
                        id="description"
                        name="description"
                        required
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none transition-colors resize-none"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="Briefly describe the product or business, present situation, challenge and result you want."
                      />
                    </Field>
                  </div>

                  <div className="mb-6 flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="consent"
                      name="consent"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                      I consent to StratRoot India using the information provided to review and
                      respond to this enquiry. Read the{' '}
                      <Link to="/privacy-policy" className="underline hover:no-underline" style={{ color: 'var(--color-charcoal)' }}>
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  {error && (
                    <div
                      className="mb-6 p-4 rounded-lg border flex items-start gap-3"
                      style={{ borderColor: '#FCA5A5', background: '#FEF2F2' }}
                    >
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#B91C1C' }} />
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#B91C1C' }}>
                          The Form Could Not Be Submitted
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: '#B91C1C' }}>
                          Please check the required fields and try again. If the problem
                          continues, email{' '}
                          <a href="mailto:stratroot@gmail.com" className="underline">
                            stratroot@gmail.com
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'var(--color-accent)' }}
                  >
                    {sending ? 'Sending...' : 'Submit Your Requirement'}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              After You Submit
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white" style={{ lineHeight: 1.2 }}>
              What Happens After You Submit.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {NEXT_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-lg border"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <s.icon size={20} style={{ color: 'var(--color-gold)' }} />
                  <span className="font-display text-2xl font-light" style={{ color: 'var(--color-gold)' }}>
                    {s.step}
                  </span>
                </div>
                <h3 className="font-semibold text-base mb-2 text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>
        {label} {required && '*'}
      </label>
      {children}
    </div>
  )
}