const getAllGames = async (req, res, next) => {
    // const games = await readData("./data/games.json");
    const games = [{
        "_id": {
          "$oid": "664cbefa62c27711cce22ec9"
        },
        "title": "G.U.N.N.E.R",
        "description": "Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше",
        "developer": "IDKWIAm",
        "image": "https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png",
        "link": "https://code.s3.yandex.net/teens/pindie-games/gunner/game/index.html",
        "categories": [],
        "users": []

      }];
    if (!games) {
        res.status(400);
        res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавь игру."
        });
        return;
    }
    req.games = games;
    next();
};

module.exports = {
    getAllGames,
};