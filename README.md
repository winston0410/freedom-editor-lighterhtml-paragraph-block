# Freedom Editor Lighterhtml Paragraph block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-lighterhtml-paragraph-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-lighterhtml-paragraph-block?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/f74e08b360f3796017b7/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-lighterhtml-paragraph-block/maintainability) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/504ad0b45a2347c89bae8ec7251fad8c)](https://www.codacy.com/manual/winston0410/freedom-editor-lighterhtml-paragraph-block?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-lighterhtml-paragraph-block&utm_campaign=Badge_Grade)

A paragraph block built with [Lighterhtml](https://github.com/WebReflection/lighterhtml) for Freedom Editor

## Installation

```
npm i @freedom-editor/lighterhtml-paragraph-block
```

## Usage

Remember to create a new instance and register it when you create a new instance of Freedom Editor.

```
import FreedomEditor from '../core.esm.js'

import {
  Paragraph
} from './paragraph.esm.js'

//Create new instance for paragraph block
const paragraphBlock = new Paragraph()

const editor = new FreedomEditor({
  containerId: 'freedom-editor',
  defaultBlock: paragraphBlock,
  //Register it in this editor instance
  registeredBlocks: {
    paragraphBlock: paragraphBlock
  },
  blockTemplate: [
    paragraphBlock
  ],
  i18n: {
    rtl: 'ltr'
  }
})

editor.init([
  new FreedomEditorKeyBindings({
    editor: editor
  }).init
])

editor.loadBlocks()
```

## API Reference

TODO
