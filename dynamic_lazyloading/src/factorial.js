export const factorial = (n) =>{
    if (n==0) return 1;
    const result = n * factorial(n-1);
    console.log(result);
    return result;
}