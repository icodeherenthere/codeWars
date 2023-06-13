// The code is a recursive attempt in calculating the result of a factorial function.
// I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
// In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

// The goal is to find the bugs in the sourcecode and fix them (play a little pest control).

function facRecursion(value) {
  if (value < 0) {
    return 0;
  } else if (value === 0 || value === 1) {
    return 1;
  } else {
    return value * facRecursion(value - 1);
  }
}