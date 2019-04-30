// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var pyr = [];
    var mid = Math.floor((n*2-1)/2);
    var lower = mid -1;
    var upper = mid+1;
    for (var i = 0; i < (n*2-1); i++) {
        pyr.push(" ");
    }
    pyr[mid] = "#";

    for (var j = 0; j <= mid; j++) {
        console.log(pyr.join(""));
        pyr[lower] = "#";
        pyr[upper] = "#";
        lower--;
        upper++;
    }
}
module.exports = pyramid;
