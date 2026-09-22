/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original = x
     let digit = 0
     let reverce=0
     while (x>0) {
         digit=x%10
         x=Math.floor(x/10)
        reverce =reverce*10+digit

    
        
     }
     return original == reverce
    
};