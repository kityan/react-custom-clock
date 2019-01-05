const points = JSON.parse(require('fs').readFileSync(`${__dirname}/points.json`).toString())

module.exports = function (app) {
  app.get('/api/points', (req, res) => res.json(points))
}
