import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import instance from '@/axios/axios';

const Mardown: FC = () => {
  const [currentArticle, setCurrentArticle] = useState('');
  useEffect(() => {
    instance.get('/目录结构说明.md').then(res => {
      console.log(res);
      setCurrentArticle(res.data);
    });
  }, []);
  return (
    <>
      <ReactMarkdown>{currentArticle}</ReactMarkdown>
    </>
  );
};
export default Mardown;
