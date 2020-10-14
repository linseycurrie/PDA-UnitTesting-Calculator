import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  let wrapper;

  beforeEach( () => {
    wrapper = shallowMount(App)
  });

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  it('should add 1 and 4 returning 5', () => {
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5)
  });

  it('should subtract 4 from 7 returning 3', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('should multiply 3 by 5 returning 15', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  });

  it('should divide 21 by 7 returning 3', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('should concatenate multiple number button clicks', () => {
    wrapper.vm.numberClick(1);
    wrapper.vm.numberClick(0);
    expect(wrapper.vm.runningTotal).to.equal(10)
  })

  it('should chain multiple operations together', () => {
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('should clear running total without affectting the calculation', () => {
    wrapper.vm.numberClick(3);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(1);
    wrapper.vm.clearClick();
    expect(wrapper.vm.previousTotal).to.equal(3);
    expect(wrapper.vm.previousOperator).to.equal('+')
  });
  


})