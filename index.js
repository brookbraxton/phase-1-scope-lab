// 1. Declare a global variable customerName
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Access and modify global variable
}

// 3. Function to set the best customer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare global variable bestCustomer
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Change the global variable bestCustomer
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'John'; // Assign an initial value

// 6. Function to try changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    
    leastFavoriteCustomer = 'someone else'; // Attempt to change constant
}
