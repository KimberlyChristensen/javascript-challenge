// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//Append data to table in HTML by row
tableData.forEach((one_row)=>{
    var newrow=tbody.append('tr');
    Object.entries(one_row).forEach(([k, v])=>{
        newrow.append('td').text(v);
    });
});

//Event Listeners -- Listen for events and search through the 'date/time' column to find rows that match user input
var button = d3.select("#filter-btn");
var inputField = d3.select("#filters");
// var dataset=d3.select('#ufo-table tbody tr')

button.on("click", showFilter);
// inputField.on("submit",showFilter);

function showFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Identify the date being selected.
    var inputDate=d3.select("#datetime");
    var dateFilter=inputDate.property("value");

    // Filter the data down to just the selected date
    var filteredData = tableData.filter(sighting=>sighting.datetime === dateFilter);
    
    //Select existing table information and clear data
    var tableInfo=d3.select("tbody");
    tableInfo.html("");
    
    // Overwrite data in table with only filtered data
    filteredData.forEach((one_row)=>{
        var newrow=tbody.append('tr');
        Object.entries(one_row).forEach(([k, v])=>{
            newrow.append('td').text(v);
        });
    });


};

