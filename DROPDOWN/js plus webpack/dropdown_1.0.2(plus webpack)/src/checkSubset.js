
const checkSubset = (parentArray = [], subsetArray = []) => {
  if (parentArray.length === 0) { console.log('Exit to fn'); return };
  return subsetArray.every((el) => parentArray.includes(el));
};

export default checkSubset;
