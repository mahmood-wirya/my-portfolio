function resize(){
    let url = Document.getElementById('url').value;
    let width = Document.getElementById('width').value;
    let height = Document.getElementById('height').value;

    let lastindex = url.lastIndexOf('/');
    
    let lastpart = url.substring(lastindex);
    // let generatedURL =`https://source.unsplash.com${lastPart}/${width}x${height}`;
    
    let generatedURL = "https://source.unsplash.com"+lastpart+"/"+width+"x"+height;
    
    getElementById("UrlWithText").innerHTML=generatedURL;
//     let myImage=getElementById('myImage');
//     let myImageString = string(generatedURL);
//     myImage.src= myImageString;
//     myImage.style.display='block';
    
//  console.log(generatedURL);
    
    

    // alert(generatedURL);
}

//unsplash.com/photos/RfoISVdKM4U
//source.unsplash.com/RfoISVdKM4U/widthxheight