const app = require("../app");
const port = process.env.PORT || 8000;

// Listen on port.
app.listen(port, () => console.log(`Server started on port ${port}`));
//module.exports = app;
