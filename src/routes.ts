import { createBrowserRouter } from 'react-router'
import Root from './components/Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Industries from './pages/Industries'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Insights from './pages/Insights'
import ArticleDetail from './pages/ArticleDetail'
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
      { path: 'industries', Component: Industries },
      { path: 'case-studies', Component: CaseStudies },
      { path: 'case-studies/:slug', Component: CaseStudyDetail },
      { path: 'insights', Component: Insights },
      { path: 'insights/:slug', Component: ArticleDetail },
      { path: 'contact', Component: Contact },
      { path: 'consultation', Component: Consultation },
      { path: 'privacy', Component: Privacy },
      { path: '*', Component: NotFound },
    ],
  },
])
