class Gamestate {
    constructor() {
    }

    update(state) {
        database.ref('/').update({
            gamestate: state
        })
    }

    start() {
        gamestateObj = createSprite(0, 0, 1, 1);
        formObj = new Form();
        formObj.display();
        playerObj = new Player();
    }
}