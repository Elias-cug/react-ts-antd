import React from 'react';
import AsyncValidator from 'async-validator';
export default function FormCreate () {
  const store = {};
  return function (WrappedComponent) {
    return class Form extends React.Component {
      getFiledProps = (fieldKey, options = { validator: {} }) => {
        return {
          key: fieldKey,
          onInput: e => {
            const value = e.target.value;
            store[fieldKey] = store[fieldKey] || {};
            store[fieldKey].value = value;
            const validator = new AsyncValidator({
              [fieldKey]: options.validator
            });
            if (options.validator) {
              validator
                .validate({ [fieldKey]: value })
                .then(() => {
                  store[fieldKey].error = null;
                  console.log('passed');
                })
                .catch(({ errors }) => {
                  store[fieldKey].error = errors.map(error => error.message).join(',');
                  console.log(store[fieldKey].error);
                })
                .then(() => {
                  this.forceUpdate();
                });
            }
          }
        };
      };

      getFieldsValue = () => {
        return Object.keys(store).reduce((memo, current) => {
          return {
            ...memo,
            [current]: store[current]
          };
        }, {});
      };

      getFieldFilter = fieldKey => {
        const error = store[fieldKey] && store[fieldKey].error;
        console.log(error);
        return {
          children: error
        };
      };

      render () {
        const form = {
          getFiledProps: this.getFiledProps,
          getFieldsValue: this.getFieldsValue,
          getFieldFilter: this.getFieldFilter
        };

        return <WrappedComponent form={form} />;
      }
    };
  };
}
