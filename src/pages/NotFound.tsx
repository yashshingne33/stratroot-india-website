import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: '#111827' }}
    >
      <p
        className="font-display text-9xl font-semibold mb-4"
        style={{ color: '#1F2937', fontSize: '180px', lineHeight: 1 }}
      >
        404
      </p>
      <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#B7791F' }}>
        Page Not Found
      </p>
      <h1 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4" style={{ lineHeight: 1.2 }}>
        This page doesn't exist.
      </h1>
      <p className="text-base mb-10 max-w-md" style={{ color: '#9CA3AF' }}>
        The page you're looking for may have moved, been removed, or never existed. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded"
          style={{ background: '#B7791F' }}
        >
          Go to Homepage <ArrowRight size={15} />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium border rounded"
          style={{ borderColor: '#374151', color: '#D1D5DB' }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
