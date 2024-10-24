//4 promise APIs 

 //Where we have to call multiple APIs parallaly, their we will use these APis.

 // 1)promise.all() - We have to call parallel APIs call,

//  eg: We are having 10 user IDs we want to call multiple apis to get the details aboout the users, their we can use this promise.all() .

// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.


// eg: 
promise.all([p1,p2,p3]);   (success 3 api calls) (FAIL FAST TECHNIQUE)

suppose p1 takes 3sec to get the Result.
p2 takes 1sec to get the result.
& p3 takes 2sec to get the result. 

And all APIs are success. 
here it will call 3 parallel API call, and make the result.
The output of these success 3 apis will be inside an array with the values of all the result.


result = [val1, val2, val3]   //(after 3sec it will give the result bcz it will wait for all of them to finish)

 WHAT IF ANY OF THESE PROMISES GET REJECTED. THEN promise.all() WILL WORK DIFFERENTLY. 


 promise.all([p1,p2,p3]);    (1 of the promise get rejected).

suppose p1 takes 3sec to get the Result.
p2 takes 1sec to get the result.
& p3 takes 2sec to get the result. 

AFTER FEW SECOND p2 GET REJECTED. 

AS SOON AS ANY OF THE PROMISE GET REJECTED PROMISE WILL THROW AN Error. 
WHATEVER RESULT IT WILL GET FROM THE REJECTED PROMISE IT WILL THROW THE SAME ERROR AS OUTPUT.
IMMEDIATETLY AS SOON AS ERROR HAPPEND IT WILL RETURN AN ERROR.
IN THIS CASE p2 TAKES 1SEC AND REJECTED SO IN 1SEC ONLY WILL GET THE RESULT, AFTER 1 API FAILS IT WONT WAITS FOR ANOTHER APIS RESULT IF ITS SUCCESSFUL OR REJECTED.  


after failling p2 API , the p1 and p3 will eventually success or failure. 
its like all or none (if any of the promise fails then the whole collection of promise will fails)


HERE SUPPOSE P2 IS FULLFILLED AFTER 1 SEC AND P3 GETS REJECTED AFTER 2 SEC THEN IT WILL THROW THE ERROR AFTER 2 SEC. 

//========================

2) promise.allSetteled()  - (WAITS FOR ALL THE RESULT)
here we will get the result for the success promises only, even after any of the promise will fails. it will result all the success APIs.

eg: [p1, p2, p3] (p1 - 3sec, p2 - 1sec, p3 - 2sec);

if all promise are success then 
after 3 sec result will be - [val1, val2, val3]

if any of the promise fails then the result will be different 
suppose p2 gets rejected in 1 sec.

Here it will waits for all the promises to setteled. after 3sec it will wait for all the apis to complete, then it will give the result.result

result = [val1, err2, val3]

//===================

promise.race()  - IT WILL GIVE THE VALUE OF FIRST SETTLED PROMISE.(wheather it will success or fails it will give that as result). 

the person who finished fast will be the winner. 



promise.race([p1, p2, p3])   (p1 - 3sec, p2 - 5sec, p3 - 2sec)

after first promise got settled
value 3

after first promise got rejected means p3 bcz its taking less timing.(if p3 gets fails after 2sec ).


// output =  error will be thrown.

error

// it will return result of first setteled promise.

//=============================

promise.any() - it takes array of promises. its similar to race. but it will wait for first promise to get successfull. 

(WAIT FOR FIRST SUCCESS )

if the p2 get setteled.
eg: [p1, p2, p3]  (p1 - 3sec(success), p2 - 1sec(success), p3 - 2sec(success))

result -[val2]

if the p2 get rejected:=
it will wait for the fullfilled promise 
eg: [p1, p2, p3]  (p1 - 3sec(success), p2 - 1sec(rejected), p3 - 2sec(success))

result will be [val3]

eg: [p1, p2, p3]  (p1 - 3sec(success), p2 - 1sec(rejected), p3 - 2sec(rejected))

result will be [val1]

if all promise will fail
eg: [p1, p2, p3]  (p1 - 3sec(rejected), p2 - 1sec(rejected), p3 - 2sec(rejected))

result - Aggregate Error 
[error1, error2, error3] //list of all error









































