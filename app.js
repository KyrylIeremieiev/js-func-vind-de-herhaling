"use strict";

class HerhaalApp
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        function boom(g, x, y)
        {
        //boompje
        g.fillStyle = "green"
        g.fillRect(x, y, 12, 20);
        g.fillStyle = "brown"
        g.fillRect(x + 4, y + 20, 4, 6);
        }

        function auto(g, autox, autoy)
        {
            g.fillStyle = "red"
            g.fillRect(autox, autoy+1, 20, 6);
            g.fillStyle = "grey"
            g.fillRect(autox + 2, autoy + 5, 4, 4);
            g.fillRect(autox + 14, autoy + 5, 4, 4);
        }

        //boom1
        boom(g, 50, 50)
        //boompje2
        boom(g, 80, 50)
        //boom3
        boom(g, 80, 50)

        //weg
        g.fillStyle = "black"
        g.fillRect(0, 80, 200, 20);

        //weg strepen
        g.fillStyle = "white"
        g.fillRect(0, 88, 10, 4);
        g.fillRect(20, 88, 10, 4);
        g.fillRect(40, 88, 10, 4);
        g.fillRect(60, 88, 10, 4);
        g.fillRect(80, 88, 10, 4);
        g.fillRect(100, 88, 10, 4);
        g.fillRect(120, 88, 10, 4);
        g.fillRect(140, 88, 10, 4);
        g.fillRect(160, 88, 10, 4);
        g.fillRect(180, 88, 10, 4);
        g.fillRect(200, 88, 10, 4);

        //auto
        auto(g, 0, 80)

        //auto 2
        auto(g, 100, 90)

    }
}

let app = new HerhaalApp();
app.runApplication();