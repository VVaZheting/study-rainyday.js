window.onload = function(){
    var w = window.innerWidth,
        h = window.innerHeight;
    var bgi = document.querySelector("#background"),
        cs = document.getElementById('canvas');
    cs.width = w;
    cs.height = h;
    function rain(){
        bgi.onload = function(){
            var rd = new RainyDay({
                image: this,
                opacity: 1,
                gravityAngle: Math.PI / 3
            }, cs);
            rd.trail = rd.TRAIL_SMUDGE;
            rd.rain([
                [1, 2, 8000]
            ]);
            rd.rain([
                [3, 3, 0.88],
                [5, 5, 0.9],
                [6, 2, 1]
            ],100);
        };
        bgi.crossOrigin = 'anonymous';
        bgi.src = './image/bgg.jpg'
    }
    rain();
};
