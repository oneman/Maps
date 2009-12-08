<?php include("header.php"); ?>

<h1>scaled small</h1>
<script type="text/javascript">

smallmap.draw();

showmarker(lot1_1, smallmap);
showmarker(lot1_2, smallmap);
showmarker(lot1_3, smallmap);
showmarker(lot1_4, smallmap);
showmarker(lot1_5, smallmap);

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


<h1>scaled and cropped 2</h1>

<script type="text/javascript">

crop_and_scaled_test2.draw();

showmarker(lot4_21, crop_and_scaled_test2);
showmarker(lot4_22, crop_and_scaled_test2);
showmarker(lot4_23, crop_and_scaled_test2);
showmarker(lot4_24, crop_and_scaled_test2);
showmarker(lot5_29, crop_and_scaled_test2, marker2);

</script>

<?php include("footer.php"); ?>
