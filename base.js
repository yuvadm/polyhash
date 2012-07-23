gen = function() {
    var paper = Raphael('canvas', 250, 250);
    var circle = paper.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");
};

$(document).ready(function() {
    gen();
});
