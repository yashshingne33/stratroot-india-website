// Page titles, descriptions and paths from the audit document ("Page setup" tables).
// Usage in a page: <Seo {...SEO.about} />
export const SEO = {
  home: {
    title: 'Growth and Export Consulting India | StratRoot',
    description:
      'StratRoot helps Indian manufacturers, exporters, FPOs and emerging businesses develop markets, build sales channels and execute growth plans.',
    path: '/',
  },
  about: {
    title: 'About StratRoot India | Growth and Execution Consulting',
    description:
      'Learn how StratRoot works with Indian businesses on export development, sales, commercial strategy, operations and structured execution.',
    path: '/about',
  },
  services: {
    title: 'Business Consulting Services | StratRoot India',
    description:
      'Explore StratRoot services in export consulting, sales development, business strategy, operations, execution systems and commercial communication.',
    path: '/services',
  },
  exportConsulting: {
    title: 'Export Consulting India | Market and Buyer Development',
    description:
      'Export consulting for Indian manufacturers, FPOs and traders covering readiness, market selection, buyer profiling, outreach and enquiry support.',
    path: '/export-consulting',
  },
  industries: {
    title: 'Industries We Serve | StratRoot India',
    description:
      'StratRoot supports agriculture, food processing, manufacturing, exporters, consumer businesses, infrastructure suppliers and specialised sectors.',
    path: '/industries',
  },
  contact: {
    title: 'Contact StratRoot India | Discuss Your Business Requirement',
    description:
      'Contact StratRoot India to discuss export consulting, sales development, business strategy, operations or commercial communication requirements.',
    path: '/contact',
  },

  // Privacy path comes from the Remaining Changes doc (canonical /privacy).
  // Its title and description are not in either document. Written by us, so change freely.
  privacy: {
    title: 'Privacy Policy | StratRoot India',
    description:
      'How StratRoot India collects, uses and protects the information you share through this website.',
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Use | StratRoot India',
    description: 'Terms governing the use of the StratRoot India website, including enquiries, acceptable use, intellectual property and limitations.',
    canonical: 'https://stratroot.com/terms-of-use',
  },
  consultation: {
    title: 'Discuss Your Requirement | StratRoot India',
    description:
      'Share your business requirement with StratRoot India and arrange a structured first conversation about export, sales, strategy or operations.',
    path: '/consultation',
  },
  notFound: {
    title: 'Page Not Found | StratRoot India',
    description: 'The page you are looking for does not exist. Return to the StratRoot India homepage.',
    noindex: true,
  },
}