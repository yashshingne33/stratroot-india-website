import { useState } from 'react'
import { CheckCircle, CalendarDays, ArrowRight } from 'lucide-react'

const TIME_SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']

const SERVICES = [
  'Export Market Development',
  'Sales & Channel Development',
  'Business Strategy & Commercial Advisory',
  'Operations & Execution Systems',
  'Market-Ready Business Communication',
  "Not sure — I'd like to discuss",
]

export default function Consultation() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    challenge: '',
    date: '',
    time: '',
    mode: 'video',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div>
      {/* ── Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Start a Conversation
            </span>
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-2xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            A Structured
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>First Conversation.</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
            Let us examine the opportunity, understand the constraints and define the most
            practical way forward.
          </p>
        </div>
      </section>

      {/* ── What to expect ── */}
      <div className="border-b" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Understand', b: 'We study the business, products, capabilities, current challenges and desired outcomes.' },
              { n: '02', t: 'Diagnose', b: 'We examine the market, competition, commercial viability and priorities.' },
              { n: '03', t: 'Define next steps', b: 'If there is a fit, we outline what the engagement could look like.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="font-display text-3xl font-light flex-shrink-0" style={{ color: 'var(--color-accent)', lineHeight: 1 }}>
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--color-primary)' }}>{s.t}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {step === 3 ? (
            <div
              className="text-center py-16 bg-whitep-6 sm:p-8 lg:p-12 rounded-lg border shadow-sm"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(28,55,42,0.08)' }}
              >
                <CheckCircle size={28} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h2 className="font-display text-3xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                You're booked.
              </h2>
              <p className="text-base mb-2" style={{ color: 'var(--color-charcoal)' }}>
                Your conversation has been requested for <strong>{form.date}</strong> at{' '}
                <strong>{form.time}</strong>.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
                We'll confirm by email to <strong>{form.email}</strong> once the slot is verified.
              </p>
              <div
                className="inline-block px-6 py-4 border rounded-lg text-sm"
                style={{ color: 'var(--color-charcoal)', borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
              >
                <p className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Next steps</p>
                <p>Check your email for confirmation and the joining details.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 lg:p-10 border rounded-lg shadow-sm"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-10">
                {[1, 2].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                      style={{
                        background: step >= s ? 'var(--color-accent)' : 'var(--color-border)',
                        color: step >= s ? 'white' : 'var(--color-muted)',
                      }}
                    >
                      {s}
                    </div>
                    <span className="text-xs font-medium" style={{ color: step >= s ? 'var(--color-primary)' : 'var(--color-muted)' }}>
                      {s === 1 ? 'About You' : 'Choose a Time'}
                    </span>
                    {s < 2 && <span className="w-8 h-px ml-2" style={{ background: 'var(--color-border)' }} />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--color-primary)' }}>
                    Tell us about yourself
                  </h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" required>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 border rounded text-sm focus:outline-none"
                          style={{ borderColor: 'var(--color-border)' }}
                          placeholder="Your name"
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 border rounded text-sm focus:outline-none"
                          style={{ borderColor: 'var(--color-border)' }}
                          placeholder="your@company.com"
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone / WhatsApp" required>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 border rounded text-sm focus:outline-none"
                          style={{ borderColor: 'var(--color-border)' }}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </Field>
                      <Field label="Company" required>
                        <input
                          required
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 border rounded text-sm focus:outline-none"
                          style={{ borderColor: 'var(--color-border)' }}
                          placeholder="Your company name"
                        />
                      </Field>
                    </div>
                    <Field label="Service Required" required>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none"
                        style={{ borderColor: 'var(--color-border)', color: form.service ? 'var(--color-charcoal)' : '#9CA3AF' }}
                      >
                        <option value="">Select a service area</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Describe Your Challenge" required>
                      <textarea
                        required
                        value={form.challenge}
                        onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none resize-none"
                        style={{ borderColor: 'var(--color-border)' }}
                        placeholder="In a few sentences, tell us what you're dealing with and the outcome you want..."
                      />
                    </Field>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!form.name || !form.email || !form.company || !form.service || !form.challenge}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      style={{ background: 'var(--color-accent)' }}
                    >
                      Continue to scheduling <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--color-primary)' }}>
                    Choose a time that works
                  </h2>
                  <div className="space-y-6">
                    <Field label={<><CalendarDays size={13} className="inline mr-1.5" />Preferred Date</> as any} required>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border rounded text-sm focus:outline-none"
                        style={{ borderColor: 'var(--color-border)' }}
                      />
                    </Field>
                    <div>
                      <label className="block text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>
                        Preferred Time (IST) *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setForm({ ...form, time: slot })}
                            className="py-2.5 text-xs font-medium border rounded transition-all cursor-pointer"
                            style={{
                              borderColor: form.time === slot ? 'var(--color-accent)' : 'var(--color-border)',
                              background: form.time === slot ? 'var(--color-accent)' : 'white',
                              color: form.time === slot ? 'white' : 'var(--color-charcoal)',
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs mt-2" style={{ color: 'var(--color-muted)' }}>
                        Business hours: Monday to Saturday, 10:00 AM – 6:30 PM IST
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>
                        Meeting Format
                      </label>
                      <div className="flex gap-3">
                        {['video', 'phone'].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setForm({ ...form, mode })}
                            className="flex-1 py-3 text-sm font-medium border rounded transition-all capitalize cursor-pointer"
                            style={{
                              borderColor: form.mode === mode ? 'var(--color-accent)' : 'var(--color-border)',
                              background: form.mode === mode ? 'rgba(28,55,42,0.08)' : 'white',
                              color: form.mode === mode ? 'var(--color-accent)' : 'var(--color-charcoal)',
                            }}
                          >
                            {mode === 'video' ? 'Video Call' : 'Phone Call'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 text-sm font-medium border rounded transition-colors cursor-pointer"
                        style={{ color: 'var(--color-charcoal)', borderColor: 'var(--color-border)' }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!form.date || !form.time}
                        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        style={{ background: 'var(--color-accent)' }}
                      >
                        Confirm Booking
                        <CheckCircle size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

function Field({ label, required, children }: { label: React.ReactNode; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>
        {label} {required && '*'}
      </label>
      {children}
    </div>
  )
}