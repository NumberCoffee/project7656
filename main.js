//https:teachablemachine.withgoogle.com/models/ncDSwOOnh/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
var camera = document.getElementById("camera");
Webcam.attach("#camera"); 
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedImage' src='" + data_uri + "'>";
    });
}
console.log("ml5 version",ml5.version);
classify = ml5.imageClassifier("https:teachablemachine.withgoogle.com/models/ncDSwOOnh/model.json",modelLoded);
function modelLoded(){
    console.log("model is loded");
}
function check(){
    img = document.getElementById('capturedImage');
    classify.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}