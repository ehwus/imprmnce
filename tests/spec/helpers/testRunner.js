const it = (description, assertion) => {
    console.log("Test name: " + description);
    assertion();
}

const describe = (thingBeingDescribed, assertion) => {
    console.log(thingBeingDescribed);
    assertion();
}

const isEqual = (a, b) => {
    if (a === b) {
        console.log("PASS")
        console.log("I'm pleased to report that everything went swimmingly")
        return true;
    } else {
        console.log("FAIL")
        console.log(a + " != " + b)
        console.error("I am sorry for your loss");
        return false;
    }
}

const throwsError = (assertion) => {
    try {
        assertion();
    }
    catch(err) {
        console.log("EXPECTED ERROR HAPPENED")
        console.log(err)
        return true;
    }
    console.error("DID NOT ENCOUNTER EXPECTED ERROR")
}