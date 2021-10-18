1. The printed line 9 is: values added: 20. No error returns.
2. The printed line 13 is: final result: 20. No error returns. 
3. The printed line 9 is still the same: values added: 20. 
4. There is an error for line 13, ReferenceError: result is not defined. This is because let doesn't <br>
   exist outside of the if block so result is no longer defined when we need it again.
5. There is an error for line 9, TypeError: Assignment to constant variable. We can't change the value<br>
   of a const value and that was what was attempted so an error was thrown. 
6. There is nothing printed for line 13 because of the above ^ error. The script terminated. 
7. 
