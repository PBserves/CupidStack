const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked")
    const token = "eggwhegd";
    const isAuthorized = token === "eggwhegdeeqw";
    if (!isAuthorized) {
        return res.status(401).send("Unauthorized");
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("User auth is getting checked")
    const token = "eggwhegd";
    const isAuthorized = token === "egfrgwhegd";
    if (!isAuthorized) {
        return res.status(401).send("Unauthorized");
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}