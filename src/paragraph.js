import {
  render,
  html,
  svg
} from 'lighterhtml'

class Paragraph {
  constructor (customOptions) {
    const defaultOptions = {
      i18n: {
        locale: 'en-US',
        rtl: 'ltr',
        translations: {

        }
      },
      controllers: [

      ]
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  render (i18n, savedData) {
    const textDirection = (i18n.rtl !== undefined) ? i18n.rtl : this.options.i18n.rtl

    return html.node`<div class="blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
    <p contenteditable dir="${textDirection}">${savedData}</p>
    </div>`
  }

  save (block) {
    const editableField = block.querySelector('p')
    if (editableField.textContent === '') {
      return
    }
    // Cannot pass type: this.constructor.name, or else the type of the block will be minifyed
    return {
      type: 'paragraph',
      data: {
        text: editableField.textContent
      }
    }
  }
};

export {
  Paragraph
}
