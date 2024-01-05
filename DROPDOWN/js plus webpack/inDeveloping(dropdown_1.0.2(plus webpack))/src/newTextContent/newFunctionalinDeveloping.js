import setArrayBackend from "./setArrayBackend";
import setArrayFrontend from "./setArrayFrontend";
import setArrayFullStack from "./setArrayFullStack";

const datasetKey = "content";

const createNewValueTextContent = (
  nodeList,
  setFullStack = setArrayFullStack,
  setBackend = setArrayBackend,
  setFrontend = setArrayFrontend,
) => {
  console.log(setFullStack, setBackend, setFrontend);
  const arrayCheckedElements = [];
  console.dir(arrayCheckedElements)

  nodeList.forEach(element => {
    const checkbox = element.querySelector('input[type=\'checkbox\']');
    if(checkbox.checked) {
      arrayCheckedElements.push(checkbox.value)
    }
  });
  console.dir(arrayCheckedElements)

  // console.log(arrayNodeList)

  const setAllNewValues = new Set([
    "Full Stack",
    "Frontend",
    "Backend",
    "Backend for Frontend",
    "Frontend for Backend",
  ]);
  // console.log(setAllNewValues);
}

export default createNewValueTextContent ;
