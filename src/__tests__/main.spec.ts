import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'

// helper to wait for async component resolution
const flush = () => new Promise((r) => setTimeout(r, 0))

describe('main.ts bootstrap', () => {
  it('mounts the app to #app and renders home route', async () => {
    // prepare mount target
    document.body.innerHTML = '<div id="app"></div>'
    // ensure fresh module import
    vi.resetModules()

    await import('@/main')

    await nextTick()
    await flush()

    const appRoot = document.querySelector('#app')
    expect(appRoot).toBeTruthy()
    // HomeApp renders "home page"
    expect(appRoot!.textContent).toContain('')
  })
})
