// this is simple WRAPASYNC FUNCTION 
// function wrapAsync(fn){
//     return function(req, res, next){
//         fn(req, res, next).catch(next);
//     }
// }

// This is create on arrow function 
module.exports = function(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(next);
    };
};
