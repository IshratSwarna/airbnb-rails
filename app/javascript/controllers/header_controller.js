import { Controller } from "@hotwired/stimulus";
import { toggle } from 'el-transition';
// Connects to data-controller="header"
export default class extends Controller {

  static targets = ['dropdown', 'openUserMenu'];

  connect() {
    console.log("Header connected");

    this.openUserMenuTarget.addEventListener("click", (e)=> {
      toggleDropdown(this.dropdownTarget);
    })
  }
}

function toggleDropdown(element) {
  toggle(element).then(() => {
    console.log("Dropdown toggled")
  })
}
