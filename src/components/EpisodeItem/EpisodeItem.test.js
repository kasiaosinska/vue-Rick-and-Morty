import { shallowMount } from '@vue/test-utils';

import EpisodeItem from './EpisodeItem.vue';

describe('EpisodeItem', () => {
  const setup = (isData = true) => {
    const wrapper = shallowMount(EpisodeItem, {
      propsData: {
        episode: {
          episode: 's01e02',
          name: "Pilot",
          air_date: "December 2, 2013",
        },
        withExtraData: isData,
      },
    });

    return wrapper;
  };

  it('renders correct transformed episode number', () => {
    const wrapper = setup();
    expect(wrapper.find('.episode-item__num').text()).toBe('Episode 2');
  });

  it('renders episode name', () => {
    const wrapper = setup();
    expect(wrapper.find('.episode-item__name').text()).toBe('Pilot');
  })

  it('renders correct transformed season number', () => {
    const wrapper = setup();
    expect(wrapper.find('.episode-item__season-badge').text()).toBe('Season 1');
  });

  it('renders correct air date', () => {
    const wrapper = setup();
    expect(wrapper.find('.episode-info__value').text()).toBe('December 2, 2013');
  });

  it('renders air date', () => {
    const wrapper = setup(false);
    expect(wrapper.find('.episode-info__value').exists()).toBe(false);
  });
});
