const sendAllCategories = (req, res) => {
    res.send(req.categories);
  };
  
  const sendUpdatedCategories = (req, res) => {
    res.send({
      categories: req.categories,
      updated: req.updatedObject
    });
  };
  
  module.exports = { sendAllCategories, sendUpdatedCategories };