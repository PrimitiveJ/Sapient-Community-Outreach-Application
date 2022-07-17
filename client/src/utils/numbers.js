
export const isANumber = num => typeof num === 'number' && !isNaN(num);
export const getIfNumber = num => isANumber(num) && num;
