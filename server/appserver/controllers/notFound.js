/**
 *
 * notFound controller
 *
 * @route /*
 * @method GET
 */
async function notFound (req, res) {
  res.send('404 Not Found');
};

module.exports = notFound
