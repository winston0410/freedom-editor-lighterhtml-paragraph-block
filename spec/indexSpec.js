import { Paragraph } from '../src/index.js'

describe('Test block essential functionalities', () => {
  const paragraphBlock = new Paragraph()

  const i18n = {
    locale: 'en-US',
    rtl: 'auto'
  }

  it('should return an node without data with render()', () => {
    expect(paragraphBlock.render(i18n)).toHaveClass('freedom-editor-blocks')
  })

  /* it('should return an node with data with render()', () => {

  })

  it('should save content of a node with save()', () => {

  }) */
})
