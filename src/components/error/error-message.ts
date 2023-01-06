import { attr, FASTElement, html, observable } from '@microsoft/fast-element';

export const errTemplate = html<ErrorMessage>`
<p>${(x) => x.type} : ${(x) => x.textContent}</p>`;

export class ErrorMessage extends FASTElement {
  @attr({ attribute: 'type' }) @observable type!: 'warning' | 'info';

  @attr({ attribute: 'textcontent' }) @observable textContent: string =
    'Error message';
}
