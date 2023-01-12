import { attr, observable, volatile } from '@microsoft/fast-element';
import {
  FASTTextField,
  FormAssociatedElement,
} from '@microsoft/fast-foundation';

export class CustomTextField extends FASTTextField {
  public supportsElementInternals: boolean = true;

  /**
   * @public
   * @remarks
   * unique ID on the input text element
   */
  public id!: string;
  /**
   * @public
   * @remarks
   * HTML element: label text value
   */
  @attr({ attribute: 'label' }) public label?: string = '';

  /**
   * @public
   * @remarks
   * invalid attribute: initializes as false
   */
  @attr({ attribute: 'invalid', mode: 'boolean' })
  @observable
  public invalid: boolean = false;
  /**
   * @public
   * @remarks
   * validation message passed to <error-message></error-message>
   */
  @attr({ attribute: 'validationmessage' })
  @observable
  public validationMessage: string = this.control.validationMessage;
  /**
   * @public
   * @remarks
   * paragraph element that takes instructional text
   */
  @attr({ attribute: 'helptext' })
  public helpText?: string;

  /**
   * @public
   * @remarks
   * Allows author to mentions in text next to label
   * whether the field is optional '(Optional)' or '(Required)'
   */
  @attr({ attribute: 'optionality' })
  public optionality?: string;

  @attr({ attribute: 'aria-errormessage' })
  @observable
  static ariaErrormessage?: string;
  /**
   * @public
   * @remarks
   * references the form element parent to the current field
   */
  @attr() form: FormAssociatedElement['form'] = this.closest('form');
  @observable public parentForm?: HTMLFormElement;
  /**
   * @public
   * @remarks
   * value
   */
  @observable value!: string;
  /**
   * {@function}
   * @remarks
   * updateValue is called on change in input control value
   */
  updateValue(value: string) {
    this.value = value;
    this.$emit('change', this.value);
    this.setFormValue(value);
  }

  @volatile isInvalid(): void {
    this.invalid = this.control.validity.valid === false ? true : false;
    this.$emit('invalid', this.invalid);
  }

  // sync observed attributes to <input>
  attributeChangedCallback(name, _, newValue) {
    // console.info(
    //   `name:`,
    //   name,
    //   ` oldValue:${oldValue}`,
    //   ` newValue:`,
    //   newValue
    // );

    // WHY YOU NO SET ATTRIBUTE?!
    const value =
      name === 'disabled' ? this.hasAttribute('disabled') : newValue;
    name === 'invalid' && newValue === true
      ? this.setAttribute('invalid', 'true')
      : this.removeAttribute('invalid');
    this[`${name}`] = value;
  }

  /**
   * {@function}
   * @remarks
   * sets the validity of the field
   */
  validate(): void {
    super.validate();
    this.$emit('validate', this.control.validity);
  }

  reset(): void {
    super.formResetCallback();
    this.value = '';
    this.$emit('reset', '');
  }
}
