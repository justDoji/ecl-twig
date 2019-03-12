import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

describe('EC - File', () => {
  const template = path.resolve(__dirname, './file.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('With translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithTranslation)).resolves.toMatchSnapshot();
    });
  });

  describe('Without translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithoutTranslation)).resolves.toMatchSnapshot();
    });
  });
});
