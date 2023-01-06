import { ViewTemplate } from '@microsoft/fast-element';
import { html } from '@microsoft/fast-element';
import { ProxyElement } from '@microsoft/fast-foundation';
import { FastForm } from './form.js';

export const formTemplate: ViewTemplate<FastForm & ProxyElement[]> = html`
<template>
  <form id="${x => x.id}" action="${x => x.action}" elements="${x => x.elements}">
  </form>
</template>`;

export default FastForm.define({
  name: 'fast-form',
  template: formTemplate,
});
