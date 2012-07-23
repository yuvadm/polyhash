curve = function(x, y , ax, bx, ay, by, zx, zy, color) {
    
};

gen = function(s, c) {
    var h = CryptoJS.SHA1(s).toString(CryptoJS.enc.Hex);
    var v = [];

    for (var i=0; i<20; i++) {
        var bt = parseInt(h.substring(2*i, 2*(i+1)), 16);
        v.push(bt);
    }

    console.log(v);

    var r = Raphael(c, 250, 250);
    var hv = v[4] / 256;
    var sv = v[5] / 256;
    var bv = v[6] / 256;
    r.path(['M', v[0], 0, 'L', 0, v[1], 'L', v[2], 250, 'L', 250, v[3], 'Z']).attr({
        fill: Raphael.hsb(hv, sv, bv),
        stroke: Raphael.hsb(hv, sv, bv)
    });

    hv = v[11] / 256;
    sv = v[12] / 256;
    bv = v[13] / 256;
    r.path(['M', v[7], 0, 'L', 0, v[8], 'L', v[9], 250, 'L', 250, v[10], 'Z']).attr({
        fill: Raphael.hsb(hv, sv, bv),
        stroke: Raphael.hsb(hv, sv, bv),
        'fill-opacity': (v[14] / 512) + 0.3,
        'stroke-opacity': (v[14] / 512) + 0.3
    });


};

$(document).ready(function() {
    gen('yuvals', 'c1');
    gen('yuvalsx', 'c2');
    gen('yuvalsd', 'c3');
    gen('yuvalse', 'c4');
    gen('yuv', 'c5');
    gen('yals', 'c6');
    gen('yuvl11', 'c7');
    gen('yuvals1242346', 'c8');
});
