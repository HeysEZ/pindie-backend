const getAllCategories = async (req, res, next) => {
    // const games = await readData("./data/games.json");
    const categories = [{
        "_id": {
          "$oid": "664cbe5762c27711cce22ec1"
        },
        "name": "popular"
      },
      {
        "_id": {
          "$oid": "664cbe7b62c27711cce22ec2"
        },
        "name": "new"
      }
    
    ];
    if (!categories) {
        res.status(400);
        res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавь игру."
        });
        return;
    }
    req.categories = categories;
    next();
};

module.exports = {
    getAllCategories,
};