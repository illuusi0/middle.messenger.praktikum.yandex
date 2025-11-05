import template from './message.tmpl.js';
import { templator } from '../../../../utils/templator.js';

export function Message(props = {}) {
  const defaultProps = {
    text: '',
    time: '',
    isOwn: false,
    ...props,
  };

  return templator(template, defaultProps);
}

