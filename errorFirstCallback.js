fs.readFile('/someFile.txt', function(err, data) {
    if(err) {
        console.log('Unknown Error');
        return;

    }

    console.log(data);
});