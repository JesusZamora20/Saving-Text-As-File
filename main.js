const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".file-format select"),
saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", () => {
    if(document.querySelector(".textarea").value == ""){
        document.querySelector(".save-button").disabled = true;
    } else{
        const blob = new Blob([textarea.value],{type: selectMenu.value});
        //createObjectUrl creates a url that represent a passed object
        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");//creating <a> tag
        link.download = fileNameInput.value;//passing filename as download value of link 
        link.href = fileUrl;//passing fileUrl as href  value of link
        link.click();//clicking link so the file can download
    }
    document.querySelector(".save-button").disabled = false;
});

selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveButton.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
});

