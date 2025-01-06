/**
 * Converts a number to a string with commas for readability
 * @param {number} num - The number to format
 * @returns {string} The formatted string
 */
export function addCommas(num) {
  // Convert number to string
  const numStr = num.toString();
  
  // Handle negative numbers
  if (numStr.startsWith('-')) {
    return '-' + addCommas(Math.abs(num));
  }
  
  // Split number into integer and decimal parts
  const [integerPart, decimalPart] = numStr.split('.');
  
  // Add commas to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Return formatted number with decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}