const name = 'Mike';
const greeting = (name) => {
    console.log(`Hello ${name}, weclome to nodejs`);
}

const hello = (name) => {
    console.log('Hello ' + name);
}

module.exports = {
    greeting,
    hello,
};

//npm - npm is a package manager for the JavaScript programming language