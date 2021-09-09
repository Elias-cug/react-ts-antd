/* eslint-disable */
import { test } from '@/api/common';
import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

// import MarkdownEditor from '@uiw/react-markdown-editor';
import remarkGfm from 'remark-gfm';
import termsFrPath from './index.md';

const Mardown: FC = () => {
  // const [currentArticle, setCurrentArticle] = useState('');
  // useEffect(() => {
  //   setCurrentArticle(termsFrPath);
  //   console.log(typeof termsFrPath);
  //   // fetch(termsFrPath)
  //   //   .then(response => response.text())
  //   //   .then(text => {
  //   //     // console.log(text);
  //   //     setCurrentArticle(text);
  //   //   });
  // }, []);
  return (
    <>
      <ReactMarkdown>{termsFrPath}</ReactMarkdown>
    </>
  );
};
export default Mardown;
