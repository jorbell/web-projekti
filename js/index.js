window.onhashchange = function(){
    updateView();
}
window.onload = function(){
    updateView();
}
//
//Hakee tietokannasta kategoriat ja lisää ne etusivulle
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
//console.log(this.responseText);

	//responseText alkaa warning viesteillä jonka takia json.parse ei toimi, tää alla oleva juttu poistaa ennen merkkiä '{' olevan tekstin.
	var str = this.responseText.substring(this.responseText.indexOf("{"));		
        var list = JSON.parse(str);
	//console.log(list);
		
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

//laittaa kategorioiden värit takaisin normaaliksi
function regularColor(){
	document.querySelector("#Laptops").style.backgroundColor = '#333';
	document.querySelector("#Tools").style.backgroundColor = '#333';
	document.querySelector("#Electronics").style.backgroundColor = '#333';
	document.querySelector("#Audio").style.backgroundColor = '#333';
	document.querySelector("#Components").style.backgroundColor = '#333';
	document.querySelector("#Sales").style.backgroundColor = '#333';
}

//päivittää mitä etusivulla näytetään
function updateView() {
    updateCartSize();	
    if (window.location.hash == '#cart') {
        getShoppingCart();
    }
    if (window.location.hash == "#checkout") {
        checkout();
    }
    if (window.location.hash == '#store') {
            document.getElementById('categories').style.display = 'block';
    }
    if (window.location.hash == '#Laptops') {
        createProductTable("Laptops");
	    //vaihtaa kategorioiden värit normaaliksi ja sitten vaihtaa valitun kategorian mustaksi
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
	if (window.location.hash == '' || window.location.hash == '#Sales') {
        createProductTable("Sales");
        updateUserName();
		regularColor();		
		if(window.location.hash == '#Sales') {
			document.querySelector('#Sales').style.backgroundColor = 'black';
		}
    }
	//Ostaminen
    function checkout(){
        var mainDiv = document.getElementById('products');
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            //console.log(xmlhttp.responseText);
            if (this.readyState == 4 && this.status == 200) {
                    //console.log(this.responseText);
                var str = this.responseText.substring(this.responseText.indexOf("{"));		
                var list = JSON.parse(str);
                console.log(str);
                    var mainDiv = document.getElementById('products');
                    mainDiv.innerHTML = "";
                
                    var table = document.createElement('table');
                    var totalprice = 0;
                    table.setAttribute("class", "checkout");
                    var innerhtml = '<thead align="left"><tr><th>Name</th><th>Brand</th><th>price</th></thead>';
                    var count = Object.keys(list.products).length;
                    for (var i = 0, len = count; i < len; i++) {
                        innerhtml = innerhtml + '<tr><td>'+list.products[i].Name+'</td><td>'+list.products[i].Brand+'</td><td>'+list.products[i].Price+'</td></tr>'
                        totalprice = totalprice + parseFloat(list.products[i].Price);
                    }
                    table.innerHTML = innerhtml + "<tr><td>TOTAL: </td><td></td><td>"+totalprice+"</td>";
                    mainDiv.appendChild(table);
                    var order = document.createElement('button'); 
                    order.setAttribute("class","btn btn-primary");
                    order.setAttribute("id","order");
                    order.innerHTML = "Order";
                    mainDiv.appendChild(order);
                    order.onclick = function (){
                        orderItems();
                    };
                    
            }
        };
        xmlhttp.open("GET", "php/dbqueries.php?func=getCart", true);
        xmlhttp.send();

    }
//tilauksen lisääminen tietokantaan
    function orderItems(){
        var mainDiv = document.getElementById('products');
        mainDiv.innerHTML = "";
        mainDiv.innerHTML;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            //console.log(xmlhttp.responseText);
            if (this.readyState == 4 && this.status == 200) {
                if(xmlhttp.responseText == "true"){
                    window.alert("Products ordered");
                }
            }
        };
        xmlhttp.open("GET", "php/dbqueries.php?func=order", true);
        xmlhttp.send();

    }
//luo ostoskorin, valittujen tuotteiden perusteella
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
                //console.log(str);
                
                    mainDiv.innerHTML = '<div style="align:center"><form action ="#checkout"><button style="align:center" id="checkout">Checkout</button></form></div>'
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

                        //Append cells to rows
                        row1.appendChild(cell2);
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
	//muuttaa ostoskorin numeroa
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
//näyttää/muuttaa käyttäjätunnusta
    function updateUserName(){
        var login = document.getElementById('login');
        login.innerHTML = '<a href="login.html">Log In</a>';
        login.innerHTML;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            //console.log(xmlhttp.responseText);
            if (this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText);
                var str = this.responseText.substring(this.responseText.indexOf("{")+1);

                document.getElementById("login").innerHTML = '<a href="#ownprofile"> '+str+' </a>';
            }
        };
        xmlhttp.open("GET", "php/dbqueries.php?func=getUser", true);
        xmlhttp.send();
    }
//luo tuote luettelon, valitun kategorian mukaan
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
