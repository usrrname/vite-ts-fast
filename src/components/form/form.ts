import { FASTElement } from '@microsoft/fast-element';
export class FastForm extends FASTElement {
  public id!: string;
  public formData: FormData | undefined;
  public elements: HTMLFormControlsCollection;
  public action: 'get' | 'post' | 'put' | undefined;

  constructor() {
    super();
    let currentForm = document.createElement('form') as HTMLFormElement;
    currentForm.id = this.id;
    this.elements = currentForm.elements;
    this.formData = new FormData(currentForm);
  }

  public name: string = '';

  public get controls() {
    return this.elements;
  }
}
