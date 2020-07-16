let dropZone = document.getElementById("drop-zone"),

imagePreview = document.getElementById("image-preview");

let fakeInput = document.createElement("input");

fakeInput.type = "file";

fakeInput.multiple = true;

fakeInput.accept = "image/*";

dropZone.addEventListener("click", ()=>{

	fakeInput.click();
});

fakeInput.addEventListener("change", ()=>{

	handleFiles(fakeInput.files);
});

function preventDefaultFunction(e) {

	e.preventDefault();


	e.stopPropagation();
}

dropZone.addEventListener('dragenter', preventDefaultFunction, false)

dropZone.addEventListener('dragleave', preventDefaultFunction, false)

dropZone.addEventListener('dragover', preventDefaultFunction, false)

dropZone.addEventListener('drop', preventDefaultFunction, false)


function handleFiles(files) {

for (var i = 0, len = files.length; i < len; i++) {

	if (validateImage(files[i]))

		previewAnduploadImage(files[i]);

	}
}


function handleDrop(e) {

	var data = e.dataTransfer,
	files = data.files;

handleFiles(files)      

}

dropZone.addEventListener('drop', handleDrop, false);

function validateImage(image) {

	var validTypes = ['image/jpeg', 'image/png', 'image/gif'];


	if (validTypes.indexOf( image.type ) === -1) {

		alert("Invalid File Type");

		return false;

	}

var maxSizeInBytes = 10e6;

if (image.size > maxSizeInBytes) {

	alert("File too large");

	return false;

}

return true;

}


function previewAnduploadImage(image) {

var imgView = document.createElement("div");

imgView.className = "image-view";

imagePreview.appendChild(imgView);

var img = document.createElement("img");

imgView.appendChild(img);

var reader = new FileReader();

reader.onload = function(e) {

	img.src = e.target.result;

}

reader.readAsDataURL(image);

}
