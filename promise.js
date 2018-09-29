var firstPromise = new Promise(function(resolve, reject) 
{
    setTimeout(function() 
    {
        resolve('Success!');
    }, 300);
});

firstPromise.then(function(value) 
{
    console.log(value);

});

console.log(firstPromise);

