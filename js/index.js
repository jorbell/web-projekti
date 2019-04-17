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
xmlhttp.open("GET", "php/dbqueries.php", true);
xmlhttp.send();
