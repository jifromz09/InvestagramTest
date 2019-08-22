import {divide, split, round} from 'lodash';
export const movieLength = time => {
  let hrs = divide(time, 60);
  let result = split(hrs.toString(), '.');
  let min = time % 60;
  return {
    hr: {
      label: result[0] == 1 ? 'hr' : 'hrs',
      value: result[0],
    },
    min: {
      label: result[1] == 1 ? 'min' : 'mins',
      value: min
    },
  };
};
