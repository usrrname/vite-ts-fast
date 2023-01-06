(function(h,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("@microsoft/fast-element")):typeof define=="function"&&define.amd?define(["exports","@microsoft/fast-element"],e):(h=typeof globalThis<"u"?globalThis:h||self,e(h["fast-vite"]={},h.fastElement))})(this,function(h,e){"use strict";function r(a,t,i,o){var s=arguments.length,l=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,t,i,o);else for(var g=a.length-1;g>=0;g--)(p=a[g])&&(l=(s<3?p(l):s>3?p(t,i,l):p(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}class n{}r([e.attr({attribute:"aria-atomic"})],n.prototype,"ariaAtomic",void 0),r([e.attr({attribute:"aria-busy"})],n.prototype,"ariaBusy",void 0),r([e.attr({attribute:"aria-controls"})],n.prototype,"ariaControls",void 0),r([e.attr({attribute:"aria-current"})],n.prototype,"ariaCurrent",void 0),r([e.attr({attribute:"aria-describedby"})],n.prototype,"ariaDescribedby",void 0),r([e.attr({attribute:"aria-details"})],n.prototype,"ariaDetails",void 0),r([e.attr({attribute:"aria-disabled"})],n.prototype,"ariaDisabled",void 0),r([e.attr({attribute:"aria-errormessage"})],n.prototype,"ariaErrormessage",void 0),r([e.attr({attribute:"aria-flowto"})],n.prototype,"ariaFlowto",void 0),r([e.attr({attribute:"aria-haspopup"})],n.prototype,"ariaHaspopup",void 0),r([e.attr({attribute:"aria-hidden"})],n.prototype,"ariaHidden",void 0),r([e.attr({attribute:"aria-invalid"})],n.prototype,"ariaInvalid",void 0),r([e.attr({attribute:"aria-keyshortcuts"})],n.prototype,"ariaKeyshortcuts",void 0),r([e.attr({attribute:"aria-label"})],n.prototype,"ariaLabel",void 0),r([e.attr({attribute:"aria-labelledby"})],n.prototype,"ariaLabelledby",void 0),r([e.attr({attribute:"aria-live"})],n.prototype,"ariaLive",void 0),r([e.attr({attribute:"aria-owns"})],n.prototype,"ariaOwns",void 0),r([e.attr({attribute:"aria-relevant"})],n.prototype,"ariaRelevant",void 0),r([e.attr({attribute:"aria-roledescription"})],n.prototype,"ariaRoledescription",void 0);class C{}function f(a){return e.html`
        <slot name="end" ${e.ref("end")}>${a.end||""}</slot>
    `}function $(a){return e.html`
        <slot name="start" ${e.ref("start")}>${a.start||""}</slot>
    `}function b(a,...t){const i=e.AttributeConfiguration.locate(a);t.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(l=>{l!=="constructor"&&Object.defineProperty(a.prototype,l,Object.getOwnPropertyDescriptor(o.prototype,l))}),e.AttributeConfiguration.locate(o).forEach(l=>i.push(l))})}const k="Enter",T="form-associated-proxy",I="ElementInternals",w=I in window&&"setFormValue"in window[I].prototype,L=new WeakMap;function F(a){const t=class extends a{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return w}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=i?o.concat(Array.from(i)):o;return Object.freeze(s)}else return e.emptyArray}valueChanged(i,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),e.Updates.enqueue(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),e.Updates.enqueue(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!w)return null;let i=L.get(this);return i||(i=this.attachInternals(),L.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,o,s){this.elementInternals?this.elementInternals.setValidity(i,o,s):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",T),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",T)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,o){this.elementInternals&&this.elementInternals.setFormValue(i,o||i)}_keypressHandler(i){switch(i.key){case k:if(this.form instanceof HTMLFormElement){const o=this.form.querySelector("[type=submit]");o==null||o.click()}break}}stopPropagation(i){i.stopPropagation()}};return e.attr({mode:"boolean"})(t.prototype,"disabled"),e.attr({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),e.attr({attribute:"current-value"})(t.prototype,"currentValue"),e.attr(t.prototype,"name"),e.attr({mode:"boolean"})(t.prototype,"required"),e.observable(t.prototype,"value"),t}class S extends e.FASTElement{}class O extends F(S){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const v={submit:"submit",reset:"reset",button:"button"};class u extends O{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i===v.submit&&this.addEventListener("click",this.handleSubmission),t===v.submit&&this.removeEventListener("click",this.handleSubmission),i===v.reset&&this.addEventListener("click",this.handleFormReset),t===v.reset&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}r([e.attr({mode:"boolean"})],u.prototype,"autofocus",void 0),r([e.attr({attribute:"form"})],u.prototype,"formId",void 0),r([e.attr],u.prototype,"formaction",void 0),r([e.attr],u.prototype,"formenctype",void 0),r([e.attr],u.prototype,"formmethod",void 0),r([e.attr({mode:"boolean"})],u.prototype,"formnovalidate",void 0),r([e.attr],u.prototype,"formtarget",void 0),r([e.attr],u.prototype,"type",void 0),r([e.observable],u.prototype,"defaultSlottedContent",void 0);class m{}r([e.attr({attribute:"aria-expanded"})],m.prototype,"ariaExpanded",void 0),r([e.attr({attribute:"aria-pressed"})],m.prototype,"ariaPressed",void 0),b(m,n),b(u,C,m);function H(a={}){return e.html`
        <button
            class="control"
            part="control"
            ?autofocus="${t=>t.autofocus}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.formId}"
            formaction="${t=>t.formaction}"
            formenctype="${t=>t.formenctype}"
            formmethod="${t=>t.formmethod}"
            ?formnovalidate="${t=>t.formnovalidate}"
            formtarget="${t=>t.formtarget}"
            name="${t=>t.name}"
            type="${t=>t.type}"
            value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-pressed="${t=>t.ariaPressed}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${e.ref("control")}
        >
            ${$(a)}
            <span class="content" part="content">
                <slot ${e.slotted("defaultSlottedContent")}></slot>
            </span>
            ${f(a)}
        </button>
    `}class R extends e.FASTElement{}class _ extends F(R){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const P={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class d extends _{constructor(){super(...arguments),this.type=P.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&e.Updates.enqueue(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}r([e.attr({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),r([e.attr({mode:"boolean"})],d.prototype,"autofocus",void 0),r([e.attr],d.prototype,"placeholder",void 0),r([e.attr],d.prototype,"type",void 0),r([e.attr],d.prototype,"list",void 0),r([e.attr({converter:e.nullableNumberConverter})],d.prototype,"maxlength",void 0),r([e.attr({converter:e.nullableNumberConverter})],d.prototype,"minlength",void 0),r([e.attr],d.prototype,"pattern",void 0),r([e.attr({converter:e.nullableNumberConverter})],d.prototype,"size",void 0),r([e.attr({mode:"boolean"})],d.prototype,"spellcheck",void 0),r([e.observable],d.prototype,"defaultSlottedNodes",void 0);class V{}b(V,n),b(d,C,V);const D=a=>{var t;return a.nodeType!==Node.TEXT_NODE||!!(!((t=a.nodeValue)===null||t===void 0)&&t.trim().length)};function q(a={}){return e.html`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${e.slotted({property:"defaultSlottedNodes",filter:D})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${$(a)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                name="${t=>t.name}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${e.ref("control")}
            />
            ${f(a)}
        </div>
    `}var B=Object.defineProperty,j=Object.getOwnPropertyDescriptor,y=(a,t,i,o)=>{for(var s=o>1?void 0:o?j(t,i):t,l=a.length-1,p;l>=0;l--)(p=a[l])&&(s=(o?p(t,i,s):p(s))||s);return o&&s&&B(t,i,s),s};class c extends d{constructor(){super(),this.supportsElementInternals=!0,this.label="",this.validationMessage=this.elementInternals.validationMessage,this.form=this.parentNode,this._handleFormData=this.handleFormData.bind(this)}updateValue(t){this.value=t,this.$emit("change",this.value),this.setFormValue(t)}handleFormData({formData:t}){this.disabled||t.append(this.name,this.value)}isInvalid(){var t;this.invalid=(t=this.elementInternals)==null?void 0:t.validity.valid,this.invalid?this.setAttribute("invalid","true"):this.removeAttribute("invalid"),this.$emit("invalid",this.invalid)}validate(){var t;this.$emit("validate",this.setValidity(this.validity,(t=this.elementInternals)==null?void 0:t.validationMessage))}resetValue(){this.$emit("reset",""),this.updateValue("")}formResetCallback(){if(super.formResetCallback(),this.value){this.value=this.initialValue??"";return}this.updateValue("")}}y([e.attr({attribute:"label"})],c.prototype,"label",2),y([e.attr({attribute:"invalid",mode:"boolean"}),e.observable],c.prototype,"invalid",2),y([e.attr({attribute:"validationmessage"}),e.observable],c.prototype,"validationMessage",2),y([e.attr({attribute:"helptext"})],c.prototype,"helpText",2),y([e.attr({attribute:"optionality"})],c.prototype,"optionality",2),y([e.attr()],c.prototype,"form",2),y([e.observable],c.prototype,"parentForm",2),y([e.observable],c.prototype,"value",2),y([e.attr({attribute:"aria-errormessage"}),e.observable],c,"ariaErrormessage",2);function z(a={}){return e.html`
<template>
  ${e.when(t=>t.label,e.html`<label part="label" for="${t=>t.id}" class="${t=>t.label?"label":"label label__hidden"}"
    value="${t=>t.label}" id="label-${t=>t.id}">${t=>t.label}
  </label>

  ${e.when(t=>t.optionality,e.html`<span class="optionality">${t=>t.optionality}</span>`)}

  ${e.when(t=>t.helpText,e.html`<p id="helper-${t=>t.id}">${t=>t.helpText}</p>`)}
  `)}


  <div part="root" class="root">
    <div part="control" class="control">
      ${$(a)}
      <input id="${t=>t.id}" 
      name="${t=>t.name}"
        class="${t=>t.invalid?"control invalid":"control valid"}" 
        :start="${t=>t.start}"
        :end="${t=>t.end}" 
        :placeholder="${t=>t.placeholder??""}" 
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}" 
        aria-controls="${t=>t.ariaControls}" 
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.helpText?`helper-${t.id}`:""}" 
        aria-invalid="${t=>t.isInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}" 
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.label?`label-${t.id}`:""}"
        aria-describedby="${t=>t.helpText?`helper-${i=>i.id}`:""}" 
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}" 
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}" 
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}" 
        ?readonly="${t=>t.readOnly}" 
        ?required="${t=>t.required}"
        ?spellcheck="${t=>t.spellcheck}" 
        list="${t=>t.list}" 
        maxlength="${t=>t.maxlength}"
        minlength="${t=>t.minlength}" 
        name="${t=>t.name}" 
        pattern="${t=>t.pattern}" 
        size="${t=>t.size}"
        tabindex="${t=>t.disabled?null:0}" 
        type="${t=>t.type}" 
        invalid="${t=>t.isInvalid}"
        value="${t=>t.value}"
        @change="${(t,i)=>{t.updateValue(i.event.target.value)}}" 
        @validate="${t=>t.validate}"
        ${e.ref("control")} 
        ?form="${t=>t.parentForm}" 
        @reset="${t=>t.resetValue}"
        validationMessage="${t=>t.validationMessage}"/>
        
      ${f(a)}
    </div>
  </div>
  ${e.when(t=>t.invalid,e.html`<error-message type="error" textcontent="${t=>t.validationMessage}"></error-message>`)}
</template>`}const N=e.css`
 :host(#custom-text-field) {
  :invalid {
    outline: 4px solid red;
  }
 }
`,K=c.define({name:"custom-text-field",template:z(),styles:N});class U extends d{}const G=U.define({name:"fast-text-field",template:q()});var W=Object.defineProperty,X=Object.getOwnPropertyDescriptor,M=(a,t,i,o)=>{for(var s=o>1?void 0:o?X(t,i):t,l=a.length-1,p;l>=0;l--)(p=a[l])&&(s=(o?p(t,i,s):p(s))||s);return o&&s&&W(t,i,s),s};const J=e.html`
<p>${a=>a.textContent}</p>`;class x extends e.FASTElement{constructor(){super(...arguments),this.textContent="Error message"}}M([e.attr({attribute:"type"}),e.observable],x.prototype,"type",2),M([e.attr({attribute:"textcontent"}),e.observable],x.prototype,"textContent",2);const Q=x.define({name:"error-message",template:J});class Y extends u{}const Z=e.css`
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

`,E=Y.define({name:"fast-button",template:H(),styles:Z});class A extends e.FASTElement{constructor(){super(),this.name="";let t=document.createElement("form");this.elements=t.elements}get controls(){return this.elements}}A.formAssociated=!0;const tt=e.html`
<template>
  <form id="${a=>a.id}" action="${a=>a.action}" elements="${a=>a.elements}">
  </form>
</template>`,et=A.define({name:"fast-form",template:tt});h.Button=E,h.CustomTextField=K,h.ErrorMessage=Q,h.FastForm=et,h.TextField=G,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
