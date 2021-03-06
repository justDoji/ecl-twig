# ECL Twig - EC Footer component

npm package: `@ecl-twig/ec-component-footer`

```shell
npm install --save @ecl-twig/ec-component-footer
```

## Parameters

- "back_to_top" (link object) (default: {})
- "identity" (object) (default: {}):
  - "title" (string) (default: '')
  - "follow" (object) (default: {}):
    - "label" (string) (defaul: '')
    - "links" (array of link objects) (default: [])
  - "info" (array of link objects) (default: [])
- "sections" (array) (default: []):
  - "title" (string) (default: '')
  - "links" (array of link objects) (default: [])
- "common" (array of link objects) (default: [])
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/footer.html.twig' with { 
  back_to_top: { 
    link: { 
      label: 'Go to top', 
      path: '#top', 
    }, 
    icon: { 
      path: defaultSprite, 
      size: 'fluid', 
    }, 
  }, 
  identity: { 
    title: 'Site identification', 
    follow: { 
      label: 'Follow us:', 
      links: [ 
        { 
          link: { 
            label: 'Facebook', 
            path: '/example', 
            icon_position: 'before', 
          }, 
          icon: { 
            path: defaultSprite, 
            type: 'branded', 
            name: 'facebook', 
          }, 
        }, 
        ... 
      ] 
    }, 
    info: [ 
      { 
        link: { 
          label: 'Contact', 
          path: '/example', 
        }, 
      }, 
      ... 
    ], 
  }, 
  sections: [ 
    { 
      title: 'European Commission', 
      links: [ 
        { 
          link: { 
            label: 'Commission and its priorities', 
            path: '/example', 
          }, 
        }, 
        ... 
      ], 
    }, 
    ... 
  ], 
  common: [ 
  { 
    link: { 
      label: "About the Commission's new web presence", 
      path: '/example', 
    }, 
  }, 
  ... 
  ] 
} %}
```
