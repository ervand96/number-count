const array = [1, 4, 5, 8, 4, 5, 8, 8];
let newObject = {};
const numberCount = (arr) => {
  arr.forEach((e) => {
    newObject[e] = (newObject[e] || 0) + 1;
  });
  console.log(newObject);
};

numberCount(array);
