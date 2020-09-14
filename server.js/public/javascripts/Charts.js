
async function load() {
    let url = 'http://localhost:1337/misc/input.json';
    let obj = await (await fetch(url)).json();
    return obj;
}

function chart_create(data2) {
 
var data;
var chart;

Category1 = data2[0]
Category2 = data2[1]
Category3 = data2[2]


Category = { date: Category3.date , movie: Category3.movie, games: Category3.games, cd: Category3.cd }

google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Category');
    data.addColumn('number', 'Items');
    data.addRows([
        ['Movies', Category.movie],
        ['Games', Category.games],
        ['CD', Category.cd],
    ]);

    var options = { 'title': 'Items purchased on ' + Category.date, 'width': 400, 'height': 300 };

    chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    google.visualization.events.addListener(chart, 'select', selectHandler);
    chart.draw(data, options);
}

function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    var value = data.getValue(selectedItem.row, 0);
    alert('The user selected ' + value);
    }


}


load().then(chart_create);
