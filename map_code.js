// *******************************************
// Functions / Objects and the Like
// *******************************************


// *******************************************
// master map object store master map size
function master_map(width, height)
{
this.width = width;
this.height = height;
}

// *******************************************
// marker object store marker info
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


// *******************************************
// map object store map info
function map(width,height,imagename,crop_x,crop_y, prescale_width, prescale_height, endcrop_x, endcrop_y)
{

var crop_x = (crop_x == null) ? 0 : crop_x;
var crop_y = (crop_y == null) ? 0 : crop_y;

var prescale_width = (prescale_width == null) ? 0 : prescale_width;
var prescale_height = (prescale_height == null) ? 0 : prescale_height;

var endcrop_x = (endcrop_x == null) ? 0 : endcrop_x;
var endcrop_y = (endcrop_y == null) ? 0 : endcrop_y;

this.width = width;
this.height = height;
this.imagename = imagename;
this.divname = imagename.split(".")[0];
this.draw = draw;
this.crop_x = crop_x;
this.crop_y = crop_y;

this.prescale_width = prescale_width;
this.prescale_height = prescale_height;

this.endcrop_x = endcrop_x;
this.endcrop_y = endcrop_y;
}

// *******************************************
// draws the map to a div
function draw(drawtodiv)
{

var drawtodiv = (drawtodiv == null) ? 'maparea' : drawtodiv;

mapimg=document.createElement("div");
// Doesn't work in IE7
//mapimg.setAttribute('style', 'position: relative; width: ' + this.width + 'px; height: ' + this.height + 'px;');
mapimg.style.cssText = 'position: relative; width: ' + this.width + 'px; height: ' + this.height + 'px;';

mapimg.setAttribute('id', this.divname);
mapimg.innerHTML = "<img src=\"" + this.imagename + "\">";
document.getElementById(drawtodiv).appendChild(mapimg);
}


// *******************************************
// shows a marker on a map
function showmarker(lot, map, marker, params, offset_x, offset_y)
{

var offset_x = (offset_x == null) ? 0 : offset_x;
var offset_y = (offset_y == null) ? 0 : offset_y;

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
markerimg=document.createElement("div");
markerimg.innerHTML = "<img " + params + " src=\"" + marker.image + "\">";

// include offset
var x_pos = (new_x - marker.point_x) + offset_x;
var y_pos = (new_y - marker.point_y) + offset_y;

// This is perhaps a good way to do it, but it wont work in IE7
// markerimg.setAttribute('style', 'position: absolute; z-index: ' + zindex + '; top: ' + (new_y - marker.point_y) + '; left: ' + (new_x - marker.point_x) + '; ');
markerimg.style.cssText = 'position: absolute; left: ' + x_pos + 'px; top: ' + y_pos + 'px;';
markerimg.setAttribute('id', 'marker' + lot.pos_x + lot.pos_y + map.divname);
document.getElementById(map.divname).appendChild(markerimg);


}

// *******************************************
// finds a map in a cropset based on lot number
function findmap(lot, maps) {
for(var x=0; x<maps.length; x++) {
 var map = maps[x];
  if ((map.crop_x < lot.pos_x) && (map.endcrop_x > lot.pos_x) && (map.crop_y < lot.pos_y) && (map.endcrop_y > lot.pos_y)) {
   return map;
  }
 }
}




