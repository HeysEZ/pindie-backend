const getAllUsers = async (req, res, next) => {
    // const games = await readData("./data/games.json");
    const users = [{
        "_id": {
          "$oid": "664cbc0e62c27711cce22ebe"
        },
        "username": "aski",
        "email": "aski@exaple.ru",
        "password": "ilovehtml"
      }]
    if (!users) {
        res.status(400);
        res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавь игру."
        });
        return;
    }
    req.users = users;
    next();
};

module.exports = {
    getAllUsers,
};