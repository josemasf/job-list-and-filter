import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Card from '@/components'

let vuetify  

describe('Card.vue', () => {

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  /*it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Card, {
      propsData: { msg }
    })
    expect(wrapper.text()).toContain(msg)
  })*/

  it('renders ', () => {
    const wrapper = shallowMount(Card)
    expect(wrapper.exists()).toBe(true)
  })
})
