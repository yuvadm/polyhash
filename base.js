gen = function(s, c) {
    var h = CryptoJS.SHA1(s).toString(CryptoJS.enc.Hex);
    var v = [];

    for (var i=0; i<20; i++) {
        var bt = parseInt(h.substring(2*i, 2*(i+1)), 16);
        v.push(bt);
    }

    console.log(v);
    var W = 50;
    var H = 50;

    var r = Raphael('c1', W, H);
    var hv = v[4] / 256;
    var sv = v[5] / 256;
    var bv = v[6] / 256;
    r.path(['M', v[0] * W / 256, 0, 'L', 0, v[1] * H / 256, 'L', v[2] * W / 256, W, 'L', H, v[3] * H / 256, 'Z']).attr({
        fill: Raphael.hsl(hv, sv, bv),
        stroke: Raphael.hsl(hv, sv, bv)
    });

    hv = v[11] / 256;
    sv = v[12] / 256;
    bv = v[13] / 256;
    r.path(['M', v[7] * W / 256, 0, 'L', 0, v[8] * H / 256, 'L', v[9] * W / 256, W, 'L', H, v[10] * H / 256, 'Z']).attr({
        fill: Raphael.hsl(hv, sv, bv),
        stroke: Raphael.hsl(hv, sv, bv),
        'fill-opacity': (v[14] / 512) + 0.3,
        'stroke-opacity': (v[14] / 512) + 0.3
    });
};

randStr = function(n){
    var text = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i=0; i<n; i++)
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    return text;
};


$(document).ready(function() {
    for (var i=0; i<100; i++) {
        gen(randStr(8));
    }
});
