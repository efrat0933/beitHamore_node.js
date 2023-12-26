module.exports.log = (req, res, next) => {

    console.log('log to route on' + Date());
    next();
}