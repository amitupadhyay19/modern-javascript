// try catch

try {
    // something(); // this function not defined
    getClients(); 
} catch(error){ // so we use first try than use catch
    console.log(error);
} finally {
    console.log('Execute always no matter what!');
} //if the function is define or not define it will execute always 

// one of the advantage using try and catch is not going to stop running the code
// it will does not stop the complete the program

function getClients() {
    console.log('Downloading...');

    setTimeout(function () {
        console.log('Complete...');
    }, 3000);
}

getClients();