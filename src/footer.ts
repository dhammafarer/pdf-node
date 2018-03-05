import * as c from '../config';

export default (currentPage) => {
  return (currentPage == 1 ? {} :
    [
      {
        canvas: [
          {
            type: 'rect', x: 0, y: 0, w: 600, h: 60,
            color: c.quartenary
          },
        ],
      },
      {text: 'something in the footer', relativePosition: {x: 40, y: -40}, color: 'white'}
    ]
  );
};
