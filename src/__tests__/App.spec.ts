import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import App from '@/App.vue'

// 创建一个简单的测试路由
const routes = [
  {
    path: '/',
    component: {
      template: '<div>Home Page</div>',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('App.vue', () => {
  it('renders router-view and displays routed component', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    // 路由必须先初始化
    await router.isReady()

    expect(wrapper.html()).toContain('Home Page')
  })
})
