let fs = require('fs');
const filename="example_text_file.txt";



//Creates a new empty file if it does not exist.
/*
fs.open(filename, 'w', function (err, file) {
    if (err) throw err;
    console.log("File opened", file);
  });


//Append content to one existing file
fs.appendFile(
    filename,
    "File new content appended.", 
    function (err) {
        if (err) throw err;
        console.log('Content appended!');
    }
);
*/

//Read file content
fs.readFile(
    filename, 
    function(err, data) {
        if (err) throw err;
        console.log('File content:',data, data.toString() );

    }
);

fs.writeFile(filename, 'NEW FILE CONTENT', function (err) {
    if (err) throw err;
    console.log('Content writen.');
  });
 
 /*
  fs.unlink(filename, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
 */

  fs.rename(filename, 'new_file_name_renamed.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
