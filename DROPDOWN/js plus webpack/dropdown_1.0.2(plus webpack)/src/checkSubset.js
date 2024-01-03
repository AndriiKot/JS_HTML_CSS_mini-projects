
const checkSubset = (parentArray = [], subsetArray = []) => {
  console.log("HI!!")
  return subsetArray.every((el) => parentArray.includes(el));
};

export default checkSubset;
