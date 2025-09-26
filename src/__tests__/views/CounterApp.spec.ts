import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { nextTick } from 'vue'
import CounterApp from '@/views/CounterApp.vue'

describe('CounterApp.vue', () => {
  const mountWithPinia = () =>
    mount(CounterApp, {
      global: {
        plugins: [createPinia()],
      },
    })

  it('renders initial count and doubleCount', () => {
    const wrapper = mountWithPinia()
    expect(wrapper.text()).toContain('counter num: 0')
    expect(wrapper.text()).toContain('counter double num: 0')
  })

  it('increments count and updates doubleCount on click', async () => {
    const wrapper = mountWithPinia()
    const btn = wrapper.get('button')
    await btn.trigger('click')
    await nextTick()

    expect(wrapper.text()).toContain('counter num: 1')
    expect(wrapper.text()).toContain('counter double num: 2')
  })
})

