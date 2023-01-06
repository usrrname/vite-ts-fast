import { attr as i, html as h, ref as f, AttributeConfiguration as V, observable as c, emptyArray as q, Updates as C, FASTElement as $, slotted as H, nullableNumberConverter as I, when as v, css as O } from "@microsoft/fast-element";
function r(a, t, e, o) {
  var s = arguments.length, l = s < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, e) : o, p;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    l = Reflect.decorate(a, t, e, o);
  else
    for (var E = a.length - 1; E >= 0; E--)
      (p = a[E]) && (l = (s < 3 ? p(l) : s > 3 ? p(t, e, l) : p(t, e)) || l);
  return s > 3 && l && Object.defineProperty(t, e, l), l;
}
class n {
}
r([
  i({ attribute: "aria-atomic" })
], n.prototype, "ariaAtomic", void 0);
r([
  i({ attribute: "aria-busy" })
], n.prototype, "ariaBusy", void 0);
r([
  i({ attribute: "aria-controls" })
], n.prototype, "ariaControls", void 0);
r([
  i({ attribute: "aria-current" })
], n.prototype, "ariaCurrent", void 0);
r([
  i({ attribute: "aria-describedby" })
], n.prototype, "ariaDescribedby", void 0);
r([
  i({ attribute: "aria-details" })
], n.prototype, "ariaDetails", void 0);
r([
  i({ attribute: "aria-disabled" })
], n.prototype, "ariaDisabled", void 0);
r([
  i({ attribute: "aria-errormessage" })
], n.prototype, "ariaErrormessage", void 0);
r([
  i({ attribute: "aria-flowto" })
], n.prototype, "ariaFlowto", void 0);
r([
  i({ attribute: "aria-haspopup" })
], n.prototype, "ariaHaspopup", void 0);
r([
  i({ attribute: "aria-hidden" })
], n.prototype, "ariaHidden", void 0);
r([
  i({ attribute: "aria-invalid" })
], n.prototype, "ariaInvalid", void 0);
r([
  i({ attribute: "aria-keyshortcuts" })
], n.prototype, "ariaKeyshortcuts", void 0);
r([
  i({ attribute: "aria-label" })
], n.prototype, "ariaLabel", void 0);
r([
  i({ attribute: "aria-labelledby" })
], n.prototype, "ariaLabelledby", void 0);
r([
  i({ attribute: "aria-live" })
], n.prototype, "ariaLive", void 0);
r([
  i({ attribute: "aria-owns" })
], n.prototype, "ariaOwns", void 0);
r([
  i({ attribute: "aria-relevant" })
], n.prototype, "ariaRelevant", void 0);
r([
  i({ attribute: "aria-roledescription" })
], n.prototype, "ariaRoledescription", void 0);
class R {
}
function T(a) {
  return h`
        <slot name="end" ${f("end")}>${a.end || ""}</slot>
    `;
}
function L(a) {
  return h`
        <slot name="start" ${f("start")}>${a.start || ""}</slot>
    `;
}
function x(a, ...t) {
  const e = V.locate(a);
  t.forEach((o) => {
    Object.getOwnPropertyNames(o.prototype).forEach((l) => {
      l !== "constructor" && Object.defineProperty(
        a.prototype,
        l,
        Object.getOwnPropertyDescriptor(o.prototype, l)
      );
    }), V.locate(o).forEach((l) => e.push(l));
  });
}
const B = "Enter", F = "form-associated-proxy", M = "ElementInternals", A = M in window && "setFormValue" in window[M].prototype, k = /* @__PURE__ */ new WeakMap();
function S(a) {
  const t = class extends a {
    constructor(...e) {
      super(...e), this.dirtyValue = !1, this.disabled = !1, this.proxyEventsToBlock = ["change", "click"], this.proxyInitialized = !1, this.required = !1, this.initialValue = this.initialValue || "", this.elementInternals || (this.formResetCallback = this.formResetCallback.bind(this));
    }
    static get formAssociated() {
      return A;
    }
    get validity() {
      return this.elementInternals ? this.elementInternals.validity : this.proxy.validity;
    }
    get form() {
      return this.elementInternals ? this.elementInternals.form : this.proxy.form;
    }
    get validationMessage() {
      return this.elementInternals ? this.elementInternals.validationMessage : this.proxy.validationMessage;
    }
    get willValidate() {
      return this.elementInternals ? this.elementInternals.willValidate : this.proxy.willValidate;
    }
    get labels() {
      if (this.elementInternals)
        return Object.freeze(Array.from(this.elementInternals.labels));
      if (this.proxy instanceof HTMLElement && this.proxy.ownerDocument && this.id) {
        const e = this.proxy.labels, o = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)), s = e ? o.concat(Array.from(e)) : o;
        return Object.freeze(s);
      } else
        return q;
    }
    valueChanged(e, o) {
      this.dirtyValue = !0, this.proxy instanceof HTMLElement && (this.proxy.value = this.value), this.currentValue = this.value, this.setFormValue(this.value), this.validate();
    }
    currentValueChanged() {
      this.value = this.currentValue;
    }
    initialValueChanged(e, o) {
      this.dirtyValue || (this.value = this.initialValue, this.dirtyValue = !1);
    }
    disabledChanged(e, o) {
      this.proxy instanceof HTMLElement && (this.proxy.disabled = this.disabled), C.enqueue(() => this.classList.toggle("disabled", this.disabled));
    }
    nameChanged(e, o) {
      this.proxy instanceof HTMLElement && (this.proxy.name = this.name);
    }
    requiredChanged(e, o) {
      this.proxy instanceof HTMLElement && (this.proxy.required = this.required), C.enqueue(() => this.classList.toggle("required", this.required)), this.validate();
    }
    get elementInternals() {
      if (!A)
        return null;
      let e = k.get(this);
      return e || (e = this.attachInternals(), k.set(this, e)), e;
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keypress", this._keypressHandler), this.value || (this.value = this.initialValue, this.dirtyValue = !1), this.elementInternals || (this.attachProxy(), this.form && this.form.addEventListener("reset", this.formResetCallback));
    }
    disconnectedCallback() {
      this.proxyEventsToBlock.forEach((e) => this.proxy.removeEventListener(e, this.stopPropagation)), !this.elementInternals && this.form && this.form.removeEventListener("reset", this.formResetCallback);
    }
    checkValidity() {
      return this.elementInternals ? this.elementInternals.checkValidity() : this.proxy.checkValidity();
    }
    reportValidity() {
      return this.elementInternals ? this.elementInternals.reportValidity() : this.proxy.reportValidity();
    }
    setValidity(e, o, s) {
      this.elementInternals ? this.elementInternals.setValidity(e, o, s) : typeof o == "string" && this.proxy.setCustomValidity(o);
    }
    formDisabledCallback(e) {
      this.disabled = e;
    }
    formResetCallback() {
      this.value = this.initialValue, this.dirtyValue = !1;
    }
    attachProxy() {
      var e;
      this.proxyInitialized || (this.proxyInitialized = !0, this.proxy.style.display = "none", this.proxyEventsToBlock.forEach((o) => this.proxy.addEventListener(o, this.stopPropagation)), this.proxy.disabled = this.disabled, this.proxy.required = this.required, typeof this.name == "string" && (this.proxy.name = this.name), typeof this.value == "string" && (this.proxy.value = this.value), this.proxy.setAttribute("slot", F), this.proxySlot = document.createElement("slot"), this.proxySlot.setAttribute("name", F)), (e = this.shadowRoot) === null || e === void 0 || e.appendChild(this.proxySlot), this.appendChild(this.proxy);
    }
    detachProxy() {
      var e;
      this.removeChild(this.proxy), (e = this.shadowRoot) === null || e === void 0 || e.removeChild(this.proxySlot);
    }
    validate(e) {
      this.proxy instanceof HTMLElement && this.setValidity(this.proxy.validity, this.proxy.validationMessage, e);
    }
    setFormValue(e, o) {
      this.elementInternals && this.elementInternals.setFormValue(e, o || e);
    }
    _keypressHandler(e) {
      switch (e.key) {
        case B:
          if (this.form instanceof HTMLFormElement) {
            const o = this.form.querySelector("[type=submit]");
            o == null || o.click();
          }
          break;
      }
    }
    stopPropagation(e) {
      e.stopPropagation();
    }
  };
  return i({ mode: "boolean" })(t.prototype, "disabled"), i({ mode: "fromView", attribute: "value" })(t.prototype, "initialValue"), i({ attribute: "current-value" })(t.prototype, "currentValue"), i(t.prototype, "name"), i({ mode: "boolean" })(t.prototype, "required"), c(t.prototype, "value"), t;
}
class z extends $ {
}
class j extends S(z) {
  constructor() {
    super(...arguments), this.proxy = document.createElement("input");
  }
}
const b = {
  submit: "submit",
  reset: "reset",
  button: "button"
};
class u extends j {
  constructor() {
    super(...arguments), this.handleSubmission = () => {
      if (!this.form)
        return;
      const t = this.proxy.isConnected;
      t || this.attachProxy(), typeof this.form.requestSubmit == "function" ? this.form.requestSubmit(this.proxy) : this.proxy.click(), t || this.detachProxy();
    }, this.handleFormReset = () => {
      var t;
      (t = this.form) === null || t === void 0 || t.reset();
    }, this.handleUnsupportedDelegatesFocus = () => {
      var t;
      window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && (!((t = this.$fastController.definition.shadowOptions) === null || t === void 0) && t.delegatesFocus) && (this.focus = () => {
        this.control.focus();
      });
    };
  }
  formactionChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.formAction = this.formaction);
  }
  formenctypeChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.formEnctype = this.formenctype);
  }
  formmethodChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.formMethod = this.formmethod);
  }
  formnovalidateChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.formNoValidate = this.formnovalidate);
  }
  formtargetChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.formTarget = this.formtarget);
  }
  typeChanged(t, e) {
    this.proxy instanceof HTMLInputElement && (this.proxy.type = this.type), e === b.submit && this.addEventListener("click", this.handleSubmission), t === b.submit && this.removeEventListener("click", this.handleSubmission), e === b.reset && this.addEventListener("click", this.handleFormReset), t === b.reset && this.removeEventListener("click", this.handleFormReset);
  }
  validate() {
    super.validate(this.control);
  }
  connectedCallback() {
    super.connectedCallback(), this.proxy.setAttribute("type", this.type), this.handleUnsupportedDelegatesFocus();
  }
}
r([
  i({ mode: "boolean" })
], u.prototype, "autofocus", void 0);
r([
  i({ attribute: "form" })
], u.prototype, "formId", void 0);
r([
  i
], u.prototype, "formaction", void 0);
r([
  i
], u.prototype, "formenctype", void 0);
r([
  i
], u.prototype, "formmethod", void 0);
r([
  i({ mode: "boolean" })
], u.prototype, "formnovalidate", void 0);
r([
  i
], u.prototype, "formtarget", void 0);
r([
  i
], u.prototype, "type", void 0);
r([
  c
], u.prototype, "defaultSlottedContent", void 0);
class g {
}
r([
  i({ attribute: "aria-expanded" })
], g.prototype, "ariaExpanded", void 0);
r([
  i({ attribute: "aria-pressed" })
], g.prototype, "ariaPressed", void 0);
x(g, n);
x(u, R, g);
function N(a = {}) {
  return h`
        <button
            class="control"
            part="control"
            ?autofocus="${(t) => t.autofocus}"
            ?disabled="${(t) => t.disabled}"
            form="${(t) => t.formId}"
            formaction="${(t) => t.formaction}"
            formenctype="${(t) => t.formenctype}"
            formmethod="${(t) => t.formmethod}"
            ?formnovalidate="${(t) => t.formnovalidate}"
            formtarget="${(t) => t.formtarget}"
            name="${(t) => t.name}"
            type="${(t) => t.type}"
            value="${(t) => t.value}"
            aria-atomic="${(t) => t.ariaAtomic}"
            aria-busy="${(t) => t.ariaBusy}"
            aria-controls="${(t) => t.ariaControls}"
            aria-current="${(t) => t.ariaCurrent}"
            aria-describedby="${(t) => t.ariaDescribedby}"
            aria-details="${(t) => t.ariaDetails}"
            aria-disabled="${(t) => t.ariaDisabled}"
            aria-errormessage="${(t) => t.ariaErrormessage}"
            aria-expanded="${(t) => t.ariaExpanded}"
            aria-flowto="${(t) => t.ariaFlowto}"
            aria-haspopup="${(t) => t.ariaHaspopup}"
            aria-hidden="${(t) => t.ariaHidden}"
            aria-invalid="${(t) => t.ariaInvalid}"
            aria-keyshortcuts="${(t) => t.ariaKeyshortcuts}"
            aria-label="${(t) => t.ariaLabel}"
            aria-labelledby="${(t) => t.ariaLabelledby}"
            aria-live="${(t) => t.ariaLive}"
            aria-owns="${(t) => t.ariaOwns}"
            aria-pressed="${(t) => t.ariaPressed}"
            aria-relevant="${(t) => t.ariaRelevant}"
            aria-roledescription="${(t) => t.ariaRoledescription}"
            ${f("control")}
        >
            ${L(a)}
            <span class="content" part="content">
                <slot ${H("defaultSlottedContent")}></slot>
            </span>
            ${T(a)}
        </button>
    `;
}
class K extends $ {
}
class U extends S(K) {
  constructor() {
    super(...arguments), this.proxy = document.createElement("input");
  }
}
const G = {
  email: "email",
  password: "password",
  tel: "tel",
  text: "text",
  url: "url"
};
class d extends U {
  constructor() {
    super(...arguments), this.type = G.text;
  }
  readOnlyChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly, this.validate());
  }
  autofocusChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.autofocus = this.autofocus, this.validate());
  }
  placeholderChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.placeholder = this.placeholder);
  }
  typeChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.type = this.type, this.validate());
  }
  listChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.setAttribute("list", this.list), this.validate());
  }
  maxlengthChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.maxLength = this.maxlength, this.validate());
  }
  minlengthChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.minLength = this.minlength, this.validate());
  }
  patternChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.pattern = this.pattern, this.validate());
  }
  sizeChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.size = this.size);
  }
  spellcheckChanged() {
    this.proxy instanceof HTMLInputElement && (this.proxy.spellcheck = this.spellcheck);
  }
  connectedCallback() {
    super.connectedCallback(), this.proxy.setAttribute("type", this.type), this.validate(), this.autofocus && C.enqueue(() => {
      this.focus();
    });
  }
  select() {
    this.control.select(), this.$emit("select");
  }
  handleTextInput() {
    this.value = this.control.value;
  }
  handleChange() {
    this.$emit("change");
  }
  validate() {
    super.validate(this.control);
  }
}
r([
  i({ attribute: "readonly", mode: "boolean" })
], d.prototype, "readOnly", void 0);
r([
  i({ mode: "boolean" })
], d.prototype, "autofocus", void 0);
r([
  i
], d.prototype, "placeholder", void 0);
r([
  i
], d.prototype, "type", void 0);
r([
  i
], d.prototype, "list", void 0);
r([
  i({ converter: I })
], d.prototype, "maxlength", void 0);
r([
  i({ converter: I })
], d.prototype, "minlength", void 0);
r([
  i
], d.prototype, "pattern", void 0);
r([
  i({ converter: I })
], d.prototype, "size", void 0);
r([
  i({ mode: "boolean" })
], d.prototype, "spellcheck", void 0);
r([
  c
], d.prototype, "defaultSlottedNodes", void 0);
class _ {
}
x(_, n);
x(d, R, _);
const W = (a) => {
  var t;
  return a.nodeType !== Node.TEXT_NODE || !!(!((t = a.nodeValue) === null || t === void 0) && t.trim().length);
};
function X(a = {}) {
  return h`
        <label
            part="label"
            for="control"
            class="${(t) => t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden"}"
        >
            <slot
                ${H({
    property: "defaultSlottedNodes",
    filter: W
  })}
            ></slot>
        </label>
        <div class="root" part="root">
            ${L(a)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${(t) => t.handleTextInput()}"
                @change="${(t) => t.handleChange()}"
                ?autofocus="${(t) => t.autofocus}"
                ?disabled="${(t) => t.disabled}"
                list="${(t) => t.list}"
                maxlength="${(t) => t.maxlength}"
                name="${(t) => t.name}"
                minlength="${(t) => t.minlength}"
                pattern="${(t) => t.pattern}"
                placeholder="${(t) => t.placeholder}"
                ?readonly="${(t) => t.readOnly}"
                ?required="${(t) => t.required}"
                size="${(t) => t.size}"
                ?spellcheck="${(t) => t.spellcheck}"
                :value="${(t) => t.value}"
                type="${(t) => t.type}"
                aria-atomic="${(t) => t.ariaAtomic}"
                aria-busy="${(t) => t.ariaBusy}"
                aria-controls="${(t) => t.ariaControls}"
                aria-current="${(t) => t.ariaCurrent}"
                aria-describedby="${(t) => t.ariaDescribedby}"
                aria-details="${(t) => t.ariaDetails}"
                aria-disabled="${(t) => t.ariaDisabled}"
                aria-errormessage="${(t) => t.ariaErrormessage}"
                aria-flowto="${(t) => t.ariaFlowto}"
                aria-haspopup="${(t) => t.ariaHaspopup}"
                aria-hidden="${(t) => t.ariaHidden}"
                aria-invalid="${(t) => t.ariaInvalid}"
                aria-keyshortcuts="${(t) => t.ariaKeyshortcuts}"
                aria-label="${(t) => t.ariaLabel}"
                aria-labelledby="${(t) => t.ariaLabelledby}"
                aria-live="${(t) => t.ariaLive}"
                aria-owns="${(t) => t.ariaOwns}"
                aria-relevant="${(t) => t.ariaRelevant}"
                aria-roledescription="${(t) => t.ariaRoledescription}"
                ${f("control")}
            />
            ${T(a)}
        </div>
    `;
}
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, y = (a, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Q(t, e) : t, l = a.length - 1, p; l >= 0; l--)
    (p = a[l]) && (s = (o ? p(t, e, s) : p(s)) || s);
  return o && s && J(t, e, s), s;
};
class m extends d {
  constructor() {
    super(), this.supportsElementInternals = !0, this.label = "", this.validationMessage = this.elementInternals.validationMessage, this.form = this.parentNode, this._handleFormData = this.handleFormData.bind(this);
  }
  updateValue(t) {
    this.value = t, this.$emit("change", this.value), this.setFormValue(t);
  }
  handleFormData({ formData: t }) {
    this.disabled || t.append(this.name, this.value);
  }
  isInvalid() {
    var t;
    this.invalid = (t = this.elementInternals) == null ? void 0 : t.validity.valid, this.invalid ? this.setAttribute("invalid", "true") : this.removeAttribute("invalid"), this.$emit("invalid", this.invalid);
  }
  validate() {
    var t;
    this.$emit("validate", this.setValidity(this.validity, (t = this.elementInternals) == null ? void 0 : t.validationMessage));
  }
  resetValue() {
    this.$emit("reset", ""), this.updateValue("");
  }
  formResetCallback() {
    if (super.formResetCallback(), this.value) {
      this.value = this.initialValue ?? "";
      return;
    }
    this.updateValue("");
  }
}
y([
  i({ attribute: "label" })
], m.prototype, "label", 2);
y([
  i({ attribute: "invalid", mode: "boolean" }),
  c
], m.prototype, "invalid", 2);
y([
  i({ attribute: "validationmessage" }),
  c
], m.prototype, "validationMessage", 2);
y([
  i({ attribute: "helptext" })
], m.prototype, "helpText", 2);
y([
  i({ attribute: "optionality" })
], m.prototype, "optionality", 2);
y([
  i()
], m.prototype, "form", 2);
y([
  c
], m.prototype, "parentForm", 2);
y([
  c
], m.prototype, "value", 2);
y([
  i({ attribute: "aria-errormessage" }),
  c
], m, "ariaErrormessage", 2);
function Y(a = {}) {
  return h`
<template>
  ${v(
    (t) => t.label,
    h`<label part="label" for="${(t) => t.id}" class="${(t) => t.label ? "label" : "label label__hidden"}"
    value="${(t) => t.label}" id="label-${(t) => t.id}">${(t) => t.label}
  </label>

  ${v((t) => t.optionality, h`<span class="optionality">${(t) => t.optionality}</span>`)}

  ${v((t) => t.helpText, h`<p id="helper-${(t) => t.id}">${(t) => t.helpText}</p>`)}
  `
  )}


  <div part="root" class="root">
    <div part="control" class="control">
      ${L(a)}
      <input id="${(t) => t.id}" 
      name="${(t) => t.name}"
        class="${(t) => t.invalid ? "control invalid" : "control valid"}" 
        :start="${(t) => t.start}"
        :end="${(t) => t.end}" 
        :placeholder="${(t) => t.placeholder ?? ""}" 
        aria-atomic="${(t) => t.ariaAtomic}"
        aria-busy="${(t) => t.ariaBusy}" 
        aria-controls="${(t) => t.ariaControls}" 
        aria-current="${(t) => t.ariaCurrent}"
        aria-describedby="${(t) => t.helpText ? `helper-${t.id}` : ""}" 
        aria-invalid="${(t) => t.isInvalid}"
        aria-keyshortcuts="${(t) => t.ariaKeyshortcuts}" 
        aria-label="${(t) => t.ariaLabel}"
        aria-labelledby="${(t) => t.label ? `label-${t.id}` : ""}"
        aria-describedby="${(t) => t.helpText ? `helper-${(e) => e.id}` : ""}" 
        aria-live="${(t) => t.ariaLive}"
        aria-owns="${(t) => t.ariaOwns}" 
        aria-relevant="${(t) => t.ariaRelevant}"
        aria-roledescription="${(t) => t.ariaRoledescription}" 
        ?autofocus="${(t) => t.autofocus}"
        ?disabled="${(t) => t.disabled}" 
        ?readonly="${(t) => t.readOnly}" 
        ?required="${(t) => t.required}"
        ?spellcheck="${(t) => t.spellcheck}" 
        list="${(t) => t.list}" 
        maxlength="${(t) => t.maxlength}"
        minlength="${(t) => t.minlength}" 
        name="${(t) => t.name}" 
        pattern="${(t) => t.pattern}" 
        size="${(t) => t.size}"
        tabindex="${(t) => t.disabled ? null : 0}" 
        type="${(t) => t.type}" 
        invalid="${(t) => t.isInvalid}"
        value="${(t) => t.value}"
        @change="${(t, e) => {
    t.updateValue(e.event.target.value);
  }}" 
        @validate="${(t) => t.validate}"
        ${f("control")} 
        ?form="${(t) => t.parentForm}" 
        @reset="${(t) => t.resetValue}"
        validationMessage="${(t) => t.validationMessage}"/>
        
      ${T(a)}
    </div>
  </div>
  ${v((t) => t.invalid, h`<error-message type="error" textcontent="${(t) => t.validationMessage}"></error-message>`)}
</template>`;
}
const Z = O`
 :host(#custom-text-field) {
  :invalid {
    outline: 4px solid red;
  }
 }
`, nt = m.define({
  name: "custom-text-field",
  template: Y(),
  styles: Z
});
class tt extends d {
}
const dt = tt.define({
  name: "fast-text-field",
  template: X()
});
var et = Object.defineProperty, at = Object.getOwnPropertyDescriptor, P = (a, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? at(t, e) : t, l = a.length - 1, p; l >= 0; l--)
    (p = a[l]) && (s = (o ? p(t, e, s) : p(s)) || s);
  return o && s && et(t, e, s), s;
};
const it = h`
<p>${(a) => a.textContent}</p>`;
class w extends $ {
  constructor() {
    super(...arguments), this.textContent = "Error message";
  }
}
P([
  i({ attribute: "type" }),
  c
], w.prototype, "type", 2);
P([
  i({ attribute: "textcontent" }),
  c
], w.prototype, "textContent", 2);
const pt = w.define({
  name: "error-message",
  template: it
});
class rt extends u {
}
const ot = O`
:host(button){
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
:host(button:hover) {
    border-color: #646cff;
    cursor: pointer;
}
  :host(button:focus),
  :host(button:focus-visible) {
    outline: 4px auto -webkit-focus-ring-color;
  }

`, ht = rt.define({
  name: "fast-button",
  template: N(),
  styles: ot
});
class D extends $ {
  constructor() {
    super(), this.name = "";
    let t = document.createElement("form");
    this.elements = t.elements;
  }
  get controls() {
    return this.elements;
  }
}
D.formAssociated = !0;
const st = h`
<template>
  <form id="${(a) => a.id}" action="${(a) => a.action}" elements="${(a) => a.elements}">
  </form>
</template>`, ut = D.define({
  name: "fast-form",
  template: st
});
export {
  ht as Button,
  nt as CustomTextField,
  pt as ErrorMessage,
  ut as FastForm,
  dt as TextField
};
