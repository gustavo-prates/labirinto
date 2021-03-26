(function() {
        var cnv = document.querySelector("canvas");
        var ctx = cnv.getContext("2d");

        var LEFT = 37,
            YP = 38,
            RIGHT = 39,
            DOWN = 40;

        var mvLeft = mvUp = mvRight = mvDown = false;



        var tilesize = 32;

        var player = {
            x: tilesize + 2,
            y: tilesize + 2,
            width: 28,
            height: 28
            speed: 2
        }

        var maze = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

        window.addEventListener("keydonw", keydownHandler, false);
        window.addEventListener("keyup", keyupHandler, false);

        function keydownHandler(e) {
            var key = e.keyCode;
            switch (key) {
                case LEFT:
                    mvLeft = true;
                    break;
                case UP:
                    mvUp = true;
                    break;
                case RIGHT:
                    mvRight = true;
                    break;
                case DOWN:
                    mvDown = true;
                    break;
            }
        }

        function keyupHandler(e) {
            var key = e.keyCode;
            switch (key) {
                case LEFT:
                    mvLeft = false;
                    break;
                case UP:
                    mvUp = false;
                    break;
                case RIGHT:
                    mvRight = false;
                    break;
                case DOWN:
                    mvDown = false;
                    break;
            }
        }


        function update()
        if (mvLeft && !mvRight) {
            player.x -=
        }
    }

    function render() {
        for (var row in maze) {
            ctx.save();
            for (var column in maze[row]) {
                var tile = maze[row][column];
                if (tile === 1) {
                    var x = column * tilesize;
                    var y = row * tilesize;
                    ctx.fillRect(x, y, tilesize, tilesize);
                }
            }
        }
        ctx.fillStyle = "#00f"
        ctx.fillRect(player.x, player.y, player.width, player.height);
        ctx.restore();
    }

    function loop() {
        update();
        render();
        requestAnimationFrame(loop, cnv);
    }
    requestAnimationFrame(loop, cnv);
}());