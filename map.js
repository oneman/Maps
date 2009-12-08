// Functions / Objects and the Like

function master_map(width, height)
{
this.width = width;
this.height = height;
}

function marker(image, point_x, point_y)
{
this.image = image;
this.point_x = point_x;
this.point_y = point_y;
}

function lot(pos_x,pos_y){
this.pos_x=pos_x
this.pos_y=pos_y
}

function map(width,height,mapname,crop_x,crop_y, prescale_width, prescale_height)
{

var crop_x = (crop_x == null) ? 0 : crop_x;
var crop_y = (crop_y == null) ? 0 : crop_y;

var prescale_width = (prescale_width == null) ? 0 : prescale_width;
var prescale_height = (prescale_height == null) ? 0 : prescale_height;

this.width = width;
this.height = height;
this.mapname = mapname;
this.draw = draw;
this.crop_x = crop_x;
this.crop_y = crop_y;

this.prescale_width = prescale_width;
this.prescale_height = prescale_height;
}

function draw()
{
document.write("<div id=\"" + this.mapname + "\" style =\"position: relative;background-image:url('" + this.mapname + ".png');width:" + this.width + "px;height:" + this.height + "px;\"></div>");
}

function showmarker(lot, map, marker)
{

var zindex = (zindex == null) ? 2 : zindex;

var marker = (marker == null) ? default_marker : marker;

if (map.crop_x > 0) {
new_x = lot.pos_x - map.crop_x;
new_y = lot.pos_y - map.crop_y;

if (map.prescale_width > 0) {
new_x = new_x * ((map.width / map.prescale_width));
new_y = new_y * ((map.height / map.prescale_height));
}

} else {
new_x = lot.pos_x * ((map.width / master_map.width));
new_y = lot.pos_y * ((map.height / master_map.height));
}
mapimg=document.createElement("img");
mapimg.setAttribute('src', marker.image);
mapimg.setAttribute('alt', 'marker');
mapimg.setAttribute('style', 'position: absolute; z-index: ' + zindex + ';');
mapimg.setAttribute('id', 'marker' + lot.pos_x + lot.pos_y + map.mapname);
document.getElementById(map.mapname).appendChild(mapimg);
document.getElementById('marker' + lot.pos_x + lot.pos_y + map.mapname).style.left = new_x - marker.point_x;
document.getElementById('marker' + lot.pos_x + lot.pos_y + map.mapname).style.top = new_y - marker.point_y;

zindex = zindex + 1;
}

// Data as such

var default_marker = new marker("marker.png", 10, 23)
var marker2 = new marker("marker2.png", 10, 33)
var skull_marker = new marker("skull.png", 21, 30)

var master_map = new master_map(4127, 3300)

// map function: width, height, name, upper left corner crop start x, upper left corner crop start y, prescale width, prescale height

var smallmap = new map(600,480,"smallmap");
var medmap = new map(1024,819, "medmap");
var croptest = new map(840,862, "croptest", 1516, 272);
var crop_and_scaled_test = new map(631,648, "crop_and_scaled_test", 1516, 272, 840, 862);

var crop_and_scaled_test2 = new map(333,198, "crop_and_scaled_test2", 3047, 2035, 1007, 599);

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


