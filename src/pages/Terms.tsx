import { Link } from 'react-router'
import Seo from '../components/Seo'
import { SEO } from '../seo'
import { LEGAL_NAME, LOCATION, CONTACT_EMAIL, WEBSITE, EFFECTIVE_DATE } from '../legal'

// DRAFT for management and legal review. Governing-law and jurisdiction wording (Section 12) in particular
// must be confirmed by a qualified Indian lawyer against the actual legal entity before publication.

const SECTIONS = [
  {
    id: 'acceptance',
    title: '1. About These Terms',
    body: [
      `These Terms of Use apply to your use of ${WEBSITE} (the "Website"), which is operated by ${LEGAL_NAME}, ${LOCATION}. By using the Website you agree to these terms. If you do not agree, please do not use the Website.`,
      'These terms cover use of the Website only. Any consulting assignment is governed by a separate written proposal or agreement signed or accepted by both parties.',
    ],
  },
  {
    id: 'website-purpose',
    title: '2. Information Only, Not Advice',
    body: [
      'The Website describes StratRoot\'s services, working approach and industries served. It is general information about our business. It is not professional, legal, tax, regulatory, customs, financial or investment advice, and you should not act on it without taking advice suited to your circumstances.',
      'Content on the Website is provided in good faith. We try to keep it accurate and current, but we do not promise that it is complete or free from error, and we may change or remove it without notice.',
    ],
  },
  {
    id: 'no-engagement',
    title: '3. Enquiries and No Consulting Relationship',
    body: [
      'Sending an enquiry through the Contact form, the Consultation form or by email does not create a consulting engagement, a client relationship or any duty on StratRoot to accept an assignment. We review each enquiry and decide whether we are a suitable partner for the requirement.',
      'An engagement begins only when scope, fees, responsibilities and timelines are agreed in writing.',
      'When you send an enquiry, you agree to give accurate information and to have the right to share it. Please follow the guidance in our Privacy Policy on what not to include in a form or first email. We will handle the information you send in line with our Privacy Policy.',
    ],
  },
  {
    id: 'no-guarantees',
    title: '4. No Guarantee of Results',
    body: [
      'Descriptions of our services, deliverables and typical outcomes explain what we aim to do and how we work. They are not promises of any specific result. In particular, no consultant can guarantee export orders, buyer responses, payments, sales figures, market approvals, or business or financial outcomes. Results depend on many factors, including the client\'s product, resources, decisions and market conditions.',
      'StratRoot works only on lawful products and permitted transactions. Legal, regulatory, customs, taxation, certification, banking and freight matters must be confirmed by the client\'s own qualified professionals and authorised service providers.',
    ],
  },
  {
    id: 'acceptable-use',
    title: '5. Acceptable Use',
    body: [
      'You agree that you will not:',
      {
        list: [
          'Use the Website in any way that is unlawful, fraudulent or harmful.',
          'Submit false, misleading or another person\'s information through our forms, or impersonate any person or organisation.',
          'Send spam, bulk or automated submissions, or content that contains viruses or malicious code.',
          'Attempt to gain unauthorised access to the Website, its hosting or connected systems, or interfere with their security or operation.',
          'Scrape, copy or systematically collect content from the Website by automated means, other than ordinary search-engine indexing.',
        ],
      },
      'We may block access or ignore submissions that we reasonably believe break these rules.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '6. Intellectual Property',
    body: [
      `The text, design, logo, graphics, layout and other content of the Website belong to ${LEGAL_NAME} or are used with permission, and are protected by applicable intellectual property laws. The StratRoot name and logo are our marks.`,
      'You may view the Website and share links to it. You may print or save a copy of pages for your own internal business use. You may not copy, republish, sell, modify or create derivative works from the Website content without our prior written permission.',
      'Any consulting deliverables created for a client are governed by the terms of the relevant written engagement.',
    ],
  },
  {
    id: 'third-party-links',
    title: '7. Third-Party Links and Services',
    body: [
      'The Website may link to websites or services operated by others. We do not control them and are not responsible for their content, availability or practices. A link is not an endorsement.',
      'The Website is hosted, and enquiry forms are processed, using third-party service providers, described in our Privacy Policy.',
    ],
  },
  {
    id: 'availability',
    title: '8. Availability and Changes to the Website',
    body: [
      'We aim to keep the Website available, but we do not promise that it will be uninterrupted, secure or error-free. We may suspend, change or withdraw any part of it at any time, and form submissions may occasionally fail. If you need to be sure we have received something, please confirm with us by email.',
    ],
  },
  {
    id: 'disclaimer',
    title: '9. Disclaimer',
    body: [
      'To the extent permitted by law, the Website and its content are provided "as is" and "as available", without warranties of any kind, whether express or implied, including any warranty of accuracy, fitness for a particular purpose or non-infringement.',
    ],
  },
  {
    id: 'liability',
    title: '10. Limitation of Liability',
    body: [
      `To the extent permitted by law, ${LEGAL_NAME} will not be liable for any indirect, incidental, special or consequential loss, or for any loss of profit, revenue, business or data, arising from your use of, or inability to use, the Website or from reliance on its content.`,
      'Nothing in these terms excludes or limits any liability that cannot lawfully be excluded or limited.',
    ],
  },
  {
    id: 'privacy',
    title: '11. Privacy',
    body: [
      'How we collect and use personal information through the Website is explained in our Privacy Policy, which forms part of these terms.',
    ],
  },
  {
    id: 'law',
    title: '12. Governing Law and Disputes',
    body: [
      'These terms are governed by the laws of India. Subject to any mandatory legal rights you may have, the courts at Nagpur, Maharashtra, will have jurisdiction over any dispute arising from your use of the Website.', // LEGAL REVIEW: confirm
      'If you have a concern about the Website or these terms, please contact us first so that we can try to resolve it informally.',
    ],
  },
  {
    id: 'changes',
    title: '13. Changes to These Terms',
    body: [
      'We may update these terms from time to time. The updated version will be published on this page with a new effective date. Continued use of the Website after that date means you accept the updated terms.',
    ],
  },
  {
    id: 'contact',
    title: '14. Contact Us',
    body: [
      'If you have questions about these Terms of Use, please contact:',
      LEGAL_NAME,
      LOCATION,
      { mail: CONTACT_EMAIL },
    ],
  },
]

export default function Terms() {
  return (
    <div>
      <Seo {...SEO.terms} />
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: '#102A43' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1
            className="font-display text-4xl lg:text-5xl font-semibold text-white"
            style={{ lineHeight: 1.1 }}
          >
            Terms of Use
          </h1>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Effective date: {EFFECTIVE_DATE} · {LEGAL_NAME}
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-24" style={{ background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10 p-6 border border-[#E2E8F0] rounded-lg bg-white">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Please read these terms carefully before using this website. They explain the rules for
              using the site and the limits of the information on it. For how we handle your personal
              information, see our{' '}
              <Link to="/privacy" className="underline underline-offset-2" style={{ color: '#B7791F' }}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.id} id={section.id}>
                <h2
                  className="font-display text-xl font-semibold mb-4"
                  style={{ color: '#111827' }}
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((item, i) => {
                    if (typeof item === 'string') {
                      return (
                        <p key={i} className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                          {item}
                        </p>
                      )
                    }
                    if ('list' in item) {
                      return (
                        <ul
                          key={i}
                          className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed"
                          style={{ color: '#374151' }}
                        >
                          {item.list.map((li, j) => (
                            <li key={j}>{li}</li>
                          ))}
                        </ul>
                      )
                    }
                    if (item.mail) {
                      return (
                        <p key={i} className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                          Email:{' '}
                          <a
                            href={`mailto:${item.mail}`}
                            className="underline underline-offset-2"
                            style={{ color: '#B7791F' }}
                          >
                            {item.mail}
                          </a>
                        </p>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs" style={{ color: '#6B7280' }}>
              © {new Date().getFullYear()} {LEGAL_NAME}
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs font-medium" style={{ color: '#B7791F' }}>
                Privacy Policy
              </Link>
              <Link to="/" className="text-xs font-medium" style={{ color: '#B7791F' }}>
                ← Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}