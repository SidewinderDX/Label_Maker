document.getElementById('winename').addEventListener('keyup', e => {
    document.getElementById('winenamepreview').innerText = document.getElementById('winename').value;
    //console.log('Caret at: ', e.target.selectionStart);
  });

document.getElementById('maker').addEventListener('keyup', e => {
    document.getElementById('makerpreview').innerText = document.getElementById('maker').value;
    //console.log('Caret at: ', e.target.selectionStart);
  });
  
document.getElementById('year').addEventListener('keyup', e => {
    document.getElementById('yearpreview').innerText = "Jahrgang " + document.getElementById('year').value;
    //console.log('Caret at: ', e.target.selectionStart);
  });

document.getElementById('notes').addEventListener('keyup', e => {
    document.getElementById('notespreview').innerText = document.getElementById('notes').value;
    //console.log('Caret at: ', e.target.selectionStart);
  });

document.getElementById('picture').addEventListener('change', e => {
    document.getElementById('logo').innerHTML = "<img src=\"" + URL.createObjectURL(document.getElementById('picture').files[0]) + "\">";
});

function createLabels(){
    var logo = "<img src=\"" + URL.createObjectURL(document.getElementById('picture').files[0]) + "\">";
    var winename = document.getElementById('winename').value;
    var maker = document.getElementById('maker').value;
    var year = "Jahrgang " + document.getElementById('year').value;
    var notes = document.getElementById('notes').value;

    var parent = document.getElementById('print');
    console.log("Childs:" + parent.childElementCount); 
    var childs = parent.children;

    var inHTML = "<div class=\"textPreview\">" + logo + "</div>\
                  <div class=\"textPreview\">" + winename + "</div>\
                  <div class=\"textPreview\">" + maker + "</div>\
                  <div class=\"textPreview\">" + year + "</div>\
                  <div class=\"textPreview\">" + notes + "</div></div>";
    
    for(var i=0; i < childs.length; i++){  
        childs[i].innerHTML = inHTML;
          
    }

    document.getElementsByClassName('inputWrapper')[0].style.display = "none";
    var print = document.getElementById('print');
    print.classList.remove("hideme");
};
