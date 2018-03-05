import * as c from '../config';
import { merge, splitEvery } from 'ramda';

export default (n, xs, styles) => {
  const {w,h,p,g,tc,bc,sc,pc,sw} = merge(
    {w:100,h:100,p:[10,20],g:10,pc:c.dark,tc:c.primary,sc:c.tertiary,bc:'#eee',sw:40},
    styles
  );
  const ys = splitEvery(n, xs);
  return {
    stack: ys.map((rows, i) => {
      return {
        columnGap: g,
        columns: rows.map(y => {
          return {
            width: w,
            margin: [0, i*(h+g),0,0],
            stack: [
              //box
              {
                canvas: [
                  {type: 'rect', x:0, y:0, w, h, r: 4, color: bc, lineColor: 'lightgray', lineWidth: 0.2}
                ]
              },
              {
                margin: [p[0],p[1]-h],
                stack: [
                  { alignment: 'center', color: tc, text: y.title.toUpperCase(), bold: true },
                  {
                    margin: [0,p[1]/2],
                    alignment: 'center',
                    canvas: [
                      {type:'rect',x:0,y:0,w:sw,h:1,color:sc}
                    ]
                  },
                  { alignment: 'center', color: pc, text: y.text },
                ]
              }
            ]
          }
        })
      };
    })
  }
};
