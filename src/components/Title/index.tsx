import React, { FC } from 'react';

interface TitleType {
  title: string;
}
const Title: FC<TitleType> = ({ title }: TitleType) => {
  return (
    <h3 className='commom-h3 mb8'>
      <em className='decorative-block'></em>
      <span>{title}</span>
    </h3>
  );
};

export default Title;
