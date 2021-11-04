function response (ctx, data) {
  ctx.body = {
    code: 200,
    result: data
  };
}

function resError (ctx, data) {
  ctx.body = {
    code: 500,
    result: data
  };
}

module.exports = { response, resError };
