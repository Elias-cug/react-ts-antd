function response (ctx, data) {
  ctx.body = {
    code: 200,
    result: data
  };
}

module.exports = response;
