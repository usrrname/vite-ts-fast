import { ViewTemplate } from '@microsoft/fast-element';
import { html, ref, slotted } from '@microsoft/fast-element';
import { FastForm } from './form.js';

export const formTemplate: ViewTemplate<FastForm> = html`
  <form id="${(x) => x.id}" 
  method="${(x) => x.method}" 
  ${ref('formData')} role="form">
 
  <slot ${slotted('elements')}></slot>

  </form>`;

export default FastForm.define({
  name: 'fast-form',
  template: formTemplate,
});
