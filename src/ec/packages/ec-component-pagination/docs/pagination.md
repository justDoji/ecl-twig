# ECL Twig - EC Pagination component

npm package: `@ecl-twig/ec-component-pagination`

```shell
npm install --save @ecl-twig/ec-component-pagination
```

## Parameters

- "icon" (object) (default: {}): object of type Icon; file type
- "title" (string) (default: '')
- "language" (string) (default: '')
- "meta" (string) (default: '')
- "download" (object) (default: {}): object of type Link
- "translation" (array) (default: []):
  - "toggle" (object) (default: {}): object of type Button
  - "items" (array) (default: []):
    - "title" (string) (default: '')
    - "meta" (string) (default: '')
    - "lang" (string) (default: '')
  - "description (string) (default:'')
- "extra_classes" (optional) (string) (default: '')
- "extra_attributes" (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/pagination.html.twig' with { 
  title: 'State of the Union 2018 brochure', 
  language: 'English', 
  meta: '(16.2 MB - PDF)', 
  icon: { 
    type: 'general', 
    name: 'copy', 
    size: '2xl', 
    path: 'path/to/icons.svg', 
  }, 
  download: { 
    label: 'Download', 
    path: '/example', 
    icon: { 
      type: 'ui', 
      name: 'download', 
      size: 'fluid', 
      path: 'path/to/icons.svg', 
    }, 
  }, 
  translation: { 
    toggle: { 
      label: 'Other languages (3)', 
      icon: { 
        type: 'ui', 
        name: 'corner-arrow', 
        size: 'fluid', 
        transform: 'rotate-180', 
      }, 
    }, 
    description: 'Looking for another language which is not on the list? Find out why.', 
    items: [ 
      { 
        title: 'български', 
        meta: '(15.7 MB - PDF)', 
        lang: 'bg', 
      }, 
      ... 
    ], 
  }, 
} %}
```