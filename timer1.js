

// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments.

// This will access the user's command line inputs
const args = process.argv.slice(2);

// If the user didn't provide any input, end here.
if (args.length === 0) {
  return;
}


for (let i = 0; i < sortedTime.length; i++) {
  // If the number is an integer and equal to or greater than 0...
  if (Number.isInteger(sortedTime[i]) && sortedTime[i] >= 0);
  setTimeout(() => {
    process.stdout.write('\x07')
  }, (sortedTime[i] * 1000))
};


