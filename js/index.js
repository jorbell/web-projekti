window.onhashchange = function(){
    updateView();
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var list = JSON.parse(xmlhttp.responseText);
        var count = Object.keys(list.categories).length;
        var categories = document.getElementById('categories');

        for (var i = 0, len = count; i < len; i++) {
            var row = document.createElement('a');
            row.setAttribute('href', '#'+list.categories[i].Name);
            row.innerHTML = list.categories[i].Name + "<br>";
            categories.appendChild(row);
        }
    }
};
xmlhttp.open("GET", "php/dbqueries.php?func=getCategories", true);
xmlhttp.send();

function updateView() {
    if (window.location.hash == '#cart') {
            document.getElementById('categories').style.display = 'none';
    }
    if (window.location.hash == '#store') {
            document.getElementById('categories').style.display = 'block';
    }
    if (window.location.hash == '#Laptops') {
        createProductTable("Laptops");
    }
    if (window.location.hash == '#Tools') {
        createProductTable("Tools");
    }
    if (window.location.hash == '#Electronics') {
        createProductTable("Electronics");
    }
    if (window.location.hash == '#Audio') {
        createProductTable("Audio");
    }
    if (window.location.hash == '#Components') {
        createProductTable("Components");
    }
    function createProductTable(category){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    if (xmlhttp.responseText != "0 results"){
                    console.log(xmlhttp.responseText);
                    var list = JSON.parse(xmlhttp.responseText);
                    var count = Object.keys(list.products).length;
                    var mainDiv = document.getElementById('products');
                    mainDiv.innerHTML="";
                    var table = document.createElement('table');
                    table.style.cssText = "border: 1px solid black";
                    for (var i = 0, len = count; i < len; i++) {
                        var row1 = document.createElement('tr');
                        var row2 = document.createElement('tr');
                        var cell1 = document.createElement('td');
                        var cell2 = document.createElement('td');
                        var cell3 = document.createElement('td');
                        var cell4 = document.createElement('td');
                        cell1.innerHTML = list.products[i].Name;
                        cell2.innerHTML = list.products[i].Brand;
                        cell3.innerHTML = list.products[i].Price;
                        cell4.innerHTML = list.products[i].Description;

                        //Append cells to rows
                        row1.appendChild(cell1);
                        row1.appendChild(cell2);
                        row1.appendChild(cell3);
                        row2.appendChild(cell4);

                        //Append rows to table
                        table.appendChild(row1);
                        table.appendChild(row2);
                        //Append table to main div
                        mainDiv.appendChild(table);

                    }
                }
            }
            };
    xmlhttp.open("GET", "php/dbqueries.php?func=getProducts&category="+category, true);
    xmlhttp.send();
    }
}
