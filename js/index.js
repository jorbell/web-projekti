window.onhashchange = function(){
    updateView();
}
window.onload = function(){
    updateView();
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
//console.log(this.responseText);

		//responseText alkaa warning viesteillä jonka takia json.parse ei toimi, tää alla oleva juttu poistaa ennen merkkiä '{' olevan tekstin.
		var str = this.responseText.substring(this.responseText.indexOf("{"));		
        var list = JSON.parse(str);
		console.log(list);
		
        var count = Object.keys(list.categories).length;
        var categories = document.getElementById('categories');

        for (var i = 0, len = count; i < len; i++) {
            var row = document.createElement('a');
            row.setAttribute('href', '#'+list.categories[i].Name);
			row.setAttribute('id', list.categories[i].Name);
            row.innerHTML = list.categories[i].Name + "<br>";
            categories.appendChild(row);
        }
    }
};
xmlhttp.open("GET", "php/dbqueries.php?func=getCategories", true);
xmlhttp.send();
function regularColor(){
	document.querySelector("#Laptops").style.backgroundColor = '#333';
	document.querySelector("#Tools").style.backgroundColor = '#333';
	document.querySelector("#Electronics").style.backgroundColor = '#333';
	document.querySelector("#Audio").style.backgroundColor = '#333';
	document.querySelector("#Components").style.backgroundColor = '#333';
}


function updateView() {

	
    if (window.location.hash == '#cart') {
            document.getElementById('categories').style.display = 'none';
        getShoppingCart();
    }
    if (window.location.hash == '#store') {
            document.getElementById('categories').style.display = 'block';
    }
    if (window.location.hash == '#Laptops') {
        createProductTable("Laptops");
		regularColor();
		document.querySelector('#Laptops').style.backgroundColor = 'black';
    }
    if (window.location.hash == '#Tools') {
        createProductTable("Tools");
		regularColor();
		document.querySelector('#Tools').style.backgroundColor = 'black';
    }
    if (window.location.hash == '#Electronics') {
        createProductTable("Electronics");
		regularColor();		
		document.querySelector('#Electronics').style.backgroundColor = 'black';
    }
    if (window.location.hash == '#Audio') {
        createProductTable("Audio");
		regularColor();		
		document.querySelector('#Audio').style.backgroundColor = 'black';
    }
    if (window.location.hash == '#Components') {
        createProductTable("Components");
		regularColor();		
		document.querySelector('#Components').style.backgroundColor = 'black';
    }
    function getShoppingCart(){
        var mainDiv = document.getElementById('products');
        mainDiv.innerHTML = "";
        mainDiv.innerHTML;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            //console.log(xmlhttp.responseText);
            if (this.readyState == 4 && this.status == 200) {
                    //console.log(this.responseText);
                var str = this.responseText.substring(this.responseText.indexOf("{"));		
                var list = JSON.parse(str);
                console.log(str);
                
                    var count = Object.keys(list.products).length;
                    for (var i = 0, len = count; i < len; i++) {
                        var table = document.createElement('table');
                        var row0 = document.createElement('tr');
                        var row1 = document.createElement('tr');
                        var row2 = document.createElement('tr');
                        var row3 = document.createElement('tr');
			var row4 = document.createElement('tr');
                        var cell1 = document.createElement('td');
                        var cell2 = document.createElement('td');
                        var cell3 = document.createElement('td');
                        var cell4 = document.createElement('td');
                        var cell5 = document.createElement('IMG');
                        
                        cell1.innerHTML = '<button id="'+i+'" class="btn btn-primary">Remove</button">';
                        cell5.setAttribute("src",list.products[i].ImagePath);
                        cell2.innerHTML = list.products[i].Brand + " " + list.products[i].Name;
                        cell3.innerHTML = list.products[i].Price + "€";
                        cell4.innerHTML = list.products[i].Description;						
                        /*cell1.innerHTML = list.products[i].Name;
                        cell2.innerHTML = list.products[i].Brand;
                        cell3.innerHTML = list.products[i].Price;
                        cell4.innerHTML = list.products[i].Description;*/

                        //Append cells to rows
                        row1.appendChild(cell2);
                        //row1.appendChild(cell1);
                        //row1.appendChild(cell3);
                        row2.appendChild(cell4);
                        row0.appendChild(cell5);
                        row3.appendChild(cell3);
                        row4.appendChild(cell1);

                        //Append rows to table
                        table.appendChild(row0);
                        table.appendChild(row3);
                        table.appendChild(row1);
                        table.appendChild(row2);
			table.appendChild(row4);
                        //Append table to main div
                        mainDiv.appendChild(table);

                        document.getElementById(i).addEventListener("click", function(){
                            var http = new XMLHttpRequest();
                            http.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    console.log(http.responseText);
                                    updateView();
                                    updateCartSize();
                                    
                                }
                            };
                            http.open("GET", "php/dbqueries.php?func=removeFromCart&product="+this.id, true);
                            http.send();

                        });
                    }
            }
        };
        xmlhttp.open("GET", "php/dbqueries.php?func=getCart", true);
        xmlhttp.send();
    }
    function updateCartSize(){
        var mainDiv = document.getElementById('products');
        mainDiv.innerHTML = "";
        mainDiv.innerHTML;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            //console.log(xmlhttp.responseText);
            if (this.readyState == 4 && this.status == 200) {
                    //console.log(this.responseText);
                var str = this.responseText.substring(this.responseText.indexOf("{"));		
                var list = JSON.parse(str);
                var count = Object.keys(list.products).length;
                document.getElementById("cart").innerHTML = '<a href="#cart">Shopping cart: '+count+' </a>';
            }
        };
        xmlhttp.open("GET", "php/dbqueries.php?func=getCart", true);
        xmlhttp.send();
    }
    function createProductTable(category){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    if (xmlhttp.responseText != "0 results"){
                    //console.log(xmlhttp.responseText);
                    //sama responseText ratkaisu
                    var str = this.responseText.substring(this.responseText.indexOf("{"));		
                    var list = JSON.parse(str);
                    
                    var count = Object.keys(list.products).length;
                    var mainDiv = document.getElementById('products');
                    mainDiv.innerHTML="";
                    //table.style.cssText = "border: 1px solid black";
                    for (var i = 0, len = count; i < len; i++) {
                        var table = document.createElement('table');
                        var row0 = document.createElement('tr');
                        var row1 = document.createElement('tr');
                        var row2 = document.createElement('tr');
                        var row3 = document.createElement('tr');
                        var row4 = document.createElement('tr');
                        var cell1 = document.createElement('td');
                        var cell2 = document.createElement('td');
                        var cell3 = document.createElement('td');
                        var cell4 = document.createElement('td');
                        var cell5 = document.createElement('IMG');
                        
                        cell1.innerHTML = '<button id="'+list.products[i].ID+'" class="btn btn-primary">Add to cart</button">';
                        cell5.setAttribute("src",list.products[i].ImagePath);
                        cell2.innerHTML = list.products[i].Brand + " " + list.products[i].Name;
                        cell3.innerHTML = list.products[i].Price + "€";
                        cell4.innerHTML = list.products[i].Description;						
                        /*cell1.innerHTML = list.products[i].Name;
                        cell2.innerHTML = list.products[i].Brand;
                        cell3.innerHTML = list.products[i].Price;
                        cell4.innerHTML = list.products[i].Description;*/

                        //Append cells to rows
                        row1.appendChild(cell2);
                        //row1.appendChild(cell1);
                        //row1.appendChild(cell3);
                        row2.appendChild(cell4);
                        row0.appendChild(cell5);
                        row3.appendChild(cell3);
                        row4.appendChild(cell1);

                        //Append rows to table
                        table.appendChild(row0);
                        table.appendChild(row3);
                        table.appendChild(row1);
                        table.appendChild(row2);
						table.appendChild(row4);
                        //Append table to main div
                        mainDiv.appendChild(table);

                        document.getElementById(list.products[i].ID).addEventListener("click", function(){
                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    console.log(xmlhttp.responseText);
                                    updateView();
                                    updateCartSize();
                                    
                                }
                            };
                            xmlhttp.open("GET", "php/dbqueries.php?func=addToCart&product="+this.id, true);
                            xmlhttp.send();

                        });
                            
                    }
                }
            }
            };
    xmlhttp.open("GET", "php/dbqueries.php?func=getProducts&category="+category, true);
    xmlhttp.send();
    }
}
