"use strict";

class HerhaalApp
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");


        //boompje
        let boomx = 50;
        let boomy = 50;
        g.fillStyle = "green"
        g.fillRect(boomx, boomy, 12, 20);
        g.fillStyle = "brown"
        g.fillRect(boomx + 4, boomy + 20, 4, 6);


        //boompje2
        let boom2x = 80;
        let boom2y = 50;
        g.fillStyle = "green"
        g.fillRect(boom2x, boom2y, 12, 20);
        g.fillStyle = "brown"
        g.fillRect(boom2x + 4, boom2y + 20, 4, 6);

        //boompje3
        let boom3x = 80;
        let boom3y = 50;
        g.fillStyle = "green"
        g.fillRect(boom3x, boom3y, 12, 20);
        g.fillStyle = "brown"
        g.fillRect(boom3x + 4, boom3y + 20, 4, 6);

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
        let autox = 0;
        let autoy = 80;
        g.fillStyle = "red"
        g.fillRect(autox, autoy+1, 20, 6);
        g.fillStyle = "grey"
        g.fillRect(autox + 2, autoy + 5, 4, 4);
        g.fillRect(autox + 14, autoy + 5, 4, 4);


        //auto 2
        let auto2x = 100;
        let auto2y = 90;
        g.fillStyle = "green"
        g.fillRect(auto2x, auto2y + 1, 20, 6);
        g.fillStyle = "grey"
        g.fillRect(auto2x + 2, auto2y + 5, 4, 4);
        g.fillRect(auto2x + 14, auto2y + 5, 4, 4);

    }
}

let app = new HerhaalApp();
app.runApplication();