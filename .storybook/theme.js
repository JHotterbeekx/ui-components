import { create } from '@storybook/theming';
import logo from '../public/logo.png';

export default create({
  base: 'dark',
  brandTitle: 'JHotterbeekx Storybook',
  brandUrl: 'https://storybook.hotterbeekx.nl',
  brandImage: `/${logo}`,
  brandTarget: '_self',
  appContentBg: 'white',
});