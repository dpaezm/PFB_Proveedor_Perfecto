export function error404Controller(req, res) {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
}

export function errorController(err, req, res, next) {
  res.status(err.httpCode || 500).send({
    status: 'error',
    message: err.message,
  });
}
