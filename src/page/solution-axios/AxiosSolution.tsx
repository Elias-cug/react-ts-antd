import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { get } from './axion-methods';
import Title from '@/components/Title';

const AxiosSolution: FC = () => {
  /**
   * 测试同时触发多个请求
   * 1. 发送多个请求，全部成功返回，得到有顺序的排序结果
   * 2. 发送多个请求，其中一个请求返回失败
   */
  function onTriggerMultiReq () {
    const arrUrl = ['/getTestAxiosA', '/getTestAxiosB', '/getTestAxiosC'];
    const arrPromise: any = [];
    arrUrl.forEach(item => {
      const p = new Promise((resolve, reject) => {
        get(`/api${item}`)
          .then(res => {
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
   * 测试限制最大并发请求个数
   * 1. 有 10 个请求，需要发送，但是每次最多同时发出 4 个，占 4 个线程。
   */
  function onTriggerLimitReq () {
    const arrUrl = ['/getTestAxiosA', '/getTestAxiosB', '/getTestAxiosC', '/getTestAxiosD', '/getTestAxiosE'];
    // 发送请求 --》 完成一个请求后立即往数组里面补充一个，直到请求用完 --》 按数组顺序返回请求结果
  }

  /**
   * 测试取消重复请求
   * 1. 触发重复请求时，上次请求如果未响应，发出下次请求前取消上次请求
   */
  function onTriggerCancelReq () {}

  /**
   * 测试重新请求，响应失败的请求直到 n 次
   */
  function onTriggerResentReq () {}

  // 测试上传文件
  function onTriggerUpload () {}

  // 测试上传文件
  function onTriggerDownload1 () {}

  // 测试上传文件
  function onTriggerDownload2 () {}

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
        <Title title='请求失败后继续请求直到n次' />
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
