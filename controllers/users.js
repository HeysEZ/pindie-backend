const sendAllUsers = (req, res) => {
    res.send(req.users);
  };
  
  const sendUpdatedUsers = (req, res) => {
    res.send({
      users: req.users,
      updated: req.updatedObject
    });
  };
  
  module.exports = { sendAllUsers, sendUpdatedUsers };