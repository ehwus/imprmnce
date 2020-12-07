const it = (description, assertion) => {
    console.log(description);
    assertion();
}

const isEqual = (a, b) => {
    if (a === b) {
        console.log("I'm pleased to report that everything went swimmingly")
        return true;
    } else {
        console.error("I am sorry for your loss");
        return false;
    }
}