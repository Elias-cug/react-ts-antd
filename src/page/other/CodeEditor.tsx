import React, { FC } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor: FC = () => {
  const defaultValue = {
    name: 'liyish',
    age: '16',
    info: {
      name: 'hello'
    }
  };
  function onChange (a) {
    console.log(a);
  }
  return (
    <>
      <div className='code-editor'>
        <AceEditor
          className='editor-content editor-left'
          mode='java'
          theme='github'
          name='UNIQUE_ID_OF_DIV'
          showGutter={false}
          showPrintMargin={false}
          defaultValue={JSON.stringify(defaultValue, null, 2)}
          editorProps={{ $blockScrolling: true }}
          onChange={onChange}
        />
        <AceEditor
          className='editor-content editor-right'
          mode='java'
          theme='github'
          name='UNIQUE_ID_OF_DIV'
          showGutter={false}
          showPrintMargin={false}
          defaultValue={JSON.stringify(defaultValue, null, 2)}
          editorProps={{ $blockScrolling: true }}
          onChange={onChange}
        />
      </div>
    </>
  );
};
export default CodeEditor;
