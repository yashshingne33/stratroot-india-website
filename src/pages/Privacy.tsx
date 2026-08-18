import { Link } from 'react-router'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: [
      'When you use our website, enquire about our services, or book a consultation, we may collect the following types of information:',
      'Personal identification information: Name, email address, phone number, and company name.',
      'Business information: Revenue range, industry, and a description of your business challenge.',
      'Usage data: Information about how you interact with our website, including pages visited, time spent, and referring URLs.',
      'Communication records: Correspondence you have with us via email, contact forms, or phone.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use information collected from you for the following purposes:',
      'To respond to your enquiries and schedule consultation calls.',
      'To understand your business situation and assess whether we can help.',
      'To send you relevant insights, case studies, and event invitations (only if you have consented).',
      'To improve our website and services based on usage data.',
      'To comply with legal obligations.',
    ],
  },
  {
    title: '3. Confidentiality',
    body: [
      'Confidentiality is fundamental to our business. Any information you share with us about your business, financials, challenges, or strategies is treated as strictly confidential.',
      'We do not share client information with third parties without explicit written consent, except where required by law.',
      'All StratRoot India personnel are bound by strict confidentiality obligations.',
    ],
  },
  {
    title: '4. Data Sharing',
    body: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share anonymised, aggregated data for the purpose of industry research or marketing, but this data cannot be used to identify individual clients or website users.',
      'We may engage third-party service providers (such as email services and website analytics tools) who process data on our behalf. These providers are bound by data processing agreements and may only use your data as instructed by us.',
    ],
  },
  {
    title: '5. Data Security',
    body: [
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.',
      'Despite these measures, no data transmission over the internet or storage system can be guaranteed as 100% secure. If you have reason to believe your interaction with us is no longer secure, please contact us immediately.',
    ],
  },
  {
    title: '6. Cookies',
    body: [
      'Our website uses cookies to improve your browsing experience and to analyse website traffic.',
      'Essential cookies: Required for the website to function properly.',
      'Analytics cookies: Used to understand how visitors interact with the website (e.g., Google Analytics).',
      'You can control cookie settings through your browser. Please note that disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    title: '7. Your Rights',
    body: [
      'Subject to applicable law, you have the following rights regarding your personal data:',
      'The right to access the personal data we hold about you.',
      'The right to request correction of inaccurate data.',
      'The right to request deletion of your personal data (subject to legal and contractual obligations).',
      'The right to withdraw consent for marketing communications at any time.',
      'To exercise any of these rights, please contact us at privacy@stratroot.in.',
    ],
  },
  {
    title: '8. Retention',
    body: [
      'We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.',
      'Enquiry and consultation data is typically retained for 3 years.',
      'Client engagement data is retained for 7 years in line with Indian regulatory requirements.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated effective date.',
      'We encourage you to review this policy periodically.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'If you have any questions about this Privacy Policy or how we handle your personal data, please contact:',
      'StratRoot India Consulting Pvt. Ltd.',
      'Level 8, One BKC, Bandra Kurla Complex, Mumbai 400051',
      'Email: privacy@stratroot.in',
      'Phone: +91 22 4009 0000',
    ],
  },
]

export default function Privacy() {
  return (
    <div>
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: '#111827' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1
            className="font-display text-4xl lg:text-5xl font-semibold text-white"
            style={{ lineHeight: 1.1 }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm" style={{ color: '#6B7280' }}>
            Effective Date: 1 January 2025 · StratRoot India Consulting Pvt. Ltd.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-24" style={{ background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10 p-6 border border-[#E2E8F0] rounded-lg bg-white">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              StratRoot India Consulting Pvt. Ltd. ("StratRoot", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully. If you disagree with the terms, please discontinue use of our website.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2
                  className="font-display text-xl font-semibold mb-4"
                  style={{ color: '#111827' }}
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs" style={{ color: '#6B7280' }}>
              © {new Date().getFullYear()} StratRoot India Consulting Pvt. Ltd.
            </p>
            <Link
              to="/"
              className="text-xs font-medium"
              style={{ color: '#B7791F' }}
            >
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
