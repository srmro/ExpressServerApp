// const checkIndex = (request, response, next) => {
//     const {
//         body,
//         params: { id }, //destructuring the body from request/params from id
//     } = request;

//     const parsedId = parseInt(id);

//     if(isNaN(parsedId)) return response.sendStatus(400); //if not a number it'll return
//     const checkIndex = pictures.checkIndex((user) = user.id === parsedId); //
//     if (checkIndex === -1) return response.sendStatus(404) //if car not found
//     next();
// }

// module.exports = checkIndex;