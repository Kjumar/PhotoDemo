import {Photo, MattedPhoto, FramedPhoto} from './photo.js';

let p1 = new Photo();
let p2 = new Photo(14, 10);
let m1 = new MattedPhoto();
let m2 = new MattedPhoto(14, 10, "blue");
let f1 = new FramedPhoto();
let f2 = new FramedPhoto(14, 10, "steel", "brushed metal");
console.log(p1.toString());
console.log(p2.toString());
console.log(m1.toString());
console.log(m2.toString());
console.log(f1.toString());
console.log(f2.toString());