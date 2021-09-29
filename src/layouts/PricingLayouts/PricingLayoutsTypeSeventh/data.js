import React, { Component } from "react";
import { Alert, Check, Close } from "../../../components/Icons/Icons";
import { Tooltip } from 'antd';

export const firstColumns = [
    {
      title: 'Usage',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Start',
      key: 'name',
      render: (text, record) => (
        <>
          {record.start === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
    {
      title: 'Plus',
      key: 'address',
      render: (text, record) => (
        <>
          {record.plus === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
    {
      title: 'Pro',
      key: 'action',
      render: (text, record) => (
        <>
          {record.pro === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
  ];
  
  export  const secondColumns = [
    {
      title: 'Features',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <>
          {record.notification ?
            <Tooltip title={record.notification}>
              <span>{record.name}  <Alert /></span>
            </Tooltip>
            :
            <span>{record.name}</span>
          }
        </>
      ),
    },
    {
      title: 'Start',
      key: 'name',
      render: (text, record) => (
        <>
          {record.start === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
    {
      title: 'Plus',
      key: 'address',
      render: (text, record) => (
        <>
          {record.plus === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
    {
      title: 'Pro',
      render: (text, record) => (
        <>
          {record.pro === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
  ];
  
  export const thirdColumns = [
    {
      title: 'Support',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <>
          {record.notification ?
            <Tooltip title={record.notification}>
              <span>{record.name}  <Alert /></span>
            </Tooltip>
            :
            <span>{record.name}</span>
          }
        </>
      ),
    },
    {
      title: 'Start',
      key: 'name',
      render: (text, record) => (
        <>
          {record.start === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
    {
      title: 'Plus',
      key: 'address',
      render: (text, record) => (
        <>
          {record.plus === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
    {
      title: 'Pro',
      render: (text, record) => (
        <>
          {record.pro === true ?
            <Check />
            :
            <Close />
          }
        </>
      ),
    },
  ];
  
  export const firstData = [
    {
      key: '1',
      name: 'Included contributors',
      start: true,
      plus: true,
      pro: true,
    },
    {
      key: '2',
      name: 'Free viewer accounts',
      start: true,
      plus: true,
      pro: false,
    },
    {
      key: '3',
      name: 'Accounting Integration',
      start: false,
      plus: true,
      pro: true,
    },
  ];
  
  export const secondData = [
    {
      key: '4',
      name: `Automatic Tax Calculation`,
      notification: 'This is a test header. please enter a value',
      start: true,
      plus: true,
      pro: true,
    },
    {
      key: '5',
      name: 'Automatic Categorisation',
      notification: 'This is a test header. please enter a value',
      start: true,
      plus: true,
      pro: true,
    },
    {
      key: '6',
      name: 'Accounting Integration',
      start: true,
      plus: true,
      pro: true,
    },
    {
      key: '7',
      name: 'Accounting Integration',
      start: false,
      plus: false,
      pro: false,
    },
  ];
  
  export const thirdData = [
    {
      key: '8',
      name: `Email support`,
      notification: 'This is a test header. please enter a value',
      start: true,
      plus: true,
      pro: true,
    },
    {
      key: '9',
      name: 'Slack community',
      notification: 'This is a test header. please enter a value',
      start: true,
      plus: false,
      pro: true,
    },
    {
      key: '10',
      name: 'Priority support response',
      start: false,
      plus: false,
      pro: false,
    }
  ];
  