const str1 = "Anna";
const str2 = "Ann";
const str3 = "  11  ";
const str4 = "  .,ANNa,.  ";
const str5 = "John";

console.log('\n\nЗадание 5: \n');

try {
  isPalindrome(str1);
  isPalindrome(str2);
  isPalindrome(str3);
  isPalindrome(str4);
  isPalindrome(str5);
}
catch (err) {
  console.log(err);
}

function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error(` ${str} - is not a string`);
  }

  if (isPalindromeConfirm(str)) {
    console.log(` String: ${str} - is a palindrome`);
  }
  else {
    console.log(` String: ${str} - is not a palindrome`);
  }
}

function isPalindromeConfirm(str) {
  let startIndex = 0;
  let endIndex = str.length - 1;

  while (startIndex < endIndex) {
    if (str[startIndex].toLowerCase() !== str[endIndex].toLowerCase()) {
      return false;
    }

    startIndex++;
    endIndex--;
  }

  return true;
}
