import { FASTElement, observable } from '@microsoft/fast-element';
export class FastForm extends FASTElement {
  public id!: string;
  public formData: FormData | undefined;
  public method?: 'get' | 'post' | 'put' | 'delete';
  public name: string = '';
  @observable public elements?: HTMLFormControlsCollection;

  constructor() {
    super();
    let currentForm = document.createElement('form') as HTMLFormElement;
    currentForm.id = this.id;
    this.formData = new FormData(currentForm);
  }
}
