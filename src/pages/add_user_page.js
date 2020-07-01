/**
 * it define the locators of Add User page
 */
function addUserPage() {

    this.firstname = element(by.css("input[name='FirstName']"));
    this.lastname = element(by.css("input[name='LastName']"));
    this.username = element(by.css("input[name='UserName']"));
    this.password =  element(by.css("input[name='Password']"));
    this.role = element(by.name("RoleId"));
    this.customer = element.all(by.className("radio"));
    this.email = element(by.css("input[name='Email']"));
    this.mobile = element(by.css("input[name='Mobilephone']"));
    this.saveButton = element(by.buttonText("Save"));
}
module.exports = new addUserPage();