import { shallowMount } from '@vue/test-utils'
import IndexPage from '@/components/IndexPage.vue'

describe('IndexPage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(IndexPage, {
      mocks: {
        data: {
          ghUser: 'userName',
        },
      },
    })
  })

  test('mounts', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('submitForm', () => {
    wrapper.vm.submitUsername = jest.fn()

    const form = wrapper.find('form')

    form.trigger('submit')

    expect(wrapper.vm.submitUsername).toHaveBeenCalled()
  })
})
