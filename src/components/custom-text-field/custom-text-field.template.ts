import { ElementViewTemplate, html, ref, when } from '@microsoft/fast-element';
import {
  endSlotTemplate,
  startSlotTemplate,
  TextFieldOptions,
} from '@microsoft/fast-foundation';
import { errTemplate } from '../error/error-message.js';
import type { CustomTextField } from './custom-text-field.js';

export function textTemplate(
  options: TextFieldOptions = {}
): ElementViewTemplate {
  return html<CustomTextField>`
<template 
invalid="${(x) => x.isInvalid}" 
:validationMessage="${(x) =>
    x.validationMessage ?? x.control.validationMessage}">
  ${when(
    (x) => x.label,
    html`<label part="label" for="${(x) => x.id}" class="${(x) =>
      x.label ? 'label' : 'label label__hidden'}"
    value="${(x) => x.label}" id="label-${(x) => x.id}">${(x) => x.label}
  </label>

  ${when(
    (x) => x.optionality,
    html`<span class="optionality">${(x) => x.optionality}</span>`
  )}

  ${when(
    (x) => x.helpText,
    html`<p id="helper-${(x) => x.id}">${(x) => x.helpText}</p>`
  )}
  `
  )}
  <div part="root" class="root">
    <div part="control" class="control">
      ${startSlotTemplate(options)}
      <input id="${(x) => x.id}" 
      name="${(x) => x.name}"
        class="${(x) => (x.invalid ? 'control invalid' : 'control valid')}" 
        :start="${(x) => x.start}"
        :end="${(x) => x.end}" 
        :placeholder="${(x) => x.placeholder ?? ''}" 
        aria-atomic="${(x) => x.ariaAtomic}"
        aria-busy="${(x) => x.ariaBusy}" 
        aria-controls="${(x) => x.ariaControls}" 
        aria-current="${(x) => x.ariaCurrent}"
        aria-describedby="${(x) => (x.helpText ? `helper-${x.id}` : '')}" 
        aria-invalid="${(x) => x.isInvalid}"
        aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}" 
        aria-label="${(x) => x.ariaLabel}"
        aria-labelledby="${(x) => (x.label ? `label-${x.id}` : '')}"
        aria-describedby="${(x) =>
          x.helpText ? `helper-${(x) => x.id}` : ''}" 
        aria-live="${(x) => x.ariaLive}"
        aria-owns="${(x) => x.ariaOwns}" 
        aria-relevant="${(x) => x.ariaRelevant}"
        aria-roledescription="${(x) => x.ariaRoledescription}" 
        ?autofocus="${(x) => x.autofocus}"
        ?disabled="${(x) => x.disabled}" 
        ?readonly="${(x) => x.readOnly}" 
        ?required="${(x) => x.required}"
        ?spellcheck="${(x) => x.spellcheck}" 
        list="${(x) => x.list}" 
        maxlength="${(x) => x.maxlength}"
        minlength="${(x) => x.minlength}" 
        name="${(x) => x.name}" 
        pattern="${(x) => x.pattern}" 
        size="${(x) => x.size}"
        tabindex="${(x) => (x.disabled ? null : 0)}" 
        type="${(x) => x.type}" 
        :invalid="${(x) => x.invalid}"
        value="${(x) => x.value}"
        @change="${(x, c) => {
          x.updateValue((c.event.target as HTMLInputElement).value);
        }}" 
        @validate="${(x) => x.validate}"
        ${ref('control')} 
        ?form="${(x) => x.parentForm}" 
        @reset="${(x) => x.reset}"
        />
        
      ${endSlotTemplate(options)}
    </div>
  </div>
  ${when(
    (x) => x.invalid,
    html`${errTemplate('error', (x) => x.validationMessage)}`
  )}
</template>`;
}
