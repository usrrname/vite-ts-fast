"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@microsoft/fast-element");function r(i,t,a,o){var s=arguments.length,l=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,a):o,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(i,t,a,o);else for(var b=i.length-1;b>=0;b--)(p=i[b])&&(l=(s<3?p(l):s>3?p(t,a,l):p(t,a))||l);return s>3&&l&&Object.defineProperty(t,a,l),l}class n{}r([e.attr({attribute:"aria-atomic"})],n.prototype,"ariaAtomic",void 0);r([e.attr({attribute:"aria-busy"})],n.prototype,"ariaBusy",void 0);r([e.attr({attribute:"aria-controls"})],n.prototype,"ariaControls",void 0);r([e.attr({attribute:"aria-current"})],n.prototype,"ariaCurrent",void 0);r([e.attr({attribute:"aria-describedby"})],n.prototype,"ariaDescribedby",void 0);r([e.attr({attribute:"aria-details"})],n.prototype,"ariaDetails",void 0);r([e.attr({attribute:"aria-disabled"})],n.prototype,"ariaDisabled",void 0);r([e.attr({attribute:"aria-errormessage"})],n.prototype,"ariaErrormessage",void 0);r([e.attr({attribute:"aria-flowto"})],n.prototype,"ariaFlowto",void 0);r([e.attr({attribute:"aria-haspopup"})],n.prototype,"ariaHaspopup",void 0);r([e.attr({attribute:"aria-hidden"})],n.prototype,"ariaHidden",void 0);r([e.attr({attribute:"aria-invalid"})],n.prototype,"ariaInvalid",void 0);r([e.attr({attribute:"aria-keyshortcuts"})],n.prototype,"ariaKeyshortcuts",void 0);r([e.attr({attribute:"aria-label"})],n.prototype,"ariaLabel",void 0);r([e.attr({attribute:"aria-labelledby"})],n.prototype,"ariaLabelledby",void 0);r([e.attr({attribute:"aria-live"})],n.prototype,"ariaLive",void 0);r([e.attr({attribute:"aria-owns"})],n.prototype,"ariaOwns",void 0);r([e.attr({attribute:"aria-relevant"})],n.prototype,"ariaRelevant",void 0);r([e.attr({attribute:"aria-roledescription"})],n.prototype,"ariaRoledescription",void 0);class T{}function v(i){return e.html`
        <slot name="end" ${e.ref("end")}>${i.end||""}</slot>
    `}function $(i){return e.html`
        <slot name="start" ${e.ref("start")}>${i.start||""}</slot>
    `}function y(i,...t){const a=e.AttributeConfiguration.locate(i);t.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(l=>{l!=="constructor"&&Object.defineProperty(i.prototype,l,Object.getOwnPropertyDescriptor(o.prototype,l))}),e.AttributeConfiguration.locate(o).forEach(l=>a.push(l))})}const M="Enter",g="form-associated-proxy",E="ElementInternals",C=E in window&&"setFormValue"in window[E].prototype,I=new WeakMap;function w(i){const t=class extends i{constructor(...a){super(...a),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return C}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const a=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=a?o.concat(Array.from(a)):o;return Object.freeze(s)}else return e.emptyArray}valueChanged(a,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(a,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(a,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),e.Updates.enqueue(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(a,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(a,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),e.Updates.enqueue(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!C)return null;let a=I.get(this);return a||(a=this.attachInternals(),I.set(this,a)),a}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(a=>this.proxy.removeEventListener(a,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(a,o,s){this.elementInternals?this.elementInternals.setValidity(a,o,s):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(a){this.disabled=a}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var a;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",g),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",g)),(a=this.shadowRoot)===null||a===void 0||a.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var a;this.removeChild(this.proxy),(a=this.shadowRoot)===null||a===void 0||a.removeChild(this.proxySlot)}validate(a){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,a)}setFormValue(a,o){this.elementInternals&&this.elementInternals.setFormValue(a,o||a)}_keypressHandler(a){switch(a.key){case M:if(this.form instanceof HTMLFormElement){const o=this.form.querySelector("[type=submit]");o==null||o.click()}break}}stopPropagation(a){a.stopPropagation()}};return e.attr({mode:"boolean"})(t.prototype,"disabled"),e.attr({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),e.attr({attribute:"current-value"})(t.prototype,"currentValue"),e.attr(t.prototype,"name"),e.attr({mode:"boolean"})(t.prototype,"required"),e.observable(t.prototype,"value"),t}class A extends e.FASTElement{}class k extends w(A){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const m={submit:"submit",reset:"reset",button:"button"};class h extends k{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,a){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),a===m.submit&&this.addEventListener("click",this.handleSubmission),t===m.submit&&this.removeEventListener("click",this.handleSubmission),a===m.reset&&this.addEventListener("click",this.handleFormReset),t===m.reset&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}r([e.attr({mode:"boolean"})],h.prototype,"autofocus",void 0);r([e.attr({attribute:"form"})],h.prototype,"formId",void 0);r([e.attr],h.prototype,"formaction",void 0);r([e.attr],h.prototype,"formenctype",void 0);r([e.attr],h.prototype,"formmethod",void 0);r([e.attr({mode:"boolean"})],h.prototype,"formnovalidate",void 0);r([e.attr],h.prototype,"formtarget",void 0);r([e.attr],h.prototype,"type",void 0);r([e.observable],h.prototype,"defaultSlottedContent",void 0);class f{}r([e.attr({attribute:"aria-expanded"})],f.prototype,"ariaExpanded",void 0);r([e.attr({attribute:"aria-pressed"})],f.prototype,"ariaPressed",void 0);y(f,n);y(h,T,f);function S(i={}){return e.html`
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
            ${$(i)}
            <span class="content" part="content">
                <slot ${e.slotted("defaultSlottedContent")}></slot>
            </span>
            ${v(i)}
        </button>
    `}class O extends e.FASTElement{}class H extends w(O){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const R={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class d extends H{constructor(){super(...arguments),this.type=R.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&e.Updates.enqueue(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}r([e.attr({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0);r([e.attr({mode:"boolean"})],d.prototype,"autofocus",void 0);r([e.attr],d.prototype,"placeholder",void 0);r([e.attr],d.prototype,"type",void 0);r([e.attr],d.prototype,"list",void 0);r([e.attr({converter:e.nullableNumberConverter})],d.prototype,"maxlength",void 0);r([e.attr({converter:e.nullableNumberConverter})],d.prototype,"minlength",void 0);r([e.attr],d.prototype,"pattern",void 0);r([e.attr({converter:e.nullableNumberConverter})],d.prototype,"size",void 0);r([e.attr({mode:"boolean"})],d.prototype,"spellcheck",void 0);r([e.observable],d.prototype,"defaultSlottedNodes",void 0);class L{}y(L,n);y(d,T,L);const _=i=>{var t;return i.nodeType!==Node.TEXT_NODE||!!(!((t=i.nodeValue)===null||t===void 0)&&t.trim().length)};function P(i={}){return e.html`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${e.slotted({property:"defaultSlottedNodes",filter:_})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${$(i)}
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
            ${v(i)}
        </div>
    `}var D=Object.defineProperty,q=Object.getOwnPropertyDescriptor,c=(i,t,a,o)=>{for(var s=o>1?void 0:o?q(t,a):t,l=i.length-1,p;l>=0;l--)(p=i[l])&&(s=(o?p(t,a,s):p(s))||s);return o&&s&&D(t,a,s),s};class u extends d{constructor(){super(),this.supportsElementInternals=!0,this.label="",this.validationMessage=this.elementInternals.validationMessage,this.form=this.parentNode,this._handleFormData=this.handleFormData.bind(this)}updateValue(t){this.value=t,this.$emit("change",this.value),this.setFormValue(t)}handleFormData({formData:t}){this.disabled||t.append(this.name,this.value)}isInvalid(){var t;this.invalid=(t=this.elementInternals)==null?void 0:t.validity.valid,this.invalid?this.setAttribute("invalid","true"):this.removeAttribute("invalid"),this.$emit("invalid",this.invalid)}validate(){var t;this.$emit("validate",this.setValidity(this.validity,(t=this.elementInternals)==null?void 0:t.validationMessage))}resetValue(){this.$emit("reset",""),this.updateValue("")}formResetCallback(){if(super.formResetCallback(),this.value){this.value=this.initialValue??"";return}this.updateValue("")}}c([e.attr({attribute:"label"})],u.prototype,"label",2);c([e.attr({attribute:"invalid",mode:"boolean"}),e.observable],u.prototype,"invalid",2);c([e.attr({attribute:"validationmessage"}),e.observable],u.prototype,"validationMessage",2);c([e.attr({attribute:"helptext"})],u.prototype,"helpText",2);c([e.attr({attribute:"optionality"})],u.prototype,"optionality",2);c([e.attr()],u.prototype,"form",2);c([e.observable],u.prototype,"parentForm",2);c([e.observable],u.prototype,"value",2);c([e.attr({attribute:"aria-errormessage"}),e.observable],u,"ariaErrormessage",2);function B(i={}){return e.html`
<template>
  ${e.when(t=>t.label,e.html`<label part="label" for="${t=>t.id}" class="${t=>t.label?"label":"label label__hidden"}"
    value="${t=>t.label}" id="label-${t=>t.id}">${t=>t.label}
  </label>

  ${e.when(t=>t.optionality,e.html`<span class="optionality">${t=>t.optionality}</span>`)}

  ${e.when(t=>t.helpText,e.html`<p id="helper-${t=>t.id}">${t=>t.helpText}</p>`)}
  `)}


  <div part="root" class="root">
    <div part="control" class="control">
      ${$(i)}
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
        aria-describedby="${t=>t.helpText?`helper-${a=>a.id}`:""}" 
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
        @change="${(t,a)=>{t.updateValue(a.event.target.value)}}" 
        @validate="${t=>t.validate}"
        ${e.ref("control")} 
        ?form="${t=>t.parentForm}" 
        @reset="${t=>t.resetValue}"
        validationMessage="${t=>t.validationMessage}"/>
        
      ${v(i)}
    </div>
  </div>
  ${e.when(t=>t.invalid,e.html`<error-message type="error" textcontent="${t=>t.validationMessage}"></error-message>`)}
</template>`}const z=e.css`
 :host(#custom-text-field) {
  :invalid {
    outline: 4px solid red;
  }
 }
`,N=u.define({name:"custom-text-field",template:B(),styles:z});class j extends d{}const K=j.define({name:"fast-text-field",template:P()});var U=Object.defineProperty,G=Object.getOwnPropertyDescriptor,F=(i,t,a,o)=>{for(var s=o>1?void 0:o?G(t,a):t,l=i.length-1,p;l>=0;l--)(p=i[l])&&(s=(o?p(t,a,s):p(s))||s);return o&&s&&U(t,a,s),s};const W=e.html`
<p>${i=>i.textContent}</p>`;class x extends e.FASTElement{constructor(){super(...arguments),this.textContent="Error message"}}F([e.attr({attribute:"type"}),e.observable],x.prototype,"type",2);F([e.attr({attribute:"textcontent"}),e.observable],x.prototype,"textContent",2);const X=x.define({name:"error-message",template:W});class J extends h{}const Q=e.css`
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

`,Y=J.define({name:"fast-button",template:S(),styles:Q});class V extends e.FASTElement{constructor(){super(),this.name="";let t=document.createElement("form");this.elements=t.elements}get controls(){return this.elements}}V.formAssociated=!0;const Z=e.html`
<template>
  <form id="${i=>i.id}" action="${i=>i.action}" elements="${i=>i.elements}">
  </form>
</template>`,tt=V.define({name:"fast-form",template:Z});exports.Button=Y;exports.CustomTextField=N;exports.ErrorMessage=X;exports.FastForm=tt;exports.TextField=K;
