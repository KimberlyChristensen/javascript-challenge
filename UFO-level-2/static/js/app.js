// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//Append data to table in HTML by row
function createTable() {
    tbody.html("");
    tableData.forEach((one_row) => {
        var newrow = tbody.append('tr');
        Object.entries(one_row).forEach(([k, v]) => {
            newrow.append('td').text(v);
        });
    });
};

createTable();

//Event Listeners -- Listen for events and search through the 'date/time' column to find rows that match user input
var button = d3.select("#filter-btn");
var inputField = d3.select("#filters");

button.on("click", showFilter);

function showFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Identify the date being selected.
    var dateFilter = d3.select("#datetime").property("value");
    var cityFilter = d3.select("#city").property("value");
    var stateFilter = d3.select("#state").property("value");
    var countryFilter = d3.select("#country").property("value");
    var shapeFilter = d3.select("#shape").property("value");

    // Filter the data down to just the selected date
    // Adding in "if" statements to ensure not filtering by blank data (no blanks in dataset)
    if (dateFilter != "") {
        var filteredData = tableData.filter(sighting => sighting.datetime === dateFilter);
    }

    else if (dateFilter == "") {
        var filteredData = tableData;
    }
    // Filter the data down by the City
    if (cityFilter != "") {
        var filteredData = filteredData.filter(sighting => sighting.city === cityFilter.toLowerCase());
    }
    else if (cityFilter == ""){
        filteredData = filteredData;
    }
    // Filter the data down by the State
    if (stateFilter != "") {
        var filteredData = filteredData.filter(sighting => sighting.state === stateFilter.toLowerCase());
    }
    else if (stateFilter == "") {
        filteredData = filteredData;
    }
    
    // Filter the data down by the Country
    if (countryFilter != "") {
        var filteredData = filteredData.filter(sighting => sighting.country === countryFilter.toLowerCase());
    }
    else if (countryFilter == "") {
        filteredData = filteredData;
    }

    // Filter the data down by the Shape
    if (shapeFilter != "") {
        var filteredData = filteredData.filter(sighting => sighting.shape === shapeFilter.toLowerCase());
    }
    else if (shapeFilter == "") { 
        filteredData = filteredData;
    }; 

    //Set tableData=filteredData so table creates on filtered Data
    tableData=filteredData;

    createTable();

    //reset so filters can be adjusted and filtered Data will reset
    tableData=data;
    
};





