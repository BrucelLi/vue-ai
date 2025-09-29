import { describe, it, expect } from 'vitest'
import router from '@/router'
import type { Router } from 'vue-router'

describe('router/index', () => {
  it('exports a Vue Router instance', () => {
    expect(router).toBeDefined()
    expect(typeof router.push).toBe('function')
    expect(typeof router.getRoutes).toBe('function')
  })

  it('uses HTML5 history with correct base', () => {
    const history = (router as Router)['options']?.history
    expect(history).toBeDefined()
    expect(history.base).toBe('')
  })

  it('starts with no routes registered', () => {
    expect(router.getRoutes().length).toBe(2)
  })
})
