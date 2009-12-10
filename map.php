<?php include("header.php"); ?>

<p>Map Demo Page View source to see usage and comments</p>
<p>the dependencies of this system are the map and marker images, the map js code in map_code.js and the map data in map_data.js</p>


<div id="maparea">

<h1>scaled small</h1>

<script type="text/javascript">


// smallmap was defined in map_data.js
// the draw function takes one argument, the div the map is put into
// by default it is put into a div with the id 'maparea'
smallmap.draw();

// showmarker takes 3 arguments, the last one optional
// the lot, the map and the marker

showmarker(lot1_1, smallmap, marker_gif);
showmarker(lot1_2, smallmap, marker_gif);
showmarker(lot1_3, smallmap, marker_gif);
showmarker(lot1_4, smallmap, marker_gif);
showmarker(lot1_5, smallmap, marker_gif);

showmarker(lot4_21, smallmap);
showmarker(lot4_22, smallmap);
showmarker(lot4_23, smallmap);
showmarker(lot4_24, smallmap);

</script>

<br/>

<h1>scaled medium</h1>
<script type="text/javascript">

medmap.draw();

showmarker(lot1_1, medmap);
showmarker(lot1_2, medmap);
showmarker(lot1_3, medmap);
showmarker(lot1_4, medmap);
showmarker(lot1_5, medmap);

showmarker(lot4_21, medmap);
showmarker(lot4_22, medmap);
showmarker(lot4_23, medmap);
showmarker(lot4_24, medmap);
showmarker(lot5_29, medmap);
</script>

<h1>cropped</h1>

<script type="text/javascript">

croptest.draw();

showmarker(lot1_1, croptest);
showmarker(lot1_2, croptest, marker2);
showmarker(lot1_3, croptest, skull_marker);
showmarker(lot1_4, croptest);
showmarker(lot1_5, croptest, marker2);


</script>


<h1>scaled and cropped</h1>

<script type="text/javascript">

crop_and_scaled_test.draw();

showmarker(lot1_1, crop_and_scaled_test);
showmarker(lot1_2, crop_and_scaled_test);
showmarker(lot1_3, crop_and_scaled_test, skull_marker);
showmarker(lot1_4, crop_and_scaled_test);
showmarker(lot1_5, crop_and_scaled_test);


</script>


<h1>find a map based on a lot</h1>
<script type="text/javascript">

// monkeymap is just called monkeymap because i got to call it something
// findmap takes two arguments, the lot and the cropset
// think of the cropset as a set of imageready slices (noone overlapping)
// so you only need to know the lot in order to show the correct map slice
// cropset was defined in map_data.js and a proper one would contain slices
// of the entire map, mine only has two chunks

monkeymap = findmap(lot5_29, cropset);
monkeymap.draw();
showmarker(lot5_29, monkeymap);
</script>


<h1>find a map based on a lot 2</h1>
<script type="text/javascript">
hmap = findmap(lot1_2, cropset);
hmap.draw();
showmarker(lot1_2, hmap);
</script>


</div>



<div style="margin: 50px; padding: 50px; width: 400px; text-align: center; background-color: red;" id="funkydiv">
<h1>scaled and cropped test 2 in a funky div</h1>


</div>

<script type="text/javascript">

crop_and_scaled_test2.draw("funkydiv");

showmarker(lot4_21, crop_and_scaled_test2);
showmarker(lot4_22, crop_and_scaled_test2);
showmarker(lot4_23, crop_and_scaled_test2);
showmarker(lot4_24, crop_and_scaled_test2);
showmarker(lot5_29, crop_and_scaled_test2, marker2);

</script>



<?php include("footer.php"); ?>
