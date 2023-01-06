export const findFormElement = (id: string): HTMLFormElement | null => {
  return document?.querySelector(`form#${id}`);
};

export const findParentForm = (
  input: HTMLInputElement
): HTMLFormElement | null => {
  return input.closest('form');
};

export const customFormElementNames = [
  'custom-text-field',
  'fast-select',
  'fast-textarea',
];

// export const findShadowDOMInputs = (form: HTMLElement | HTMLFormElement) => {
//   let shadowDOMinputs = {};
//   let invalidNodes = {};
//   for (let i of form?.children) {
//     if (customFormElementNames.includes(i.nodeName)) {
//       shadowDOMinputs[i.id] = i.value;
//       const inputElement = i.shadowRoot.querySelector(`input#${i.id}`);
//       const validationMessage = inputElement.validationMessage;

//       if (inputElement.invalid || validationMessage.length > 1) {
//         i.shadowRoot.querySelector(`input#${i.id}`).invalid = true;
//         invalidNodes[i.id] = validationMessage;
//       }
//     }
//   }
// };
