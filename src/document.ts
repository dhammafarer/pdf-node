import pdfmake from 'pdfmake';
import styles from '../styles';
import * as c from '../config';

import page1 from './page1';
import page2 from './page2';
import footer from './footer';

const docDefinition = {
  defaultStyle: {
    font: 'Raleway',
  },
  pageOrientation: 'portrait',
  pageSize: 'A4',
  pageMargins: [40,40,40,60],
  content: [
    page1,
    page2
  ],
  styles,
  footer,
};

export default docDefinition;
