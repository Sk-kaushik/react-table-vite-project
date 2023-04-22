// RETURN AN ARRAY BASED ON THE OBJECT STRUCTURE PASSED
export const prepareDataArray = (arr, objStructure) => {
  if (!arr?.length) return [];

  let objBluePrint = objStructure ? Object.keys(objStructure) : false;

  if (!objBluePrint || !objBluePrint?.length) return arr;

  let filteredArr = [];

  arr.forEach((item) => {
    let filteredObj = {};

    objBluePrint.forEach((key) => {
      if (item.hasOwnProperty(key)) {
        filteredObj[key] = item[key];
      }
    });

    filteredArr.push(filteredObj);
  });

  return filteredArr;
};

export const prepareSearchStringFromObject = (obj) => {
  if (!obj) return "";

  let searchString = "";
  Object.keys(obj).forEach((key) => {
    searchString = `${searchString}&_${key}=${obj[key]}`;
  });

  console.log(searchString);

  return searchString;
};
