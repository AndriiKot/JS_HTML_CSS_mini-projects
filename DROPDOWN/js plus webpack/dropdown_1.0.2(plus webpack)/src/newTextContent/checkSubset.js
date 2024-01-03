
const checkSubset = (parentArray = [], subsetArray = []) => {
  return subsetArray.every((el) => parentArray.includes(el));
};

export default checkSubset;
