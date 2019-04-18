// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
input: number indicating how many steps there will be.
output: a log, replicating steps / stairs by incrememnting # by 1 as it gets lower. Must contain original width from first step.
*/

function steps(n) {
  var steps = "#";
  var spaces = "";
// sets up our spaces string to be the correct length
  for ( var i = 0; i < n-1; i++) {
    spaces += " ";
  }
 // loop up to n, each time logging an additional # and one less space
  for ( var j = 0; j < n; j++ ) {
    console.log(steps + spaces);
    steps += "#";
    spaces = spaces.slice(1)
  }

}

module.exports = steps;
