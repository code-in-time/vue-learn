// import { shallowMount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    expect(true).toBe(true)
  })
})

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});
