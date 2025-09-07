const { ROLES } = require("./config");
const { dokkanColors, wotColors, singuColors } = require("./constants");
const changeRoleColor = (rolesMap, interval) => {
  const colorArray = [dokkanColors, wotColors, singuColors];
  const testArray = ["dokkan", "wot", "singu"];
  let colorIndex = [0, 0, 0];
  let currentIndex = 0;
  setInterval(() => {
    // console.log("am here");
    // console.log(colorArray);
    // console.log(testArray[currentIndex], ROLES, ROLES[currentIndex]);
    // console.log(
    //   `current index: ${colorIndex[currentIndex]}, indices= colorIndex_currentIndex: ${colorIndex[currentIndex]} currentIndex: ${currentIndex}`
    // );
    // console.log(`color index: ${colorIndex}`);
    // console.log(ROLES);
    rolesMap //the function
      .get(ROLES[currentIndex])
      .setColors({
        primaryColor: colorArray[currentIndex][colorIndex[currentIndex]],
      })
      .then((updated) =>
        console.log(
          `Set colors of ${ROLES[currentIndex - 1]} to ${
            colorArray[currentIndex - 1][newColor]
          }`
        )
      )
      .catch(console.error);
    const newColor =
      (colorIndex[currentIndex] + 1) % colorArray[currentIndex].length;
    colorIndex[currentIndex] = newColor;
    currentIndex = (currentIndex + 1) % ROLES.length;
  }, interval);
};
module.exports = { changeRoleColor };
//role list [[dokkan,0], [test,0], [wife,0]]
