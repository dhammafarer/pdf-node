import { splitEvery } from 'ramda';
import { center } from '../helpers';

const badges = (n, s, g, p, xs) => {
  const ys = splitEvery(n, xs);
  return center(
    {
      width: 'auto',
      stack: ys.map((rows, i) => {
        return {
          columnGap: g,
          columns: rows.map(y => {
            return {
              alignment: 'center',
              margin: [ 0, 40 - (s+g)*ys.length + i*(s+g) ],
              stack: [
                //box
                {
                  canvas: [
                    {type: 'rect', x:0, y:0, w:s, h:s, r: 4, lineWidth: 2, lineColor: 'white', color: y.color}
                  ]
                },
                //box content
                {
                  margin: [0, p-s],
                  stack: [
                    { image: y.icon, width: s-p*4 },
                    { margin: [0, p/2], width: s, text: y.text, color: 'white' }
                  ]
                }
              ]
            }
          })
        };
      })
    })
};

export default badges;
