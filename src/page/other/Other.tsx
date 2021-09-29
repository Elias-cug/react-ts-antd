import React, { FC } from 'react';
import { Card, Input, Button, notification, message } from 'antd';
import ClipboardJS from 'clipboard';
import { Sortable } from './index';
const OtherTest: FC = () => {
  const clipboard = new ClipboardJS('#btn_clipboard');

  clipboard.on('success', function (e) {
    message.info(`复制成功：${e.text}`);
    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });

  return (
    <>
      <div className='other-wrapper'>
        <Card className='card-common'>
          <h3 className='commom-h3 mb8'>
            <em className='decorative-block'></em>
            <span>剪切板</span>
          </h3>
          <div className='other-clipboard'>
            <div className='input'>
              <Input id='input' placeholder='请输入' />
            </div>
            <div>
              <Button id='btn_clipboard' data-clipboard-target='#input'>
                复制到剪切板
              </Button>
            </div>
          </div>
        </Card>
        <Card className='card-common'>
          <h3 className='commom-h3 mb8'>
            <em className='decorative-block'></em>
            <span>可拖拽</span>
          </h3>
          <div className='other-clipboard'>
            <Sortable></Sortable>
          </div>
        </Card>
      </div>
    </>
  );
};
export default OtherTest;
