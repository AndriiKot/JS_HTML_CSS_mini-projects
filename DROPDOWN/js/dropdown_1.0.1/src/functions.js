"use strict";

const handleClick = (element, className) => {
  element.classList.toggle(className);
};

const toggleCheckbox = (e) => {
  if (e.target.type === "checkbox") return;

  const checkbox = e.currentTarget.querySelector("input[type='checkbox']");
  checkbox.checked = !checkbox.checked;
};

export { handleClick, toggleCheckbox}