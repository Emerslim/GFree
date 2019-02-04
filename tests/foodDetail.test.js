import { shallowMount } from '@vue/test-utils';
import FoodDetail from '../src/app/components/foodDetail.vue';
import Vue from 'vue';
import MockConfig from './mocks/configHelper.mock';
//TODO: more mocks

const factory = (values = {}) => {
  return shallowMount(FoodDetail, {
    data() {
        return {
            loading: values.loading || true,
            error: values.error || null,
            food: values.food || null,
            glutens: values.glutens || [],
            contaminates: values.contaminates || []
        }
     },
    props: { foodId: '45258948' },
    mocks: { 
      $configHelper: MockConfig,
      //TODO: Jest can mock async function calls
      getFood: new Promise(foodId => {})
    }
  })
}

describe('FoodDetail', () => {
  it('renders a loading message', () => {
    const wrapper = factory();

    expect(wrapper.find('p').text()).toEqual("Loading...");
  })

  it('renders an error when service call returns an error', () => {
    const wrapper = factory({ 
        loading: false,
        error: 'error'
    });
    expect(wrapper.find('.result-bad').exists()).toBeTruthy();
  })

  // TODO: More tests, including happy path
})