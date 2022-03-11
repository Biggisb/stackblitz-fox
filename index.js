import { LitElement, css, html } from 'lit';
import '@material/mwc-button';
import '@assecosolutions/fox-icon-button';
import '@assecosolutions/fox-activity-list';
export class FoxDemo extends LitElement {
  // Render the UI as a function of component state
  render() {
    return html`
    <mwc-button icon="add"></mwc-button> 
    <fox-icon-button icon="delete"></fox-icon-button>
    <fox-activity-list>
    <fox-activity-list-item graphic="avatar" twoline="" hasmeta="">
      <span> I am the Title </span>
      <span slot="secondary">
        I am long long text am long long text am long long text am long long
        text am long long text am long long text am long long textam long long
        text am long long text am long long text am long long text am long long
        text am long long text am long long textam long long text am long long
        text am long long text am long long text am long long text am long long
        text am long long textam long long text am long long text am long long
        text am long long text am long long text am long long text am long long
        textam long long text am long long text am long long text am long long
        text am long long text am long long text am long long textam long long
        text am long long text am long long text am long long text am long long
        text am long long text am long long textam long long text am long long
        text am long long text am long long text am long long text am long long
        text am long long text
      </span>
      <fox-icon slot="graphic" icon="add"></fox-icon>
      <span slot="meta"> 15.Oct </span>
      <fox-list-item slot="menuItems">Menu Item 1</fox-list-item>
      <fox-list-item slot="menuItems">Menu Item 2 </fox-list-item>
    </fox-activity-list-item>
    <fox-activity-list-item graphic="avatar" twoline="" hasmeta="">
      <span> I am the Title </span>
      <span slot="secondary">
        I am long long text am long long text am long long text am long long
        text am long long text am long long text am long long textam long long
        text am long long text am long long text am long long text am long long
        text am long long text am long long textam long long text am long long
        text am long long text am long long text am long long text am long long
        text am long long textam long long text am long long text am long long
        text am long long text am long long text am long long text am long long
        textam long long text am long long text am long long text am long long
        text am long long text am long long text am long long textam long long
        text am long long text am long long text am long long text am long long
        text am long long text am long long textam long long text am long long
        text am long long text am long long text am long long text am long long
        text am long long text
      </span>
      <fox-icon slot="graphic" class="text-client-80-color" icon="delete"></fox-icon>
      <span slot="meta"> 15.Oct </span>
      <fox-list-item slot="menuItems">Menu Item 1</fox-list-item>
      <fox-list-item slot="menuItems">Menu Item 2 </fox-list-item>
    </fox-activity-list-item>
  </fox-activity-list> `;
  }
}
customElements.define('fox-demo', FoxDemo);
