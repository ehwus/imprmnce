let passCount = 0;
let failCount = 0;

for (let result of results) {
    result ? passCount++ : failCount++;
}

let totalTests = passCount + failCount;

testBody.innerHTML += "<hr>";
testBody.innerHTML += `<h3>${passCount}/${totalTests} tests passed.</h3`