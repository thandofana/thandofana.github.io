import { useEffect, useState } from 'react'

export function parseHashRoute(hash = '') {
  const path = hash.startsWith('#') ? hash.slice(1) : hash
  const projectMatch = path.match(/^\/project\/([^/]+)\/?$/)

  if (projectMatch) {
    try {
      return { type: 'project', slug: decodeURIComponent(projectMatch[1]) }
    } catch {
      return { type: 'not-found' }
    }
  }

  if (path.startsWith('/')) {
    return path === '/' || path === '' ? { type: 'gallery' } : { type: 'not-found' }
  }

  return { type: 'gallery' }
}

function getCurrentRoute() {
  if (typeof window === 'undefined') return { type: 'gallery' }
  return parseHashRoute(window.location.hash)
}

function useHashRoute() {
  const [route, setRoute] = useState(getCurrentRoute)

  useEffect(() => {
    const updateRoute = () => setRoute(getCurrentRoute())

    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  return route
}

export default useHashRoute
