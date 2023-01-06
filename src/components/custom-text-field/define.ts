import { css } from '@microsoft/fast-element';
import { CustomTextField } from './custom-text-field.js';
import { textTemplate } from './custom-text-field.template.js';

const textFieldStyles = css`
 :host(#custom-text-field) {
  :invalid {
    outline: 4px solid red;
  }
 }
`
export default CustomTextField.define({
  name: 'custom-text-field',
  template: textTemplate(),
  styles: textFieldStyles
});
