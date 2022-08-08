import kd  from 'kd-tree-javascript/kdTree.js';
import { cities } from './cities.js';

export var distance = function (checkPoint, centerPoint) {
    var ky = 40000 / 360;
    var kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
    var dx = Math.abs(centerPoint.long - checkPoint.long) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy);
  };
  export var tree =new  kd.kdTree(cities, distance, ['lat', 'long']);