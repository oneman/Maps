// *******************************************
// Data such as it is
// *******************************************

// master map size
var master_map = new master_map(4127, 3300)

// markers
// the image filename, and the x, y coordinates of the POINT of the PIN if you will
var default_marker = new marker("marker.png", 10, 23)
var marker2 = new marker("marker2.png", 10, 33)
var marker_gif = new marker("marker.gif", 10, 23)
var skull_marker = new marker("skull.png", 21, 30)

// the maps themselves
// arguments: width, height, name(of image and div in one), upper left corner crop start x, upper left corner crop start y, prescale width, prescale height
// first three arguments are manditory, assumes a scaled version of the master map
// if you add the next two varibles, it assumes the map has been cropped ( the crop start x and start y )
// if you add the fifth and sixth varible, it assumes the map has been first cropped, then scaled, these varibles are the
// width and the height of the slice before scaling  

var smallmap = new map(600,480,"smallmap.png");
var medmap = new map(1024,819, "medmap.png");
var croptest = new map(840,862, "croptest.png", 1516, 272);
var crop_and_scaled_test = new map(631,648, "crop_and_scaled_test.png", 1516, 272, 840, 862);
var crop_and_scaled_test2 = new map(333,198, "crop_and_scaled_test2.png", 3047, 2035, 1007, 599);


// These maps are part of a cropset or set of map slices
// the last two numbers are the lower right corner x/y of the cropping pre scaling
// you would define each one of the slices of the master map here, and include the x, y of the 
// lower right endpoint of the cropping from the master map
var crop_and_scaled_test_withend = new map(631,648, "crop_and_scaled_test_withend.png", 1516, 272, 840, 862, 3000, 1500);
var crop_and_scaled_test2_withend = new map(333,198, "crop_and_scaled_test2_withend.png", 3047, 2035, 1007, 599, 4000, 3000);

// you then jam all of your slices into an array so they can be looked thru when using the findmap function
var cropset=new Array(crop_and_scaled_test_withend, crop_and_scaled_test2_withend);




// lots
// lot (x, y)  the x and y from the master map of where you want the pin to be pinned 
// these can be created easily from using the build_coords system

var lot1_1=new lot(1646, 421);
var lot1_2=new lot(1735, 421);
var lot1_3=new lot(1819, 423);
var lot1_4=new lot(1897, 426);
var lot1_5=new lot(1918, 618);
var lot1_6=new lot(1919, 681);
var lot1_7=new lot(1912, 740);

var lot4_21=new lot(3299, 2131);
var lot4_22=new lot(3300, 2184);
var lot4_23=new lot(3299, 2235);
var lot4_24=new lot(3302, 2291);
var lot4_47=new lot(3480, 2132);
var lot4_48=new lot(3482, 2036);
var lot4_40=new lot(3483, 2421);
var lot4_41=new lot(3482, 2382);
var lot4_42=new lot(3481, 2346);
var lot4_43=new lot(3480, 2300);
var lot4_44=new lot(3482, 2246);
var lot4_45=new lot(3479, 2187);
var lot5_22=new lot(3661, 2139);
var lot5_23=new lot(3662, 2203);
var lot5_24=new lot(3660, 2254);
var lot5_25=new lot(3662, 2306);
var lot5_26=new lot(3662, 2356);
var lot5_27=new lot(3661, 2420);
var lot5_28=new lot(3653, 2551);
var lot5_29=new lot(3657, 2592);
var lot4_31=new lot(3181, 2583);
var lot4_32=new lot(3217, 2587);
var lot4_33=new lot(3249, 2585);
var lot4_34=new lot(3286, 2586);
var lot4_35=new lot(3320, 2584);
var lot4_36=new lot(3368, 2579);
var lot4_37=new lot(3416, 2584);
var lot4_38=new lot(3464, 2585);
var lot4_39=new lot(3514, 2586);
