import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { get, CancelToken, isCancel } from './axion-methods';
import Title from '@/components/Title';
import resolve from 'resolve';

// 限制请求个数的通用方法
function limitReq (urls, handler, limit) {
  // 对数组做一个拷贝
  const sequence = [].concat(urls);
  let promises: any = [];

  //并发请求到最大数
  promises = sequence.splice(0, limit).map((url, index) => {
    // 这里返回的 index 是任务在 promises 的脚标，
    //用于在 Promise.race 之后找到完成的任务脚标
    return handler(url).then(() => {
      return index;
    });
  });

  let p = Promise.race(promises);
  for (let i = 0; i < sequence.length; i++) {
    p = p.then((res: any) => {
      promises[res] = handler(sequence[i]).then(() => {
        return res;
      });
      return Promise.race(promises);
    });
  }
}

// 失败请求发送直到 n 次
function repeatSendReq (handler, limit) {
  console.log(limit);
}

const AxiosSolution: FC = () => {
  let sourceA: any = null;

  /**
   * 同时触发多个请求
   * 1. 发送多个请求，全部成功返回，得到有顺序的排序结果
   * 2. 发送多个请求，其中一个请求返回失败
   */
  function onTriggerMultiReq () {
    const arrUrl = ['/getTestAxiosA', '/getTestAxiosB', '/getTestAxiosC', '/getTestAxiosErrorA'];
    const arrPromise: any = [];
    arrUrl.forEach(item => {
      const p = new Promise((resolve, reject) => {
        get(`${item}`)
          .then(res => {
            console.log(res);
            resolve(res);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
      });
      arrPromise.push(p);
    });

    Promise.all(arrPromise)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * 限制最大并发接口的数量
   * 1. 有 10 个请求，需要发送，但是每次最多同时发出 2 个，占 2 个线程。
   */
  function onTriggerLimitReq () {
    const urls = [
      '/getTestAxiosA',
      '/getTestAxiosB',
      '/getTestAxiosC',
      '/getTestAxiosD',
      '/getTestAxiosE',
      '/getTestAxiosF'
    ];

    function handler (url) {
      return get(url).then(res => {
        console.log(res);
      });
    }

    limitReq(urls, handler, 2);
  }

  /**
   * 取消未响应请求
   * 1. 触发重复请求时，上次请求如果未响应，发出下次请求前取消上次请求
   */
  function onTriggerCancelReq () {
    const url = '/getTestAxiosF';
    if (sourceA) {
      sourceA.cancel('repeat request');
    }
    sourceA = CancelToken.source();
    const config = { cancelToken: sourceA.token };
    get(url, config)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        if (isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          // 处理错误
        }
      });
  }

  /**
   * 重新发送响应失败的请求直到 n 次
   */
  function onTriggerResentReq () {
    const url = '/getTestAxiosF';
  }

  // 上传文件
  function onTriggerUpload () {
    console.log('upload');
  }

  // 上传文件2
  function onTriggerDownload1 () {
    console.log('download1');
  }

  // 上传文件
  function onTriggerDownload2 () {
    console.log('download2');
  }

  return (
    <>
      <Card className='card-common'>
        <Title title='执行多个并发请求' />
        <Button onClick={onTriggerMultiReq}>点击触发多个请求</Button>
      </Card>
      <Card className='card-common'>
        <Title title='限制请求个数方案' />
        <Button onClick={onTriggerLimitReq}>点击触发一次最多发送2个请求</Button>
      </Card>
      <Card className='card-common'>
        <Title title='取消请求方案' />
        <Button onClick={onTriggerCancelReq}>点击触发取消重复请求</Button>
      </Card>
      <Card className='card-common'>
        <Title title='请求失败后继续请求直到3次' />
        <Button onClick={onTriggerResentReq}>点击触发重新发送失败的请求</Button>
      </Card>
      <Card className='card-common'>
        <Title title='上传文件方案' />
        <Button onClick={onTriggerUpload}>点击触发文件上传</Button>
      </Card>
      <Card className='card-common'>
        <Title title='下载文件方案' />
        <Button onClick={onTriggerDownload1}>下载文件方案1</Button>
        <Button onClick={onTriggerDownload2}>下载文件方案2</Button>
      </Card>
    </>
  );
};
export default AxiosSolution;
