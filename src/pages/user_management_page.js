/**
 * it define the locators of User Management page
 */
function userManagementPage() {

    this.adduserButton =  element(by.css("button.btn.btn-link.pull-right"));
    this.userList = element.all(by.repeater("dataRow in displayedCollection"));
    this.deleteConfirmationOk = element(by.xpath("//*[text()='OK']"));
}
module.exports = new userManagementPage();