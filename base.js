genMatrix = function(el, m, n) {
    for (var i=0; i<m; i++) {
        el.append('<div id="r' + i + '" class="mr"></div>');
        var row = $('#r' + i);
        for (var j=0; j<n; j++) {
            var cell = row.append('<div id="c' + i + j + '" class="mc"></div>');
        }
    }
};

$(document).ready(function() {
    genMatrix($('#viz'), 10, 10);
});
