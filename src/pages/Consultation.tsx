import { useState } from 'react'
import { CheckCircle, CalendarDays, ArrowRight } from 'lucide-react'

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const SERVICES = [
  'Business Restructuring & Turnaround',
  'Operations Excellence',
  'Export & Trade Consulting',
  'Financial Strategy & CFO Services',
  'Market Entry & Expansion',
  'Digital Transformation',
  'HR & Organisational Design',
  'Supply Chain Optimisation',
  "Not sure — I'd like to discuss",
]

export default function Consultation() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
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
      {/* Header */}
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: '#C6A15B' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>Book a Consultation</span>
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-semibold text-white max-w-2xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            60 minutes.
            <br />
            <em style={{ color: '#C6A15B' }}>No obligation.</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: '#BAC7D5' }}>
            A structured conversation about your business, your challenge, and whether we're the right partner to help.
          </p>
        </div>
      </div>

      {/* What to expect */}
      <div className="border-b border-[#BAC7D5]/40" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Understand your situation', b: 'We\'ll ask about your business, your challenge, and what you\'ve tried.' },
              { n: '02', t: 'Share our honest assessment', b: 'We\'ll tell you exactly where we think we can help — and where we can\'t.' },
              { n: '03', t: 'Propose next steps', b: 'If there\'s a fit, we\'ll outline what an engagement might look like and what it would cost.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-4">
                <span
                  className="font-display text-3xl font-light flex-shrink-0"
                  style={{ color: '#2F855A', lineHeight: 1 }}
                >
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#102A43' }}>{s.t}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#627D98' }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24" style={{ background: '#F8FAF7' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {step === 3 ? (
            <div className="text-center py-16 bg-white p-8 lg:p-12 rounded-lg border border-[#BAC7D5]/40 shadow-sm">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: '#2F855A15' }}
              >
                <CheckCircle size={28} style={{ color: '#2F855A' }} />
              </div>
              <h2 className="font-display text-3xl font-semibold mb-4" style={{ color: '#102A43' }}>
                You're booked.
              </h2>
              <p className="text-base mb-2" style={{ color: '#334E68' }}>
                Your discovery call has been confirmed for{' '}
                <strong>{form.date}</strong> at <strong>{form.time}</strong>.
              </p>
              <p className="text-sm mb-8" style={{ color: '#627D98' }}>
                A calendar invite has been sent to <strong>{form.email}</strong>. We'll send you a brief pre-call questionnaire 24 hours before your call.
              </p>
              <div
                className="inline-block px-6 py-4 border border-[#BAC7D5]/40 rounded-lg text-sm bg-[#F8FAF7]"
                style={{ color: '#334E68' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#102A43' }}>Next steps</p>
                <p>Check your email for the calendar invite and joining link.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 border border-[#BAC7D5]/40 rounded-lg shadow-sm">
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-10">
                {[1, 2].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                      style={{
                        background: step >= s ? '#2F855A' : '#E2E8F0',
                        color: step >= s ? 'white' : '#627D98',
                      }}
                    >
                      {s}
                    </div>
                    <span className="text-xs font-medium" style={{ color: step >= s ? '#102A43' : '#627D98' }}>
                      {s === 1 ? 'About You' : 'Choose a Time'}
                    </span>
                    {s < 2 && <span className="w-8 h-px ml-2" style={{ background: '#BAC7D5' }} />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: '#102A43' }}>
                    Tell us about yourself
                  </h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                          placeholder="your@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>Phone *</label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                          placeholder="+91 98xxx xxxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>Company *</label>
                        <input
                          required
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>Annual Revenue *</label>
                      <select
                        required
                        value={form.revenue}
                        onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors bg-white"
                        style={{ color: form.revenue ? '#102A43' : '#9CA3AF' }}
                      >
                        <option value="">Select revenue range</option>
                        <option value="<10">Under ₹10 Crore</option>
                        <option value="10-50">₹10 – ₹50 Crore</option>
                        <option value="50-200">₹50 – ₹200 Crore</option>
                        <option value="200-500">₹200 – ₹500 Crore</option>
                        <option value=">500">Above ₹500 Crore</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>Area of Interest *</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors bg-white"
                        style={{ color: form.service ? '#102A43' : '#9CA3AF' }}
                      >
                        <option value="">Select a service area</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        Describe Your Challenge *
                      </label>
                      <textarea
                        required
                        value={form.challenge}
                        onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors resize-none"
                        placeholder="In 3-5 sentences, tell us what you're dealing with and what outcome you want..."
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!form.name || !form.email || !form.company || !form.service || !form.challenge}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors hover:bg-[#276749] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      style={{ background: '#2F855A' }}
                    >
                      Continue to scheduling <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: '#102A43' }}>
                    Choose a time that works
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        <CalendarDays size={13} className="inline mr-1.5" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        Preferred Time (IST) *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setForm({ ...form, time: slot })}
                            className="py-2.5 text-xs font-medium border rounded transition-all cursor-pointer"
                            style={{
                              borderColor: form.time === slot ? '#2F855A' : '#BAC7D5/40',
                              background: form.time === slot ? '#2F855A' : 'white',
                              color: form.time === slot ? 'white' : '#334E68',
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: '#627D98' }}>
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
                              borderColor: form.mode === mode ? '#2F855A' : '#BAC7D5/40',
                              background: form.mode === mode ? '#2F855A15' : 'white',
                              color: form.mode === mode ? '#2F855A' : '#334E68',
                            }}
                          >
                            {mode === 'video' ? 'Video Call (Google Meet)' : 'Phone Call'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 text-sm font-medium border border-[#BAC7D5]/40 rounded hover:border-[#102A43] transition-colors cursor-pointer"
                        style={{ color: '#334E68' }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!form.date || !form.time}
                        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors hover:bg-[#276749] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        style={{ background: '#2F855A' }}
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