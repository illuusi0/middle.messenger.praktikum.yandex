import template from './chats.tmpl.js';
import { templator } from '../../utils/templator.js';

export function Chats(props = {}) {
  const defaultProps = {
    wrapperClassName: 'wrapper',
    buttonText: 'Button',
    chatListClassName: 'chat-list',
    chatListItems: [],
    ...props,
  };

  return templator(template, defaultProps);
}

