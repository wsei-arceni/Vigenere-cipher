// 0.1 Present alphabet dictionary with order number for each letter +
// 1. Enter text +
//  > some text
// 1.1 Remove spaces +
//  > sometext
// 2. Enter key +
//  > tkey
// 2.2 Extend lenght of key string to text length
//  > tkeytkey
// 3. Represent text and key strings as numbers array with alphabet dictionary
// 4. Add to array of text array of key
// 5. Return result

dict = {"a": "1", "b": "2", "c": "3", "d": "4", "e": "5", "f": "6", "g": "7", "h": "8", "i": "9", "j": "10", "k": "11", "l": "12", "m": "13", "n": "14", "o": "15", "p": "16", "q": "17", "r": "18", "s": "19", "t": "20", "u": "21", "v": "22", "w": "23", "x": "24", "y": "25", "z": "26"};

text = prompt("Enter the text").toLowerCase().replaceAll(" ", "");
key = prompt("Enter the key").toLowerCase().replaceAll(" ", "");

// DEBUG
// alert(text);