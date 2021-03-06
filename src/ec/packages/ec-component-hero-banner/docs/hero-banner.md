# ECL Twig - EC Hero Banner

npm package: `@ecl-twig/ec-component-hero-banner`

```shell
npm install --save @ecl-twig/ec-component-hero-banner
```

## Hero Banner

### Parameters

- "type" (string) (default: 'default') Type of banner (can be 'default','image','image-shade','primary')
- "title" (string) (default: '') Title of banner
- "image" (string) (default: '') Image for banner (required for image banner type)
- "description" (string) (default: '') Description of banner
- "centered" (bool) (default: true) Define if banner should be centered
- "button" (associative array) (default: predefined structure) predefined structure for EC Button component
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the form
- "extra_attributes" (optional) (array) (default: []) Extra attributes for the form
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include 'path/to/site-header.html.twig' with {  
  title: 'EU Budget for the future',  
  description: 'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',  
  centered: true,  
  type: 'image',  
  image: 'url/path-to-image',  
  button: {  
    label: 'Subscribe',  
    icon: {  
      path: 'path-to-the-icon-file',  
    },  
  },  
} %}
```
