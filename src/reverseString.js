export const reverseString = (string) => {
    return string.split('').reduce((acc, char) => char + acc);
};