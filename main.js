// Webcam.set({
//     height:350,
//     width:400,
//     image_format:'png',
//     png_quality:200
//     });
//     camera = document.getElementById("camera");
//     Webcam.attach('#camera');
    
//     function take_snapshot()

//     {
//         console.log("ridhaan")
    
//     Webcam.snap(function(data_uri){
//         document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
//     });
//     }
//     console.log('ml5 version:',ml5.version);
    
//     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4sgKj7aAn/model.json',modelLoaded)
    
    
//     function modelLoaded(){
//         console.log('ml5 version:',ml5.version);
//     }
Webcam.set({
    height:350,
    width:400,
    image_format:'png',
    png_quality:200
    });
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
    
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version:',ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4sgKj7aAn/model.json',modelLoaded)
    
    
    function modelLoaded(){
        console.log('ml5 version:',ml5.version);
        
    
    
        
    }
