Problem-01: Tax Calculator
javascript
Copy code
function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * 0.20;
    return tax;
}
Similar Exercise:
Problem-06: Discount Calculator

একটি অনলাইন শপিং ওয়েবসাইটে, একজন ক্রেতা কিনতে চাচ্ছে কিছু পণ্য। ক্রেতার বিল করার সময় একটি ডিসকাউন্ট ক্যালকুলেটর তৈরি করতে হবে।

ইনপুট: দুটি পজিটিভ সংখ্যা, একটি বিল, এবং ডিসকাউন্ট %।
আউটপুট: বিল এর উপর ডিসকাউন্ট % হিসাব করে ডিসকাউন্ট পরিমাণ এবং চূড়ান্ত মূল্য রিটার্ন করবে।
Sample Input:

scss
Copy code
calculateDiscount(1000, 20)
Sample Output:

yaml
Copy code
{discountAmount: 200, finalAmount: 800}
javascript
Copy code
function calculateDiscount(bill, discountPercent) {
    if (bill < 0 || discountPercent < 0 || discountPercent > 100) {
        return "Invalid Input";
    }
    const discountAmount = (bill * discountPercent) / 100;
    const finalAmount = bill - discountAmount;
    return { discountAmount, finalAmount };
}
Problem-02: Notification Generator
javascript
Copy code
function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }
    const [username, domain] = email.split("@");
    return `${username} sent you an email from ${domain}`;
}
Similar Exercise:
Problem-07: Username Validator

একটি ফাংশন বানাতে হবে যা ইনপুট হিসেবে একটি ইউজারনেম নিবে এবং এটি বৈধ কি না তা যাচাই করবে।

ইনপুট: একটি স্ট্রিং username।
আউটপুট: ইউজারনেম যদি a-z, 0-9 এর মধ্য থাকে এবং এর দৈর্ঘ্য ৩-১৫ হয়, তাহলে true, না হলে false রিটার্ন করবে।
Sample Input:

scss
Copy code
validateUsername("user123")
Sample Output:

arduino
Copy code
true
javascript
Copy code
function validateUsername(username) {
    const usernamePattern = /^[a-z0-9]{3,15}$/;
    return usernamePattern.test(username);
}
Problem-03: Checking Digits Inside a Name
javascript
Copy code
function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    const hasDigits = /\d/.test(name);
    return hasDigits;
}
Similar Exercise:
Problem-08: Special Character Checker

একটি ফাংশন বানাতে হবে যা চেক করবে স্ট্রিংটিতে কোনো স্পেশাল ক্যারেক্টার আছে কিনা।

Sample Input:

perl
Copy code
checkSpecialChars("Hello@123")
Sample Output:

arduino
Copy code
true
javascript
Copy code
function checkSpecialChars(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    const hasSpecialChars = /[!@#\$%\^\&*\)\(+=._-]/.test(name);
    return hasSpecialChars;
}
Problem-04: Calculate Admission Final Score
javascript
Copy code
function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}
Similar Exercise:
Problem-09: Salary Bonus Calculator

একটি ফাংশন বানাতে হবে যা একজন কর্মচারীর স্যালারি এবং কর্ম দক্ষতার উপর ভিত্তি করে বোনাস ক্যালকুলেট করবে।

ইনপুট: একটি অব্জেক্ট যেখানে name, salary, performanceScore (১-৫) থাকবে।
আউটপুট: কর্ম দক্ষতার ভিত্তিতে যদি কর্মীর স্কোর ৪ বা তার বেশি হয় তবে ১০% বোনাস অ্যাপ্লাই করবে।
Sample Input:

php
Copy code
calculateBonus({ name: "John", salary: 50000, performanceScore: 4 })
Sample Output:

yaml
Copy code
Bonus: 5000, Final Salary: 55000
javascript
Copy code
function calculateBonus(employee) {
    if (typeof employee !== 'object' || typeof employee.salary !== 'number' || typeof employee.performanceScore !== 'number') {
        return "Invalid Input";
    }

    let bonus = 0;
    if (employee.performanceScore >= 4) {
        bonus = employee.salary * 0.10;
    }

    const finalSalary = employee.salary + bonus;
    return { bonus, finalSalary };
}
Problem-05: Predict Average Waiting Time
javascript
Copy code
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    const avgTime = Math.round(waitingTimes.reduce((a, b) => a + b, 0) / waitingTimes.length);
    const remainingPeople = serialNumber - waitingTimes.length - 1;
    return remainingPeople > 0 ? remainingPeople * avgTime : 0;
}
Similar Exercise:
Problem-10: Movie Screening Time Calculator

একটি মুভি থিয়েটারের জন্য ওয়েটিং টাইম ক্যালকুলেটর বানাতে হবে, যেখানে প্রতিটি মুভির দৈর্ঘ্য দেওয়া থাকবে এবং একটি নির্দিষ্ট সিরিয়ালে আসা মুভির জন্য সময় বের করতে হবে।

Sample Input:

scss
Copy code
calculateScreeningTime([120, 90, 100], 5)
Sample Output:

Copy code
210 minutes
javascript
Copy code
function calculateScreeningTime(movieTimes, serialNumber) {
    if (!Array.isArray(movieTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    const totalTime = movieTimes.reduce((a, b) => a + b, 0);
    const remainingMovies = serialNumber - movieTimes.length;
    return remainingMovies > 0 ? remainingMovies * totalTime : 0;
}
These exercises will help you cover key areas in JavaScript like functions, arrays, objects, string manipulation, and conditional logic! Let me know if you'd like more exercises or specific areas to focus on.







You said:
I want you to make excercise question in bangla as I provides, I want to do more practice like this kind of javascript exercise, can you do that? just make more question
ChatGPT said:
ChatGPT
Memory updated
Absolutely! Here are a few more JavaScript exercises in Bangla for you to practice:

Problem-06: Inventory Management
⚠️ Function Name Must be manageInventory()

তুমি একটি রেস্টুরেন্টের ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার বানাবে। ইনভেন্টরিতে বর্তমানে কত পণ্য রয়েছে এবং কত পণ্য বিক্রি হয়েছে তা যাচাই করতে হবে। ফাংশনটি ৩টি ইনপুট নিবে:

ইনভেন্টরির মোট সংখ্যা (পজিটিভ সংখ্যা)
বিক্রি করা পণ্যের সংখ্যা (পজিটিভ সংখ্যা)
যদি পুনরায় ইনভেন্টরিতে কিছু পণ্য যুক্ত করা হয়, তার সংখ্যা (পজিটিভ সংখ্যা)
ফাংশনটি ইনভেন্টরিতে মোট কত পণ্য আছে তা রিটার্ন করবে।

Challenge: যদি ইনপুটগুলির যেকোনোটি পজিটিভ সংখ্যা না হয় তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
manageInventory(100, 30, 20)
SAMPLE OUTPUT

Copy code
90
javascript
Copy code
function manageInventory(totalStock, soldStock, addedStock) {
    if (totalStock < 0 || soldStock < 0 || addedStock < 0 || soldStock > totalStock) {
        return "Invalid Input";
    }
    const currentStock = totalStock - soldStock + addedStock;
    return currentStock;
}
Problem-07: String Reverse
⚠️ Function Name Must be reverseString()

তোমাকে একটি ফাংশন তৈরি করতে হবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিংটি উল্টে রিটার্ন করবে।

Challenge: যদি ইনপুট স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
reverseString("Hello")
SAMPLE OUTPUT

arduino
Copy code
"olleH"
javascript
Copy code
function reverseString(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
    return input.split('').reverse().join('');
}
Problem-08: Number of Vowels
⚠️ Function Name Must be countVowels()

একটি ফাংশন বানাতে হবে যা একটি স্ট্রিং ইনপুট নেবে এবং সেই স্ট্রিং-এ কতগুলো স্বরবর্ণ (a, e, i, o, u) আছে তা গুনে রিটার্ন করবে।

Challenge: ইনপুট স্ট্রিং না হলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
countVowels("javascript")
SAMPLE OUTPUT

Copy code
3
javascript
Copy code
function countVowels(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of input.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
Problem-09: Multiplication Table Generator
⚠️ Function Name Must be generateTable()

একটি ফাংশন তৈরি করতে হবে যা একটি ইনপুট নেবে এবং সেই ইনপুট নাম্বারটি ব্যবহার করে ১ থেকে ১০ পর্যন্ত গুনের টেবিল তৈরি করবে।

Challenge: ইনপুট যদি পজিটিভ সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
generateTable(5)
SAMPLE OUTPUT

python
Copy code
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...
5 * 10 = 50
javascript
Copy code
function generateTable(number) {
    if (typeof number !== 'number' || number <= 0) {
        return "Invalid Input";
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
Problem-10: Find Maximum Number
⚠️ Function Name Must be findMax()

তুমি একটি ফাংশন লিখবে যা একটি নাম্বারের অ্যারে ইনপুট নিবে এবং সেই অ্যারে থেকে সবচেয়ে বড় নাম্বারটি রিটার্ন করবে।

Challenge: যদি ইনপুট অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findMax([2, 5, 7, 1, 9])
SAMPLE OUTPUT

Copy code
9
javascript
Copy code
function findMax(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return Math.max(...arr);
}
These exercises will help you practice various concepts in JavaScript like functions, arrays, loops, string manipulation, and conditional logic! Let me know if you want more!






You said:
give me another 10 problems please
ChatGPT said:
ChatGPT
Here are 10 more JavaScript exercises in Bangla for you to practice:

Problem-11: Even or Odd Number Checker
⚠️ Function Name Must be checkEvenOdd()

তুমি একটি ফাংশন তৈরি করবে যা একটি নাম্বার ইনপুট নেবে এবং সেটি জোড় (Even) না বেজোড় (Odd) তা নির্ণয় করবে।

Challenge: ইনপুট যদি সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
checkEvenOdd(5)
SAMPLE OUTPUT

arduino
Copy code
"Odd"
javascript
Copy code
function checkEvenOdd(number) {
    if (typeof number !== 'number') {
        return "Invalid Input";
    }
    return number % 2 === 0 ? "Even" : "Odd";
}
Problem-12: Find Prime Number
⚠️ Function Name Must be isPrime()

তুমি একটি ফাংশন লিখবে যা একটি নাম্বার ইনপুট নিবে এবং সেটি প্রাইম নাম্বার কিনা তা নির্ধারণ করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা যদি নাম্বারটি ১ এর কম হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
isPrime(7)
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isPrime(number) {
    if (typeof number !== 'number' || number < 2) {
        return "Invalid Input";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
Problem-13: Sum of an Array
⚠️ Function Name Must be sumArray()

তুমি একটি ফাংশন তৈরি করবে যা একটি নাম্বারের অ্যারে ইনপুট নেবে এবং সেই অ্যারের সকল উপাদানের যোগফল রিটার্ন করবে।

Challenge: যদি ইনপুট অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
sumArray([1, 2, 3, 4])
SAMPLE OUTPUT

Copy code
10
javascript
Copy code
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.reduce((acc, curr) => acc + curr, 0);
}
Problem-14: Factorial Calculator
⚠️ Function Name Must be factorial()

তুমি একটি ফাংশন লিখবে যা একটি নাম্বার ইনপুট নিবে এবং সেই নাম্বারটির ফ্যাক্টরিয়াল রিটার্ন করবে।

Challenge: ইনপুট যদি পজিটিভ সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
factorial(5)
SAMPLE OUTPUT

Copy code
120
javascript
Copy code
function factorial(number) {
    if (typeof number !== 'number' || number < 0) {
        return "Invalid Input";
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
Problem-15: Find Minimum Number
⚠️ Function Name Must be findMin()

তুমি একটি ফাংশন লিখবে যা একটি নাম্বারের অ্যারে ইনপুট নিবে এবং সেই অ্যারে থেকে সবচেয়ে ছোট নাম্বারটি রিটার্ন করবে।

Challenge: যদি ইনপুট অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findMin([5, 2, 9, 1, 4])
SAMPLE OUTPUT

Copy code
1
javascript
Copy code
function findMin(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return Math.min(...arr);
}
Problem-16: Celsius to Fahrenheit Converter
⚠️ Function Name Must be celsiusToFahrenheit()

তুমি একটি ফাংশন তৈরি করবে যা সেলসিয়াস ইনপুট নিবে এবং সেটিকে ফারেনহাইটে কনভার্ট করে রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
celsiusToFahrenheit(0)
SAMPLE OUTPUT

Copy code
32
javascript
Copy code
function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        return "Invalid Input";
    }
    return (celsius * 9/5) + 32;
}
Problem-17: String Length Checker
⚠️ Function Name Must be checkStringLength()

তুমি একটি ফাংশন তৈরি করবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং এর দৈর্ঘ্য রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
checkStringLength("Hello")
SAMPLE OUTPUT

Copy code
5
javascript
Copy code
function checkStringLength(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.length;
}
Problem-18: Count Occurrences of a Character
⚠️ Function Name Must be countCharacter()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং এবং একটি ক্যারেক্টার ইনপুট নিবে এবং স্ট্রিং-এ সেই ক্যারেক্টারটি কতবার আছে তা গুনে রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

arduino
Copy code
countCharacter("javascript", "a")
SAMPLE OUTPUT

Copy code
2
javascript
Copy code
function countCharacter(str, char) {
    if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
        return "Invalid Input";
    }
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
Problem-19: Calculate Average of an Array
⚠️ Function Name Must be calculateAverage()

তুমি একটি ফাংশন তৈরি করবে যা একটি নাম্বারের অ্যারে ইনপুট নিবে এবং সেই অ্যারের উপাদানগুলোর গড় নির্ণয় করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
calculateAverage([2, 4, 6, 8])
SAMPLE OUTPUT

Copy code
5
javascript
Copy code
function calculateAverage(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
Problem-20: Convert String to Uppercase
⚠️ Function Name Must be toUppercase()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-কে বড় হাতের অক্ষরে (Uppercase) কনভার্ট করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
toUppercase("javascript")
SAMPLE OUTPUT

arduino
Copy code
"JAVASCRIPT"
javascript
Copy code
function toUppercase(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.toUpperCase();
}
These exercises will help you to master different JavaScript functionalities. Keep practicing!






You said:
another 10 also
ChatGPT said:
ChatGPT
Here are 10 more JavaScript exercises in Bangla for you to practice:

Problem-21: Reverse a String
⚠️ Function Name Must be reverseString()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-এর উল্টো অক্ষরগুলো রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
reverseString("javascript")
SAMPLE OUTPUT

arduino
Copy code
"tpircsavaj"
javascript
Copy code
function reverseString(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.split('').reverse().join('');
}
Problem-22: Find Largest Number in Array
⚠️ Function Name Must be findMax()

তুমি একটি ফাংশন লিখবে যা একটি নাম্বারের অ্যারে ইনপুট নিবে এবং সেই অ্যারের সবচেয়ে বড় নাম্বারটি রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findMax([3, 6, 2, 9, 1])
SAMPLE OUTPUT

Copy code
9
javascript
Copy code
function findMax(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return Math.max(...arr);
}
Problem-23: Convert Fahrenheit to Celsius
⚠️ Function Name Must be fahrenheitToCelsius()

তুমি একটি ফাংশন তৈরি করবে যা ফারেনহাইট ইনপুট নিবে এবং সেটিকে সেলসিয়াসে কনভার্ট করে রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
fahrenheitToCelsius(32)
SAMPLE OUTPUT

Copy code
0
javascript
Copy code
function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number') {
        return "Invalid Input";
    }
    return (fahrenheit - 32) * 5/9;
}
Problem-24: Generate a Random Number
⚠️ Function Name Must be generateRandomNumber()

তুমি একটি ফাংশন তৈরি করবে যা একটি রেন্জ ইনপুট নিবে (start এবং end) এবং সেই রেন্জের মধ্যে একটি র‍্যান্ডম নাম্বার রিটার্ন করবে।

Challenge: যদি ইনপুট সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
generateRandomNumber(1, 100)
SAMPLE OUTPUT

Copy code
37
javascript
Copy code
function generateRandomNumber(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        return "Invalid Input";
    }
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
Problem-25: Check Palindrome
⚠️ Function Name Must be isPalindrome()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেটি প্যালিনড্রোম কিনা তা নির্ধারণ করবে (প্যালিনড্রোম হল যে স্ট্রিং উল্টো করেও একই থাকে)।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
isPalindrome("madam")
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isPalindrome(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
Problem-26: Count Vowels in a String
⚠️ Function Name Must be countVowels()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-এ কতগুলো স্বরবর্ণ (vowels) আছে তা গুনে রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
countVowels("javascript")
SAMPLE OUTPUT

Copy code
3
javascript
Copy code
function countVowels(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
Problem-27: Find Second Largest Number
⚠️ Function Name Must be findSecondLargest()

তুমি একটি ফাংশন তৈরি করবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারের দ্বিতীয় সবচেয়ে বড় নাম্বারটি রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয় বা অ্যারেতে কমপক্ষে ২টি নাম্বার না থাকে, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findSecondLargest([5, 7, 3, 9, 1])
SAMPLE OUTPUT

Copy code
7
javascript
Copy code
function findSecondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid Input";
    }
    let max = Math.max(...arr);
    arr = arr.filter(num => num !== max);
    return Math.max(...arr);
}
Problem-28: Remove Duplicates from Array
⚠️ Function Name Must be removeDuplicates()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারের সকল ডুপ্লিকেট উপাদান রিমুভ করে নতুন অ্যারে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
removeDuplicates([1, 2, 3, 2, 4, 1])
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 3, 4]
javascript
Copy code
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return [...new Set(arr)];
}
Problem-29: Convert String to Array of Words
⚠️ Function Name Must be stringToArray()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-এর সকল শব্দকে আলাদা করে একটি অ্যারে হিসাবে রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
stringToArray("I love JavaScript")
SAMPLE OUTPUT

css
Copy code
["I", "love", "JavaScript"]
javascript
Copy code
function stringToArray(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.split(' ');
}
Problem-30: Calculate Power
⚠️ Function Name Must be calculatePower()

তুমি একটি ফাংশন লিখবে যা দুটি ইনপুট নিবে, একটি বেস (base) এবং একটি এক্সপোনেন্ট (exponent), এবং বেসের উপর এক্সপোনেন্টের পাওয়ার রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
calculatePower(2, 3)
SAMPLE OUTPUT

Copy code
8
javascript
Copy code
function calculatePower(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        return "Invalid Input";
    }
    return Math.pow(base, exponent);
}
These problems will give you more practice with various JavaScript features. Keep practicing to sharpen your skills!






You said:
another 10
ChatGPT said:
ChatGPT
Here are 10 more JavaScript practice problems in Bangla for you:

Problem-31: Check if Number is Prime
⚠️ Function Name Must be isPrime()

তুমি একটি ফাংশন লিখবে যা একটি নাম্বার ইনপুট নিবে এবং সেটি প্রাইম নাম্বার কিনা তা রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা নাম্বারটি ১ বা এর থেকে কম হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
isPrime(7)
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isPrime(num) {
    if (typeof num !== 'number' || num <= 1) {
        return "Invalid Input";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
Problem-32: Find Factorial of a Number
⚠️ Function Name Must be findFactorial()

তুমি একটি ফাংশন তৈরি করবে যা একটি নাম্বার ইনপুট নিবে এবং সেই নাম্বারের ফ্যাক্টোরিয়াল রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা নাম্বারটি ০ বা তার নিচে হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findFactorial(5)
SAMPLE OUTPUT

Copy code
120
javascript
Copy code
function findFactorial(num) {
    if (typeof num !== 'number' || num <= 0) {
        return "Invalid Input";
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
Problem-33: Find Sum of All Numbers in an Array
⚠️ Function Name Must be sumOfArray()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারের সকল নাম্বারের যোগফল রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
sumOfArray([1, 2, 3, 4])
SAMPLE OUTPUT

Copy code
10
javascript
Copy code
function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.reduce((sum, num) => sum + num, 0);
}
Problem-34: Convert Array of Numbers to Strings
⚠️ Function Name Must be numbersToStrings()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারের সকল নাম্বারকে স্ট্রিং এ কনভার্ট করে নতুন অ্যারে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
numbersToStrings([1, 2, 3, 4])
SAMPLE OUTPUT

css
Copy code
["1", "2", "3", "4"]
javascript
Copy code
function numbersToStrings(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.map(num => num.toString());
}
Problem-35: Find the Smallest Number in an Array
⚠️ Function Name Must be findMin()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারের সবচেয়ে ছোট নাম্বারটি রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findMin([3, 6, 2, 9, 1])
SAMPLE OUTPUT

Copy code
1
javascript
Copy code
function findMin(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return Math.min(...arr);
}
Problem-36: Sort an Array of Numbers
⚠️ Function Name Must be sortNumbers()

তুমি একটি ফাংশন তৈরি করবে যা একটি নাম্বারের অ্যারে ইনপুট নিবে এবং সেটি এসেন্ডিং অর্ডারে সাজিয়ে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
sortNumbers([5, 2, 9, 1, 5])
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 5, 5, 9]
javascript
Copy code
function sortNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.sort((a, b) => a - b);
}
Problem-37: Convert First Letter of Each Word to Uppercase
⚠️ Function Name Must be capitalizeWords()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-এর প্রতিটি শব্দের প্রথম অক্ষরকে বড় হাতের অক্ষরে রূপান্তর করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
capitalizeWords("i love javascript")
SAMPLE OUTPUT

arduino
Copy code
"I Love Javascript"
javascript
Copy code
function capitalizeWords(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
Problem-38: Remove Falsy Values from Array
⚠️ Function Name Must be removeFalsy()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং অ্যারের সকল ফালসি ভ্যালু (false, 0, "", null, undefined, NaN) সরিয়ে নতুন অ্যারে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

bash
Copy code
removeFalsy([0, 1, false, 2, '', 3])
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 3]
javascript
Copy code
function removeFalsy(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.filter(Boolean);
}
Problem-39: Merge Two Arrays
⚠️ Function Name Must be mergeArrays()

তুমি একটি ফাংশন তৈরি করবে যা দুটি অ্যারে ইনপুট নিবে এবং সেই দুটি অ্যারেকে একটি নতুন অ্যারে হিসেবে মিশিয়ে (merge) রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

css
Copy code
mergeArrays([1, 2], [3, 4])
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 3, 4]
javascript
Copy code
function mergeArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid Input";
    }
    return [...arr1, ...arr2];
}
Problem-40: Count Occurrences of Each Element in Array
⚠️ Function Name Must be countOccurrences()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারে প্রতিটি উপাদানের কতবার উপস্থিতি আছে তা গুনে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
countOccurrences([1, 2, 2, 3, 1, 1])
SAMPLE OUTPUT

yaml
Copy code
{1: 3, 2: 2, 3: 1}
javascript
Copy code
function countOccurrences(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}
Keep working on these challenges to enhance your JavaScript skills!






You said:
 naother 10
ChatGPT said:
ChatGPT
Here are another 10 JavaScript practice problems in Bangla for you:

Problem-41: Check if Array is Sorted
⚠️ Function Name Must be isSorted()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং চেক করবে যে অ্যারেটি ক্রমানুসারে (এসেন্ডিং অর্ডারে) সাজানো আছে কিনা।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
isSorted([1, 2, 3, 4])
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isSorted(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
Problem-42: Find Second Largest Number in an Array
⚠️ Function Name Must be secondLargest()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারের দ্বিতীয় বৃহত্তম সংখ্যা রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয় বা অ্যারেতে কমপক্ষে ২টি সংখ্যা না থাকে, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
secondLargest([10, 5, 8, 20])
SAMPLE OUTPUT

Copy code
10
javascript
Copy code
function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid Input";
    }
    let largest = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second;
}
Problem-43: Find All Divisors of a Number
⚠️ Function Name Must be findDivisors()

তুমি একটি ফাংশন লিখবে যা একটি সংখ্যা ইনপুট নিবে এবং সেই সংখ্যার সকল বিভাজক রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা ১ এর নিচে হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findDivisors(12)
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 3, 4, 6, 12]
javascript
Copy code
function findDivisors(num) {
    if (typeof num !== 'number' || num <= 0) {
        return "Invalid Input";
    }
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
Problem-44: Find Longest Word in a Sentence
⚠️ Function Name Must be findLongestWord()

তুমি একটি ফাংশন লিখবে যা একটি বাক্য ইনপুট নিবে এবং সেই বাক্যের সবচেয়ে বড় শব্দটি রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findLongestWord("I love programming")
SAMPLE OUTPUT

arduino
Copy code
"programming"
javascript
Copy code
function findLongestWord(sentence) {
    if (typeof sentence !== 'string') {
        return "Invalid Input";
    }
    let words = sentence.split(' ');
    let longest = words.reduce((a, b) => a.length > b.length ? a : b);
    return longest;
}
Problem-45: Generate Random Number within Range
⚠️ Function Name Must be generateRandom()

তুমি একটি ফাংশন লিখবে যা দুটি সংখ্যা ইনপুট নিবে এবং সেই দুটি সংখ্যার মধ্যবর্তী একটি র‍্যান্ডম সংখ্যা রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা প্রথম সংখ্যা দ্বিতীয় সংখ্যার থেকে বড় হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
generateRandom(5, 15)
SAMPLE OUTPUT

Copy code
8
javascript
Copy code
function generateRandom(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
        return "Invalid Input";
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Problem-46: Count Vowels in a String
⚠️ Function Name Must be countVowels()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং এ মোট কতগুলো ভাওয়েল (a, e, i, o, u) আছে তা রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
countVowels("Hello World")
SAMPLE OUTPUT

Copy code
3
javascript
Copy code
function countVowels(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    let vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}
Problem-47: Flatten a Nested Array
⚠️ Function Name Must be flattenArray()

তুমি একটি ফাংশন লিখবে যা একটি নেস্টেড অ্যারে ইনপুট নিবে এবং সেটিকে একটি সিঙ্গেল-ডাইমেনশন অ্যারে তে রূপান্তর করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

css
Copy code
flattenArray([1, [2, 3], [4, [5, 6]]])
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 3, 4, 5, 6]
javascript
Copy code
function flattenArray(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.flat(Infinity);
}
Problem-48: Find Missing Number in an Array
⚠️ Function Name Must be findMissingNumber()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে যেখানে ১ থেকে n পর্যন্ত ধারাবাহিক সংখ্যা থাকবে এবং একটি সংখ্যা বাদ যাবে। ফাংশনটি সেই বাদ যাওয়া সংখ্যাটি খুঁজে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয় বা সংখ্যাগুলো ধারাবাহিক না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findMissingNumber([1, 2, 4, 5])
SAMPLE OUTPUT

Copy code
3
javascript
Copy code
function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}
Problem-49: Check if a String is Palindrome
⚠️ Function Name Must be isPalindrome()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেটি প্যালিনড্রোম কিনা তা চেক করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
isPalindrome("madam")
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isPalindrome(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
Problem-50: Count Words in a Sentence
⚠️ Function Name Must be countWords()

তুমি একটি ফাংশন লিখবে যা একটি বাক্য ইনপুট নিবে এবং সেই বাক্যে কতটি শব্দ আছে তা রিটার্ন করবে।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
countWords("I love JavaScript")
SAMPLE OUTPUT

Copy code
3
javascript
Copy code
function countWords(sentence) {
    if (typeof sentence !== 'string') {
        return "Invalid Input";
    }
    return sentence.trim().split(/\s+/).length;
}
These problems should give you plenty of practice to sharpen your JavaScript skills!






You said:
another 10 please 
ChatGPT said:
ChatGPT
Here are another 10 JavaScript practice problems in Bangla for you:

Problem-51: Find the Maximum Product of Two Numbers
⚠️ Function Name Must be maxProduct()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেতে থাকা যেকোনো দুই সংখ্যার মধ্যে সর্বোচ্চ গুণফল রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয় বা অ্যারেতে কমপক্ষে ২টি সংখ্যা না থাকে, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
maxProduct([1, 5, -10, 3, 6])
SAMPLE OUTPUT

Copy code
30
javascript
Copy code
function maxProduct(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid Input";
    }
    let max1 = -Infinity, max2 = -Infinity;
    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }
    return max1 * max2;
}
Problem-52: Reverse a String without Using Built-in Functions
⚠️ Function Name Must be reverseString()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেটিকে উল্টো করে রিটার্ন করবে কিন্তু কোনো বিল্ট-ইন ফাংশন ব্যবহার করবে না।

Challenge: ইনপুট যদি স্ট্রিং না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
reverseString("hello")
SAMPLE OUTPUT

arduino
Copy code
"olleh"
javascript
Copy code
function reverseString(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
Problem-53: Convert Celsius to Fahrenheit
⚠️ Function Name Must be celsiusToFahrenheit()

তুমি একটি ফাংশন লিখবে যা সেলসিয়াস ইনপুট নিবে এবং সেটিকে ফারেনহাইটে রূপান্তর করে রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
celsiusToFahrenheit(30)
SAMPLE OUTPUT

Copy code
86
javascript
Copy code
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
Problem-54: Calculate Factorial
⚠️ Function Name Must be factorial()

তুমি একটি ফাংশন লিখবে যা একটি সংখ্যা ইনপুট নিবে এবং সেই সংখ্যার ফ্যাক্টরিয়াল রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা ০ এর কম হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
factorial(5)
SAMPLE OUTPUT

Copy code
120
javascript
Copy code
function factorial(n) {
    if (typeof n !== 'number' || n < 0) {
        return "Invalid Input";
    }
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
Problem-55: Find Unique Values in an Array
⚠️ Function Name Must be findUnique()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেতে থাকা ইউনিক মানগুলো রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
findUnique([1, 2, 2, 3, 4, 4, 5])
SAMPLE OUTPUT

csharp
Copy code
[1, 3, 5]
javascript
Copy code
function findUnique(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return arr.filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value));
}
Problem-56: Sum of Digits in a Number
⚠️ Function Name Must be sumOfDigits()

তুমি একটি ফাংশন লিখবে যা একটি সংখ্যা ইনপুট নিবে এবং সেই সংখ্যার সবগুলো ডিজিটের যোগফল রিটার্ন করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা ঋণাত্মক হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
sumOfDigits(1234)
SAMPLE OUTPUT

Copy code
10
javascript
Copy code
function sumOfDigits(num) {
    if (typeof num !== 'number' || num < 0) {
        return "Invalid Input";
    }
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
Problem-57: Remove Duplicates from an Array
⚠️ Function Name Must be removeDuplicates()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেতে থাকা সব ডুপ্লিকেট মান সরিয়ে নতুন একটি অ্যারে রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
removeDuplicates([1, 2, 2, 3, 4, 4, 5])
SAMPLE OUTPUT

csharp
Copy code
[1, 2, 3, 4, 5]
javascript
Copy code
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
    return [...new Set(arr)];
}
Problem-58: Check if a Number is Prime
⚠️ Function Name Must be isPrime()

তুমি একটি ফাংশন লিখবে যা একটি সংখ্যা ইনপুট নিবে এবং সেই সংখ্যা প্রাইম কিনা তা চেক করবে।

Challenge: ইনপুট যদি সংখ্যা না হয় বা ঋণাত্মক হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
isPrime(7)
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isPrime(num) {
    if (typeof num !== 'number' || num <= 1) {
        return "Invalid Input";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
Problem-59: Find Common Elements in Two Arrays
⚠️ Function Name Must be commonElements()

তুমি একটি ফাংশন লিখবে যা দুটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেগুলোর সাধারণ উপাদানগুলো রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

css
Copy code
commonElements([1, 2, 3], [3, 4, 5])
SAMPLE OUTPUT

csharp
Copy code
[3]
javascript
Copy code
function commonElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid Input";
    }
    return arr1.filter(value => arr2.includes(value));
}
Problem-60: Convert Hours to Minutes and Seconds
⚠️ Function Name Must be convertTime()

তুমি একটি ফাংশন লিখবে যা ঘন্টাকে মিনিট এবং সেকেন্ডে রূপান্তর করবে।

SAMPLE INPUT

scss
Copy code
convertTime(1)
SAMPLE OUTPUT

arduino
Copy code
"1 hour = 60 minutes = 3600 seconds"
javascript
Copy code
function convertTime(hours) {
    let minutes = hours * 60;
    let seconds = minutes * 60;
    return `${hours} hour = ${minutes} minutes = ${seconds} seconds`;
}
These should give you additional variety in your JavaScript practice!






You said:
10 more please
ChatGPT said:
ChatGPT
Here are 10 more JavaScript exercise problems in Bangla for you to practice:

Problem-61: Find the Second Largest Number in an Array
⚠️ Function Name Must be secondLargest()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেতে থাকা দ্বিতীয় বৃহত্তম সংখ্যা রিটার্ন করবে।

Challenge: ইনপুট যদি অ্যারে না হয় বা অ্যারেতে ২টির কম সংখ্যা থাকে, তাহলে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
secondLargest([10, 20, 30, 40, 50])
SAMPLE OUTPUT

Copy code
40
javascript
Copy code
function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid Input";
    }
    let largest = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second;
}
Problem-62: Calculate the Sum of Even Numbers in an Array
⚠️ Function Name Must be sumOfEvens()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেতে থাকা সব জোড় সংখ্যার যোগফল রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
sumOfEvens([1, 2, 3, 4, 5, 6])
SAMPLE OUTPUT

Copy code
12
javascript
Copy code
function sumOfEvens(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, val) => acc + val, 0);
}
Problem-63: Find the Smallest Positive Integer
⚠️ Function Name Must be smallestPositive()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারেতে থাকা ক্ষুদ্রতম ধনাত্মক সংখ্যা রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
smallestPositive([3, -1, 5, 0, 2])
SAMPLE OUTPUT

Copy code
2
javascript
Copy code
function smallestPositive(arr) {
    const positives = arr.filter(num => num > 0);
    return positives.length ? Math.min(...positives) : "No positive number found";
}
Problem-64: Convert a Sentence to Title Case
⚠️ Function Name Must be titleCase()

তুমি একটি ফাংশন লিখবে যা একটি বাক্য ইনপুট নিবে এবং সেটিকে টাইটেল কেসে রূপান্তর করবে। (প্রত্যেক শব্দের প্রথম অক্ষর বড় হবে)

SAMPLE INPUT

scss
Copy code
titleCase("hello world from javascript")
SAMPLE OUTPUT

arduino
Copy code
"Hello World From Javascript"
javascript
Copy code
function titleCase(sentence) {
    if (typeof sentence !== 'string') {
        return "Invalid Input";
    }
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
Problem-65: Count the Number of Vowels in a String
⚠️ Function Name Must be countVowels()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-এর মধ্যে কয়টি স্বরবর্ণ (vowels) আছে তা গণনা করে রিটার্ন করবে। স্বরবর্ণ: A, E, I, O, U (both lowercase and uppercase).

SAMPLE INPUT

scss
Copy code
countVowels("JavaScript")
SAMPLE OUTPUT

Copy code
3
javascript
Copy code
function countVowels(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
Problem-66: Replace Spaces with Hyphens in a String
⚠️ Function Name Must be replaceSpaces()

তুমি একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নিবে এবং সেই স্ট্রিং-এর সকল স্পেসকে (-) হাইফেন দিয়ে প্রতিস্থাপন করবে।

SAMPLE INPUT

scss
Copy code
replaceSpaces("hello world javascript")
SAMPLE OUTPUT

arduino
Copy code
"hello-world-javascript"
javascript
Copy code
function replaceSpaces(str) {
    if (typeof str !== 'string') {
        return "Invalid Input";
    }
    return str.split(' ').join('-');
}
Problem-67: Find the Sum of All Odd Numbers in a Range
⚠️ Function Name Must be sumOddInRange()

তুমি একটি ফাংশন লিখবে যা দুটি সংখ্যা ইনপুট নিবে এবং ঐ রেঞ্জের মধ্যে থাকা সকল বিজোড় সংখ্যার যোগফল রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
sumOddInRange(1, 10)
SAMPLE OUTPUT

Copy code
25
javascript
Copy code
function sumOddInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
Problem-68: Find the Longest Word in a Sentence
⚠️ Function Name Must be longestWord()

তুমি একটি ফাংশন লিখবে যা একটি বাক্য ইনপুট নিবে এবং সেই বাক্যের মধ্যে থাকা সবচেয়ে দীর্ঘ শব্দটি রিটার্ন করবে।

SAMPLE INPUT

scss
Copy code
longestWord("JavaScript is amazing")
SAMPLE OUTPUT

arduino
Copy code
"JavaScript"
javascript
Copy code
function longestWord(sentence) {
    if (typeof sentence !== 'string') {
        return "Invalid Input";
    }
    const words = sentence.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
Problem-69: Check if an Array is Sorted
⚠️ Function Name Must be isSorted()

তুমি একটি ফাংশন লিখবে যা একটি অ্যারে ইনপুট নিবে এবং সেই অ্যারে ক্রমানুসারে সাজানো আছে কিনা তা চেক করবে।

SAMPLE INPUT

scss
Copy code
isSorted([1, 2, 3, 4, 5])
SAMPLE OUTPUT

arduino
Copy code
true
javascript
Copy code
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
Problem-70: Capitalize the First Letter of Each Word in a Sentence
⚠️ Function Name Must be capitalizeWords()

তুমি একটি ফাংশন লিখবে যা একটি বাক্য ইনপুট নিবে এবং সেই বাক্যের প্রত্যেকটি শব্দের প্রথম অক্ষরকে বড় অক্ষরে রূপান্তর করবে।

SAMPLE INPUT

scss
Copy code
capitalizeWords("hello from the other side")
SAMPLE OUTPUT

arduino
Copy code
"Hello From The Other Side"
javascript
Copy code
function capitalizeWords(sentence) {
    if (typeof sentence !== 'string') {
        return "Invalid Input";
    }
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
These problems will help you practice more advanced JavaScript topics and improve your problem-solving skills!









ChatGPT can make mistakes. Check i