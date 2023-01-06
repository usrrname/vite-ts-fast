import { css } from "@microsoft/fast-element";
import { buttonTemplate } from "@microsoft/fast-foundation";
import { Button } from "./button.js";

const buttonStyles = css`
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

`

export default Button.define({
  name: 'fast-button',
  template: buttonTemplate(),
  styles: buttonStyles
});
