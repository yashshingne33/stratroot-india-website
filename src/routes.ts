// import { createBrowserRouter } from 'react-router'
// import Root from './components/Root'
// import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import ServiceDetail from './pages/ServiceDetail'
// import ExportConsulting from './pages/ExportConsulting'
// import Industries from './pages/Industries'
// import ArticleDetail from './pages/ArticleDetail'
// import Contact from './pages/Contact'
// import Consultation from './pages/Consultation'
// import Privacy from './pages/Privacy'
// import NotFound from './pages/NotFound'

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     Component: Root,
//     children: [
//       { index: true, Component: Home },
//       { path: 'about', Component: About },
//       { path: 'services', Component: Services },
//       { path: 'services/:slug', Component: ServiceDetail },
//       { path: 'export-consulting', Component: ExportConsulting },
//       { path: 'industries', Component: Industries },
//       { path: 'contact', Component: Contact },
//       { path: 'consultation', Component: Consultation },
//       { path: 'privacy', Component: Privacy },
//       { path: '*', Component: NotFound },
//     ],
//   },
// ])





import { createBrowserRouter, redirect } from 'react-router'
import Root from './components/Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ExportConsulting from './pages/ExportConsulting'
import Industries from './pages/Industries'
// Insights is hidden until its content is ready. Re-enable together with the nav/footer links:
// import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import Privacy from './pages/Privacy'
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

      // Canonical privacy URL (linked from the footer and the contact form consent text).
      { path: 'privacy-policy', Component: Privacy },
      // Old paths. These only cover in-app navigation; the real 301s go in Netlify later.
      { path: 'privacy', loader: () => redirect('/privacy-policy') },
      { path: 'legal', loader: () => redirect('/privacy-policy') },

      { path: '*', Component: NotFound },
    ],
  },
])