import { merge } from 'ramda';
import t from './_typography';
import * as c from '../config';

export default {
  title1: merge(
    t.t1,
    {
      margin: [0, 10],
      alignment: 'center',
      color: c.dark,
      font: 'Nexa',
      bold: true,
    }
  ),
  title2: merge(
    t.t2,
    {
      font: 'Nexa',
      bold: true,
      color: c.dark,
    }
  ),
  title3: merge(
    t.t3,
    {
      font: 'Nexa',
      bold: true,
      color: c.dark,
    }
  ),
  subtitle1: merge(
    t.t2,
    {
      font: 'Nexa',
      color: c.dark,
    }
  ),
  subtitle2: merge(
    t.t3,
    {
      font: 'Nexa',
      color: c.dark,
    }
  ),
  subtitle3: merge(
    t.s1,
    {
      font: 'Nexa',
      color: c.dark,
    }
  )
};
