var _this = this;
var dropDownMainWrapper = document.querySelector(".wrapper");
var selectButton = dropDownMainWrapper.querySelector(".select-btn");
var defaultButtonTextContent = selectButton.querySelector(".text-content").innerText;
var newButtonTextContent = "Selected ";
var selectButtonActiveClassName = "active";
var dropDown = dropDownMainWrapper.querySelector(".list-items");
var liNodeList = dropDown.querySelectorAll(".item");
var dropDownExistsClassName = "exists";
var handleSelectButtonClick = function (element, className) {
    element.classList.toggle(className);
};
selectButton.addEventListener("click", handleSelectButtonClick.bind(this, selectButton, selectButtonActiveClassName));
selectButton.addEventListener("click", handleSelectButtonClick.bind(this, dropDown, dropDownExistsClassName));
var toggleCheckbox = function (e) {
    if (e.target.type === "checkbox")
        return;
    var checkbox = e.currentTarget.querySelector("input[type='checkbox']");
    checkbox.checked = checkbox.checked ? false : true;
};
var newTextContentSelectButton = function (element, oldValue, newValue) {
    var nodeListItems = document.querySelectorAll('.list-items__item__checkbox');
    var count = 0;
    nodeListItems.forEach(function (item) {
        if (item.checked)
            count++;
    });
    element.textContent = count ? newValue + String(count) : oldValue;
};
var selectButtonTextContent = document.querySelector(".text-content");
liNodeList.forEach(function (item) {
    item.addEventListener("click", toggleCheckbox);
    item.addEventListener("click", newTextContentSelectButton.bind(_this, selectButtonTextContent, defaultButtonTextContent, newButtonTextContent));
});
