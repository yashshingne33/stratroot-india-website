// import { Link } from 'react-router'
// import Seo from '../components/Seo'
// import { SEO } from '../seo'

// // TODO before launch (see "Management approvals required" in the audit brief):
// // - LEGAL_NAME: use the exact registered legal name only once management confirms it.
// // - CONTACT_EMAIL: switch to privacy@stratroot.com after that mailbox is created and tested.
// // - EFFECTIVE_DATE: set to the real publication date after legal review.
// const LEGAL_NAME = 'StratRoot India'
// const CONTACT_EMAIL = 'stratroot@gmail.com'
// const EFFECTIVE_DATE = 'To be confirmed on publication'

// const SECTIONS = [
//   {
//     title: '1. Information We Collect',
//     body: [
//       'When you use our website or submit an enquiry, we may collect the following types of information:',
//       'Contact details: Your name, designation, company name, business email address, phone or WhatsApp number, and company website.',
//       'Business information: Your industry, the service you are interested in, your target market, and your description of the business requirement.',
//       'Usage data: Information about how you interact with our website, including pages visited, time spent, and referring URLs.',
//       'Communication records: Correspondence you have with us via email or the contact form.',
//     ],
//   },
//   {
//     title: '2. How We Use Your Information',
//     body: [
//       'We use information collected from you for the following purposes:',
//       'To review and respond to your enquiry and arrange a first conversation.',
//       'To understand your business requirement and assess whether StratRoot is the right consulting partner.',
//       'To improve our website and services based on usage data.',
//       'To comply with legal obligations.',
//     ],
//   },
//   {
//     title: '3. Confidentiality',
//     body: [
//       'Confidentiality is fundamental to our business. Any information you share with us about your business, financials, challenges, or strategies is treated as strictly confidential.',
//       'We do not share client information with third parties without explicit written consent, except where required by law.',
//       'All StratRoot India personnel are bound by strict confidentiality obligations.',
//     ],
//   },
//   {
//     title: '4. Data Sharing',
//     body: [
//       'We do not sell, trade, or rent your personal information to third parties.',
//       'We may share anonymised, aggregated data for the purpose of industry research or marketing, but this data cannot be used to identify individual clients or website users.',
//       'We may engage third-party service providers (such as email services and website analytics tools) who process data on our behalf. These providers are bound by data processing agreements and may only use your data as instructed by us.',
//     ],
//   },
//   {
//     title: '5. Data Security',
//     body: [
//       'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.',
//       'Despite these measures, no data transmission over the internet or storage system can be guaranteed as 100% secure. If you have reason to believe your interaction with us is no longer secure, please contact us immediately.',
//     ],
//   },
//   {
//     title: '6. Cookies',
//     body: [
//       'Our website uses cookies to improve your browsing experience and to analyse website traffic.',
//       'Essential cookies: Required for the website to function properly.',
//       'Analytics cookies: Used to understand how visitors interact with the website (e.g., Google Analytics).',
//       'You can control cookie settings through your browser. Please note that disabling certain cookies may affect the functionality of our website.',
//     ],
//   },
//   {
//     title: '7. Your Rights',
//     body: [
//       'Subject to applicable law, you have the following rights regarding your personal data:',
//       'The right to access the personal data we hold about you.',
//       'The right to request correction of inaccurate data.',
//       'The right to request deletion of your personal data (subject to legal and contractual obligations).',
//       'The right to withdraw any consent you have given for us to use your information.',
//       `To exercise any of these rights, please contact us at ${CONTACT_EMAIL}.`,
//     ],
//   },
//   {
//     title: '8. Retention',
//     body: [
//       'We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.',
//       'Enquiry data is typically retained for 3 years.',
//       'Client engagement data is retained for 7 years in line with Indian regulatory requirements.',
//     ],
//   },
//   {
//     title: '9. Changes to This Policy',
//     body: [
//       'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated effective date.',
//       'We encourage you to review this policy periodically.',
//     ],
//   },
//   {
//     title: '10. Contact Us',
//     body: [
//       'If you have any questions about this Privacy Policy or how we handle your personal data, please contact:',
//       LEGAL_NAME,
//       'Nagpur, Maharashtra, India',
//       `Email: ${CONTACT_EMAIL}`,
//     ],
//   },
// ]

// export default function Privacy() {
//   return (
//     <div>
//       <Seo {...SEO.privacy} />
//       <div className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: '#102A43' }}>
//         <div className="max-w-4xl mx-auto px-6 lg:px-8">
//           <h1
//             className="font-display text-4xl lg:text-5xl font-semibold text-white"
//             style={{ lineHeight: 1.1 }}
//           >
//             Privacy Policy
//           </h1>
//           <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
//             Effective Date: {EFFECTIVE_DATE} · {LEGAL_NAME}
//           </p>
//         </div>
//       </div>

//       <section className="py-16 lg:py-24" style={{ background: '#F8FAFC' }}>
//         <div className="max-w-4xl mx-auto px-6 lg:px-8">
//           <div className="mb-10 p-6 border border-[#E2E8F0] rounded-lg bg-white">
//             <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
//               {LEGAL_NAME} ("StratRoot", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully. If you disagree with the terms, please discontinue use of our website.
//             </p>
//           </div>

//           <div className="space-y-10">
//             {SECTIONS.map((section) => (
//               <div key={section.title}>
//                 <h2
//                   className="font-display text-xl font-semibold mb-4"
//                   style={{ color: '#111827' }}
//                 >
//                   {section.title}
//                 </h2>
//                 <div className="space-y-3">
//                   {section.body.map((para, i) => (
//                     <p key={i} className="text-sm leading-relaxed" style={{ color: '#374151' }}>
//                       {para}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 pt-10 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <p className="text-xs" style={{ color: '#6B7280' }}>
//               © {new Date().getFullYear()} {LEGAL_NAME}
//             </p>
//             <Link
//               to="/"
//               className="text-xs font-medium"
//               style={{ color: '#B7791F' }}
//             >
//               ← Return to Homepage
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }





import { Link } from 'react-router'
import Seo from '../components/Seo'
import { SEO } from '../seo'
import { LEGAL_NAME, LOCATION, CONTACT_EMAIL, WEBSITE, EFFECTIVE_DATE } from '../legal'

// Revised to describe only what applies to the live website:
// a static marketing site, hosted on Netlify, with Contact/Consultation enquiry forms that
// submit to a Google Apps Script endpoint. No analytics/advertising/marketing tracking is described
// because none is approved. If any is added later, this policy AND a consent mechanism must be updated first.
//
// Items marked VERIFY must be confirmed against the deployed system before publication.

const SECTIONS = [
  {
    id: 'who-we-are',
    title: '1. Who We Are',
    body: [
      `${WEBSITE} is operated by ${LEGAL_NAME}, a business consultancy based in ${LOCATION}. In this policy, "StratRoot", "we", "our" and "us" mean ${LEGAL_NAME}.`,
      'This policy explains what personal information we collect through this website, why we collect it, who handles it on our behalf, how long we keep it, and how you can ask us to give you access to it, correct it or delete it.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    body: [
      'We collect information only when you choose to send it to us through the Contact form, the Consultation form or by email. The forms ask for:',
      {
        list: [
          'Your name, designation and company or organisation name.',
          'Your business email address and phone or WhatsApp number.',
          'Your company website, if you provide it.',
          'Your industry, the service you are interested in and your target market or geography.',
          'A description of your business requirement, and any scheduling preference you give on the Consultation form.',
          'Your consent to our use of this information, and the date and time of your submission.', // VERIFY: consent + timestamp recording must be live (brief item 7)
        ],
      },
      'We also keep any emails you send to us and our replies.',
      'Please do not put sensitive personal information, government identity numbers, bank or card details, passwords or confidential trade secrets in a form or first email. If we work together, information of that kind can be shared later under a written engagement or confidentiality agreement.',
      'We do not require you to create an account, and we do not take payments through this website.',
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    body: [
      'We use enquiry information only to:',
      {
        list: [
          'Read and assess your enquiry and decide whether StratRoot is a suitable consulting partner for your requirement.',
          'Reply to you, ask follow-up questions and arrange a first conversation or consultation.',
          'Keep a record of the enquiry and our correspondence so that we can follow up properly.',
          'Send you an acknowledgement of your enquiry, where the form says we will.', // VERIFY: acknowledgement email is actually sent
          'Protect the website and forms against spam and misuse, and meet our legal obligations.',
        ],
      },
      'We do not use enquiry information for advertising, and we do not sell, rent or trade personal information.',
      'If you later become a client, the handling of information for that assignment is governed by the written engagement terms agreed with you, alongside this policy.',
    ],
  },
  {
    id: 'consent',
    title: '4. Your Consent',
    body: [
      'You confirm your consent to our use of your enquiry information for the purposes above by ticking the consent box on the form before you submit it. You can withdraw that consent at any time by writing to us using the details in Section 9. Withdrawing consent does not affect our use of your information before you withdrew it, and we may still need to keep limited records where the law requires.',
    ],
  },
  {
    id: 'service-providers',
    title: '5. Service Providers That Handle Your Information',
    body: [
      'We use a small number of service providers to run the website and process enquiries. They handle information only to provide these services to us:',
      {
        list: [
          'Netlify, which hosts the website. Like most hosting providers, it may process technical connection data such as your IP address, browser type and the pages requested, in server or network logs, in order to deliver and secure the website.', // VERIFY: hosting provider is Netlify
          'Google, through Google Apps Script and its email services, which receive the details you submit through the enquiry forms, record them for us and deliver email notifications to us and, where applicable, an acknowledgement to you.', // VERIFY: exact Google services used (Apps Script, Gmail, Sheets)
        ],
      },
      'These providers may store or process data on servers outside India. We do not share your enquiry information with any other third party unless you ask us to, or the law requires it, for example in response to a lawful request from a court or government authority.',
    ],
  },
  {
    id: 'storage-retention-deletion',
    title: '6. Storage, Retention and Deletion',
    body: [
      'Enquiry details are stored in our business email account and in the records that our enquiry system keeps for follow-up. Access is limited to the people at StratRoot who need it to respond to you.',
      'We keep enquiry information only for as long as we need it to respond to you, follow up and maintain a reasonable business record, or for as long as the law requires. If an enquiry does not lead to an engagement, we delete or anonymise it once it is no longer needed for those purposes.', // VERIFY: management to approve a fixed period (the earlier draft's "3 years" and "7 years" were unverified and have been removed)
      'You can ask us to delete your information at any time (see Section 8). We will delete it unless we must keep it for a legal, tax or dispute-related reason, in which case we will tell you and restrict it to that purpose.',
      'We use reasonable technical and organisational safeguards, including access controls and the security features of our providers. No method of transmission or storage over the internet is completely secure, so we cannot guarantee absolute security. If you think your interaction with us is no longer secure, please contact us immediately.',
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies and Similar Technologies',
    body: [
      'This website does not use analytics, advertising or marketing cookies, and it does not use tracking tools such as Google Analytics, Google Tag Manager, Meta Pixel or Hotjar.', // VERIFY: confirm nothing of this kind is in the deployed build before publishing this sentence
      'The website does not need you to accept cookies in order to work, and we do not set cookies to identify or profile you. Your browser and our hosting provider may still process basic technical data needed to deliver pages to you, as described in Section 5.',
      'If we decide to introduce analytics or any other non-essential tracking in future, we will first update this policy and ask for your consent through the website before it is switched on.',
    ],
  },
  {
    id: 'your-rights',
    title: '8. Access, Correction and Deletion Requests',
    body: [
      'You may ask us to:',
      {
        list: [
          'Confirm what personal information we hold about you and give you a copy.',
          'Correct information that is inaccurate or incomplete.',
          'Delete your personal information.',
          'Stop using your information on the basis of consent you have given.',
        ],
      },
      `To make a request, email ${CONTACT_EMAIL} with the subject line "Privacy request". Please write from the email address you used in the enquiry, or give us enough detail to find it (for example your name, company and the approximate date of the enquiry). We may ask you to confirm your identity before we act, to protect your information from being disclosed to someone else.`,
      'We will respond within a reasonable time and in line with applicable Indian law. If you are not satisfied with our response, you can write to us again with the subject line "Privacy grievance" and we will review it.',
    ],
  },
  {
    id: 'contact',
    title: '9. Contact Us for Privacy Matters',
    body: [
      'For questions about this policy or how your information is handled, or to make a request under Section 8:',
      LEGAL_NAME,
      LOCATION,
      { mail: CONTACT_EMAIL },
    ],
  },
  {
    id: 'other',
    title: '10. Links, Children and Changes to This Policy',
    body: [
      'Our website may link to third-party websites. We are not responsible for their content or privacy practices, so please read their policies separately.',
      'This website is meant for business users and is not directed at children. We do not knowingly collect personal information from anyone under 18.',
      'We may update this policy from time to time. The effective date at the top of this page will show when it was last changed, and material changes will be published on this page.',
      'Your use of this website is also subject to our Terms of Use.',
    ],
  },
]

export default function Privacy() {
  return (
    <div>
      <Seo {...SEO.privacy} />
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: '#102A43' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1
            className="font-display text-4xl lg:text-5xl font-semibold text-white"
            style={{ lineHeight: 1.1 }}
          >
            Privacy Policy
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
              {LEGAL_NAME} ("StratRoot", "we", "our" or "us") respects your privacy. This policy explains
              what information we collect when you use this website or send us an enquiry, how we use and
              protect it, and the choices you have. Please read it together with our{' '}
              <Link to="/terms-of-use" className="underline underline-offset-2" style={{ color: '#B7791F' }}>
                Terms of Use
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
                    if ('mail' in item) {
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
              <Link to="/terms-of-use" className="text-xs font-medium" style={{ color: '#B7791F' }}>
                Terms of Use
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