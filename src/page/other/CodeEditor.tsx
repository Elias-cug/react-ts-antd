import React, { FC } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor: FC = () => {
  function onChange (a) {
    console.log(a);
  }
  return (
    <>
      <div>
        <AceEditor
          mode='java'
          theme='github'
          onChange={onChange}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </>
  );
};
export default CodeEditor;
