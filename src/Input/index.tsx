import React, { ChangeEventHandler, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.less';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * @description 输入框内容
   */
  value?: string;
  /**
   * @description 输入框内容变化时的回调函数
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * @description 输入框内容变化时的回调函数
   */
}

const Input: FC<InputProps> = ({ className, children, ...props }) => {
  return <input {...props} className={classNames(className, 'suda-input')} />;
};

export default Input;