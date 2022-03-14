import { shallowMount } from '@vue/test-utils'
import UserPage from '@/components/UserPage.vue'

describe('UserPage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(UserPage, {
      mocks: {
        $fetchState: { pending: false, error: true },
      },
    })
  })

  test('mounts', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('loading is shown', () => {
    expect(wrapper.find('.lds-dual-ring').exists).toBeTruthy()
  })

  test('error is shown', () => {
    expect(wrapper.find('h1').text()).toContain('Sorry we couldn')
  })
})
