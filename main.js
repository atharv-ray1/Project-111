Webcam.set({
    width:359,
    height:304,
    image_format:"png",
    png_quality:90,
    });
    
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    
    function Click(){
        Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='Capture_image'src='"+data_uri+"'>"
        });
    }
    console.log("ml5 version= ",ml5.version);
    Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hD8c_v5eI/model.json",modelLoaded);
    
    function modelLoaded(){
        console.log("Model Is Loaded");
    }
    