export const analyzeArray = (arr) => {

    const min = arr.reduce((a, b) => a < b ? a : b);
    const max = arr.reduce((a, b) => a > b ? a : b);
    const total = arr.reduce((acc, num) => acc + num);
    const avg = total / arr.length;

        return {
            average: avg,
            min: min,
            max: max,
            length: arr.length,
            }
        
};
