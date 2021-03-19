// 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

//output need to be
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

//1
let styles = ['Jazz','Blues'];
alert(styles);
//2
styles.push('Rock-n-Roll');
alert(styles);
//3
styles[Math.floor(styles.length/2)] = "Classics";
alert(styles);
//4
styles.shift();
alert(styles);
//5
styles.unshift("Rap","Reggae");
alert(styles);