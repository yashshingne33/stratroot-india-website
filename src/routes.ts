import { createBrowserRouter, redirect } from 'react-router'
import Root from './components/Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ExportConsulting from './pages/ExportConsulting'
import Industries from './pages/Industries'
// Insights stays hidden until approved articles exist. Re-enable together with the nav/footer links:
// import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'services/:slug', Component: ServiceDetail },
      { path: 'export-consulting', Component: ExportConsulting },
      { path: 'industries', Component: Industries },
      { path: 'contact', Component: Contact },
      { path: 'consultation', Component: Consultation },

      // Consultation now lives on the Contact page. This covers in-app navigation only;
      // the real 301 goes in the Netlify redirects.
      { path: 'consultation', loader: () => redirect('/contact') },

      // Privacy stays at /privacy (canonical URL in the Remaining Changes doc).
      { path: 'privacy', Component: Privacy },
      { path: 'terms-of-use', Component: Terms },
      { path: 'legal', loader: () => redirect('/privacy') },

      // Do not add an /insights redirect: the doc says it must show a real 404 until content exists.
      { path: '*', Component: NotFound },
    ],
  },
])