import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'

const OFFICES = [
  {
    city: 'Mumbai',
    type: 'Head Office',
    address: 'Level 8, One BKC, Bandra Kurla Complex, Mumbai 400051',
    phone: '+91 22 4009 0000',
  },
  {
    city: 'Delhi NCR',
    type: 'Office',
    address: 'Suite 410, DLF Centre, Sansad Marg, New Delhi 110001',
    phone: '+91 11 4200 0000',
  },
  {
    city: 'Bengaluru',
    type: 'Office',
    address: 'WeWork Galaxy, 43, Residency Road, Bengaluru 560025',
    phone: '+91 80 4700 0000',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: '#C6A15B' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>Contact</span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-2xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Let's have a
            <br />
            <em style={{ color: '#C6A15B' }}>conversation.</em>
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: '#BAC7D5' }}>
            No sales pitch. If we're not the right fit, we'll tell you. If we are, we'll show you exactly how.
          </p>
        </div>
      </div>

      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact details */}
            <div className="lg:col-span-4">
              <div className="space-y-8 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={16} style={{ color: '#2F855A' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#627D98' }}>Email</p>
                  </div>
                  <a
                    href="mailto:hello@stratroot.in"
                    className="text-base font-medium hover:text-[#2F855A] transition-colors"
                    style={{ color: '#102A43' }}
                  >
                    hello@stratroot.in
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={16} style={{ color: '#2F855A' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#627D98' }}>Phone</p>
                  </div>
                  <a
                    href="tel:+919999999999"
                    className="text-base font-medium hover:text-[#2F855A] transition-colors"
                    style={{ color: '#102A43' }}
                  >
                    +91 99999 99999
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={16} style={{ color: '#2F855A' }} />
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#627D98' }}>Response Time</p>
                  </div>
                  <p className="text-base font-medium" style={{ color: '#102A43' }}>
                    Within one business day
                  </p>
                </div>
              </div>

              {/* Offices */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={16} style={{ color: '#2F855A' }} />
                  <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#627D98' }}>Our Offices</p>
                </div>
                <div className="space-y-6">
                  {OFFICES.map((office) => (
                    <div key={office.city}>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-sm" style={{ color: '#102A43' }}>{office.city}</p>
                        <span
                          className="text-xs px-1.5 py-0.5 rounded font-medium"
                          style={{ background: '#2F855A15', color: '#2F855A' }}
                        >
                          {office.type}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: '#627D98' }}>{office.address}</p>
                      <p className="text-xs mt-1" style={{ color: '#627D98' }}>{office.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div
                  className="p-12 border border-[#BAC7D5]/40 rounded-lg bg-white text-center shadow-sm"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: '#2F855A15' }}
                  >
                    <Send size={22} style={{ color: '#2F855A' }} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: '#102A43' }}>
                    Message received.
                  </h2>
                  <p className="text-sm" style={{ color: '#627D98' }}>
                    We'll review your message and respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 lg:p-10 border border-[#BAC7D5]/40 rounded-lg bg-white shadow-sm">
                  <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: '#102A43' }}>
                    Send us a message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>
                        Annual Revenue
                      </label>
                      <select
                        value={form.revenue}
                        onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                        className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors bg-white"
                        style={{ color: form.revenue ? '#102A43' : '#9CA3AF' }}
                      >
                        <option value="" disabled>Select range</option>
                        <option value="<10">Under ₹10 Crore</option>
                        <option value="10-50">₹10 – ₹50 Crore</option>
                        <option value="50-200">₹50 – ₹200 Crore</option>
                        <option value="200-500">₹200 – ₹500 Crore</option>
                        <option value=">500">Above ₹500 Crore</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: '#627D98' }}>
                      What would you like to discuss? *
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-[#BAC7D5]/40 rounded text-sm focus:outline-none focus:border-[#2F855A] transition-colors resize-none"
                      placeholder="Tell us briefly about your business and the challenge you're facing..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-colors hover:bg-[#276749] cursor-pointer"
                    style={{ background: '#2F855A' }}
                  >
                    Send Message
                    <Send size={15} />
                  </button>
                  <p className="text-xs text-center mt-4" style={{ color: '#627D98' }}>
                    We respond within one business day. All enquiries are strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}