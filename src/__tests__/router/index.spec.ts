import { describe, it, expect } from 'vitest'
import router from '@/router'

describe('router/index', () => {
  it('exports a Vue Router instance', () => {
    expect(router).toBeDefined()
    // basic sanity: router exposes core APIs
    expect(typeof router.push).toBe('function')
    expect(typeof router.getRoutes).toBe('function')
  })

  it('uses HTML5 history with correct base', () => {
    // Vue Router 4 exposes the history via router.options.history
    const history = (router as any).options?.history
    expect(history).toBeDefined()
    // base should match Vite BASE_URL (typically '/')
    expect(history.base).toBe('')
  })

  it('starts with no routes registered', () => {
    expect(router.getRoutes().length).toBe(0)
  })
})
