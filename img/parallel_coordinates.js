
    var plot = document.getElementById("plot");
    plot.on("plotly_hover", function(data){
        var indices = data.points.map(function(d){return d.pointNumber});
        var update = {"line.color": ["rgba(0,0,0,0.1)"] * data.points.length};
        for(var i=0; i<indices.length; i++){
            update["line.color"][indices[i]] = "rgba(255,0,0,0.5)";
        }
        Plotly.update("plot", update);
    });
    