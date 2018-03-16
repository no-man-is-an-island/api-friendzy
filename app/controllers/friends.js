const Friend = require('../models').Friend;

module.exports = {
  index: (req, res) => {
    return Friend.filter(req.query.filter)
      .then(friends => res.status(200).send(friends))

      // TODO: returning 400 here feels wrong. It implies a user error
      .catch(error => res.status(400).send(error));
  },
  show: (req, res) => {
    return Friend.findById(parseInt(req.params.id))
      .then(friend => {
        if (!friend) {
          return res.status(404).send({
            message: 'Friend Not Found'
          });
        }
        return res.status(200).send(friend);
      })
      .catch(error => res.status(400).send(error));
  }
};
