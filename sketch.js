let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/lkH1cBJbE/';
// label to classify images
let label = "";
let img;
var div,div1;
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  
}

function setup() {
  createCanvas(600, 400);
  title = createDiv('Pneumonia Classification using Deep Learning in Healthcare')
  title.position(250,10)
  title.style('font-size','25px')
 // title.style('color','hotpink')
  input = createFileInput(handleFile);
  input.position(600,60);
  
  createDiv('There is a great growing interest in the domain of deep learning techniques for identifying and classifying images with various datasets. An enormous availability of datasets (e.g. ChestX-Ray14 dataset) has developed a keen interest in deep learning. Pneumonia is a disease that is caused by various bacteria, virus etc. X-ray is one of the major diagnosis tools for diagnosing pneumonia. This research work mainly proposes a convolutional neural system (CNN) model prepared without any preparation to group and identify the occurrence of pneumonia disease from a given assortment of chest X-ray image tests');
}

function draw(){
  if (img) {
    image(img, 0, 0, width, height);
  }
}
// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
 div1 = createDiv('Label: ' + results[0].label);
  div1.style('font-size','20px')
 div = createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
   clr =  createDiv('Press -Any Key- to clear the output')
 div.style('font-size','20px')
//clr.style('background','hotpink')
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
  classifier.classify(img, gotResult);
}

function keyPressed(){
  div1.hide()
  div.hide()
   clr.hide()
}