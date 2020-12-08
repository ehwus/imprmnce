const testBody = document.getElementById('tests');

const makeTitle = (title) => {
    testBody.innerHTML += `<h2 class="mt-5">${title}</h2>`
}

const makeSubTitle = (subtitle) => {
    testBody.innerHTML += `<h3>${subtitle}</h3>`
}

const addResult = (boolean) => {
    if (boolean) {
        testBody.innerHTML += '<p style="color: green;">PASS</p>'
    } else {
        testBody.innerHTML += '<p style="color: red;">FAIL</p>'
    }
}

const it = (description, assertion) => {
    makeSubTitle("Test name: " + description);
    assertion();
}

const describe = (thingBeingDescribed, assertion) => {
    makeTitle(thingBeingDescribed);
    assertion();
}

const isEqual = (a, b) => {
    if (a === b) {
        addResult(true)
        return true;
    } else {
        addResult(false)
        return false;
    }
}

const throwsError = (assertion) => {
    try {
        assertion();
    }
    catch(err) {
        addResult(true)
        console.log(err)
        return true;
    }
    addResult(false)
}