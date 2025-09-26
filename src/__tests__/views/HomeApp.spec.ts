import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeApp from '@/views/HomeApp.vue'

describe('HomeApp.vue', () => {
  it('renders home page text', () => {
    const wrapper = mount(HomeApp)
    expect(wrapper.text()).toContain('home page')
  })
})

