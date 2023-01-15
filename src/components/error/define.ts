import { css } from '@microsoft/fast-element';
import { ErrorMessage, errTemplate, iconMap } from './error-message.js';
const buttonStyles = css`p{
  color: red;
}
`;
export default ErrorMessage.define({
  name: 'error-message',
  template: errTemplate(iconMap),
  styles: buttonStyles,
});
