function resize(){
    let url = document.getElementById('url').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;

    let lastindex = url.lastIndexOf('/');
    
    let lastpart = url.substring(lastindex);
    // let generatedURL =`https://source.unsplash.com${lastPart}/${width}x${height}`;
    let generatedURL = "https://source.unsplash.com"+lastpart+"/"+width+"x"+height;

    let myImage=getElementById('myImage');
    myImage.src= generatedURL;
    myImage.style.display='block';
    
 alert(generatedURL);

    
}

//unsplash.com/photos/RfoISVdKM4U
//source.unsplash.com/RfoISVdKM4U/widthxheight