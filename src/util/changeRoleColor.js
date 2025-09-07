const { ROLES } = require("./config");
const { dokkanColors, wotColors, singuColors } = require("./constants");
const changeRoleColor = (rolesMap, interval) => {
  const colorArray = [dokkanColors, wotColors, singuColors];
  console.log("am here 2");

  setInterval(() => {
    console.log("am here");
    for (let index = 0; index < ROLES.length; index++) {
      const newColor = Math.floor(Math.random() * colorArray[index].length);
      rolesMap
        .get(ROLES[index])
        .setColors({
          primaryColor: colorArray[index][newColor],
          //   secondaryColor: "#00FF00",
          //   tertiaryColor: "#0000FF",
        })
        .then((updated) =>
          console.log(`Set colors of role to ${colorArray[index][newColor]}`)
        )
        .catch(console.error);
    }
  }, interval);
};
module.exports = { changeRoleColor };
//role list [[dokkan,0], [test,0], [wife,0]]
