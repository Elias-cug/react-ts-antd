import { HTMLProps } from 'react';

export function getDomSize (ele: any): { width: number; height: number } {
  let strWidth = '';
  let strHeight = '';
  if (window.getComputedStyle) {
    strWidth = window.getComputedStyle(ele, null)['width'];
    strHeight = window.getComputedStyle(ele, null)['height'];
  } else {
    strWidth = ele.currentStyle['width'];
    strHeight = ele.currentStyle['height'];
  }
  return {
    width: Number(strWidth.substring(0, strWidth.length - 2)),
    height: Number(strHeight.substring(0, strHeight.length - 2))
  };
}

export const fillMissValues = function (values, options) {
  const cloneOptions = [...options];
  const optionValues = new Set();
  options.forEach(opt => {
    optionValues.add(opt.value);
  });

  values.forEach(item => {
    if (!optionValues.has(item)) {
      cloneOptions.push({ value: item, label: item });
    }
  });

  return cloneOptions;
};
