var geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-48.480391261074516, -27.678997355670884],
          [-48.480391261074516, -27.68416581576583],
          [-48.47850298592803, -27.68416581576583],
          [-48.47850298592803, -27.678997355670884]]], null, false);

var ic = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2').filterBounds(geometry).filter(ee.Filter.date('2021-10-01', '2022-03-31'));
print (ic)
var n = ic.getInfo().features.length;
var list = ic.toList(n,0);
var i = 0;

// Applies scaling factors.
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true).addBands(thermalBands, null, true);
}

var rbgVisualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 0.3,
};

for(i=0;i<n;i++){
  print(i);
  var im= ee.Image(list.get(i));
  im =  applyScaleFactors(im);
  print( im )
  Map.addLayer( im, rbgVisualization,"image: "+ i);
}
//center in the first point defined in geometry
var list = geometry.coordinates();
print(list)
var point = list.getInfo();
print(point)
print(point[0][0][0])
Map.setCenter(point[0][0][0],point[0][0][1],9);
