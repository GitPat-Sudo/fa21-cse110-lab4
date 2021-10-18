1. At line 12 the code returns, 3. This is the var i's value after the for loop terminates, len of prices=3.
2. At line 13 the code returns, 150. This is because the last item in prices list is 300 and 300*0.5=150 
3. At line 14 the code returns, 150. This is because the finalPrice is basically the same as ^ *100/100 =same
4. The function returns [50, 100, 150]. This is because it does what it is supposed to and discounts the <br>
   given list and appends it into the returned list. 
5. At line 12 the code doesn't work because it throws a ReferenceError. i is not defined because it only exists <br>
   in the block with the for loop and not out of it where it is called again in line 12 
6. At line 13 the code throws another ReferenceError, this is because let is used for discountedPrice. Let <br>
   doesn't exist outside the for loop block so it needs to be defined again before it is called.
7. At line 14 the code returns 150. This is because let is declared within the same block as the console.log. <br>
   Therefore, it works as intended and holds the value that it got from the for loop. 
8. The final return of the function is [50, 100, 150]. This because let discounted is in the same block as the <br>
   return statement. So discounted is modified in the for loop and then returned. 
9. Another ReferenceError, i isn't defined because in the loop it is let i. So i doesn't exist when called by <br>
   console.log. 
10. At line 12, 3 is returned. This is because you are logging the value of const length which was set to 3. 
11. The function returns [50, 100, 150] this is expected. Not much was changed in the code since the round part <br>
    wasn't even doing anything. The fact that discounted is a const list doesn't mean anything because you can still<br> change a const list you just can't make discounted point to another list. Therefore we return the <br>
    [50, 100, 150] because there wasn't anything in the way of that being returned 

12. 
    a. You can access it using student.name which will return Sarah. 
    b. You can access it using student['Grad Year'] which will return 2022. 
    c. You can access it using student.greeting() which will print Hello!. 
    d. You can access the name of the Favorite teacher by typing student['Favorite Teacher'].name 
    e. You can access the name of the first index in the array of the courseLoad property of the student object<br>
       by typing student.courseLoad[0] which will give you CSE 110 

13. a. '3'+2= '32' This is because 2 gets converted to a string and appened to 3. 
    b. '3'-2=1 This is because 3 gets converted to a int so the subtraction won't bug out. You can't subtract <br>
    from a string. 
    c. 3+null=0 as null get's mapped to 0 in this case for int addition so 3+0=0 
    d. '3'+null=3null as null gets converted to its string equivalent to concat with '3' 
    e. true + 3 = 4 as true is mapped to the 1 value and so 1 + 3 = 4. true =1 in many cases
    f. false + null =0 this makes sense because false has 0 value in addition and so does null 0+0=0 
    g. '3' + undefined = '3undefined' This is because undefined gets mapped to its string equivalent to concat
    h. '3' -undefined = NaN. NaN is when we get a value that is supposed to be a number but isn't actually a number <br> '3'- undefined is not an int because undefined isn't assigned any value 

    14. a. '2'>1 = true This is true because '2' becomes 2 when comparing with a > with int. 
        b. '2'<'12' = false. This is false because apparently shorter strings are greater value. 
        c. 2=='2' = true. This is true because apparently == converts operands to numbers so '2' coverted to 2. 
        d. 2==='2' = false. This is false because === immediately returns false if different type 
        e. true == 2 = false. This is because true's int value is 1 which is not equal to 2. 
        F. True ===Boolean(2) = true. This is because you are converting 2 to true using Boolean(). so true === true

    15. The difference between == and === is that == converts both sides to a number then compares their values <br>
        while the === checks the equality without converting types of both sides. So they need to be the same type<br> first to be able to be true. 

    16. 
for(zz in statistics){
    if (zz.toString().charAt(0) === 'r' || statistics[zz]%2 == 1){
        console.log(statistics[zz])
    };  
} //This returns 21 45 5 2. 


17. The result will be [2,4,6]. This is because we are calling the modifyArray function which returns a new array<br> This new array is created from the doSomething function which takes in 1,2, then 3 and mulitplies by<br>
2 and then modifiy array pushes that value into its array to be returned. It can call the function doSomething<br>
because it was passed into the modifyArray function. 

18. 
let d = new Date();
let time = d.toLocaleDateString();
var intervalID = setInterval(myCallback, 1000, time);
function myCallback(a)
{
 console.log(a);
}

19. The output of the code above is 1 3 2. This is due to the delay of 2 by one second. 
    





