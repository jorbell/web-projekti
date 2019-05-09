<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
  <title>Webstore</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/stylesheet.css">
</head>
<body>
<nav class="top">
    <ul class="ultop">
	  <li id="main"><a id="home" href="index.php">Webstore</a></li>
	      <ul class="row">
			<li id="categories"></li>
		  <ul>
      <li id="login"><a href="login.html">Log in</a></li>
      <li id="cart"><a href="#cart">Shopping cart</a></li>
    </ul>
</nav>
<div id="center">
    <div class="row">
        <div id=products></div>
    </div>
</div>
<script src="js/index.js"></script>
</body>
</html>
