import headingElm from '../../src/components/headingElm.vue'
import { shallowMount } from '@vue/test-utils'

describe('test if props exist', () => {
    it.only('should test the props "id", "name", "title"', () => {
        // expect(true).toBe(true);

        const wrapper = shallowMount(headingElm, {
            propsData: {
                id: 1,
                name: 'test',
                title: 'the title'
            }
        })



        expect(wrapper.element.innerHTML).toContain('1 test the title')
    })
})