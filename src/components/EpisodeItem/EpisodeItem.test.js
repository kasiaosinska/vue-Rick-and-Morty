import { shallowMount } from '@vue/test-utils';

import EpisodeItem from './EpisodeItem.vue';


describe('EpisodeItem', () => {
  const setup = (episode = '') => {
    const wrapper = shallowMount(EpisodeItem, {
      propsData: {
        episode,
        name: 'Season 2',
      },
      slots: {
        default: '<div class="hello">hello</div>',
      },
    });

    return wrapper;
  };

  it('renders correct transformed episode number', () => {
    const wrapper = setup('s01e02');
    expect(wrapper.find('.episode-item__num').text()).toBe('Episode 2');
  });

  it('renders episode name', () => {
    const wrapper = setup();
    expect(wrapper.find('.episode-item__name').text()).toBe('Season 2');
  })

  it('renders correct transformed season number', () => {
    const wrapper = setup('s01e02');
    expect(wrapper.find('.episode-item__season-badge').text()).toBe('Season 1');
  });

  it('renders slot correctly', () => {
    const wrapper = setup();
    expect(wrapper.find('.hello').exists()).toBe(true);
  });

  it('renders correct transformed season number', () => {
    const wrapper = setup('s120e02');
    expect(wrapper.find('.episode-item__season-badge').text()).toBe('Season 120');
  });
});
