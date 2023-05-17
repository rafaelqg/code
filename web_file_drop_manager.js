<html>
    <head>
        <script>
            const copiedFiles = [];// this variable store all droped files in base64 format
            function initEventHandler(){   
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach( eventName =>{
                    document.addEventListener(eventName, (event) =>{
                        event.preventDefault();
                        event.stopPropagation();                  
                        if(eventName !== "drop") return false;

                        let dt = event.dataTransfer;
                        let files = dt.files;
                        
                        for(let i = 0; files.length; i++){
                            let file = files[i];
                            console.log("Data-file",file);
                            console.log("copied file", file);
                            
                            file.arrayBuffer().then((arrayBuffer) => {
                                const blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });
                                console.log(blob);
                                let divImages = document.getElementById("images_board");
                                let blobUrl = URL.createObjectURL(blob);
                                let imageHTML = "<a href='"+ blobUrl +"' target='_blank'>";
                                if (file.type.indexOf("image/") !== -1 ){
                                    imageHTML += "<img class='pastedImage' src='" + blobUrl + "'/>" ;
                                }else{
                                    let indexDot = file.name.indexOf(".");
                                    let extension = indexDot === -1 ? "FILE" : file.name.substring(indexDot, file.name.length).toUpperCase();
                                    imageHTML += "<div class='pastedImage' ><h1>" + extension + "</h1>" + file.name + "</div>";
                                }
                                imageHTML += "</a>";
                                divImages.innerHTML += imageHTML;
                                //store content to later backend saving
                                let reader = new FileReader();
                                reader.readAsDataURL(blob); 
                                reader.onloadend = function() {
                                    let base64data = reader.result;                
                                    copiedFiles.push(base64data);
                                    console.log(copiedFiles);
                                }                            
                            });
                             
                        }
                       
                    });               
                });
            }

              

            function displayImagesContent(){
                document.getElementById("image_content").innerHTML = JSON.stringify(copiedFiles);
            }
        </script>
        <style>
            .images_board{
                border: 2px dashed #777;
                width: 80%;
                min-height: 300px;
                max-width: 80%;
                padding: 20px;
                word-wrap: break-word;
            }

            .pastedImage{
                padding: 20px;
                margin: 10px;
                border: 1px solid #AAA;
                width: 250px;
                height: 200px;
            }
        </style>
    </head>
    <body onload="initEventHandler()">
        <h1>Handling onDrop to get files from your operational system</h1>
        <div>
            Copy a file from your operational system or a image to a web page using drag and drop from your desktop.
        </div>
        <div id="images_board" class="images_board"></div>
        <div>
            <a href="#" onclick="displayImagesContent()">Click here to see images and files binaries content in base64 format.</a>
        </div>
        <div id="image_content" class="images_board">
        </div>
    </body>
</html>
