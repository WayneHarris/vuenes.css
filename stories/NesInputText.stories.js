/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import NesInputText from '../src/components/NesInputText.vue'

const inputStory = storiesOf('NesInputText', module)

inputStory.add('Common', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))

inputStory.add('With Init Value', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" init-value="This is an init value" />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))

inputStory.add('With placeholder', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" placeholder="Your name goes here!" />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))

inputStory.add('Inline', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" placeholder="Your name goes here!" inline />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))

inputStory.add('Success', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" success inline />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))

inputStory.add('Warning', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" warning inline />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))

inputStory.add('Error', () => ({
  components: { NesInputText },
  template: '<NesInputText @input="input" id="name_value" label="Your Name" error inline />',
  methods: {
    input: action('Input New Value Emitted')
  }
}))
