import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '../App.vue'

describe('App', () => {
  it('renders the success message', () => {
    const wrapper = mount(App)

    expect(wrapper.get('h1').text()).toBe('You did it!')
    expect(wrapper.text()).toContain('documentation')
  })

  it('links to the Vue documentation with the correct attributes', () => {
    const wrapper = mount(App)
    const docsLink = wrapper.get('a')

    expect(docsLink.attributes('href')).toBe('https://vuejs.org/')
    expect(docsLink.attributes('target')).toBe('_blank')
    expect(docsLink.attributes('rel')).toBe('noopener')
  })
})
