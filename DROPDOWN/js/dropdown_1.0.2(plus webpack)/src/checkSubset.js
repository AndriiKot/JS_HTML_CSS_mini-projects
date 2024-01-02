const checkSubset = (parentArray = [], subsetArray = []) =>
  subsetArray.every((el) => parentArray.includes(el));

export default checkSubset;
