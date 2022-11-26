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
    document.getElementsByTagName('img').height = "10px";
    document.getElementsByTagName('img').width = "10px";
});