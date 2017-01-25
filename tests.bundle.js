var context = require.context('./src/routes', true, /.+\.tsx?$/);
context.keys().forEach(context);
module.exports = context;