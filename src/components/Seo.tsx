import { useEffect } from 'react'

const SITE_URL = 'https://stratroot.com'
const SITE_NAME = 'StratRoot India'

type SeoProps = {
  title: string
  description: string
  /** Path of this page, e.g. '/about'. Omit on pages that must not be indexed (404). */
  path?: string
  /** Social sharing image (1200x630). Absolute URL or a path starting with '/'. */
  image?: string
  /** Adds robots noindex and removes the canonical tag. */
  noindex?: boolean
}

// Updates the existing tag if there is one (index.html ships defaults), otherwise creates it.
// Passing null removes the tag, so nothing from the previous page is left behind.
function setMeta(attr: 'name' | 'property', key: string, content: string | null) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (content === null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (href === null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, path, image, noindex = false }: SeoProps) {
  useEffect(() => {
    const url = !noindex && path !== undefined ? SITE_URL + path : null
    const imageUrl = image ? (image.startsWith('/') ? SITE_URL + image : image) : null

    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, follow' : null)
    setCanonical(url)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)

    setMeta('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)
  }, [title, description, path, image, noindex])

  return null
}