const apiRoutes = (app) => {
    app.use("/api/users",require('./api/users'));
    app.use("/api/tasks",require('./api/tasks'));
}
module.exports = {
    apiRoutes
}