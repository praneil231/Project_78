var names=["My Family","Praneil Tumma","Adhvaith Tumma","Sri Lakshmi Tumma","Ramesh Tumma","Aneesh Tumma", "Daksh Ganjala"];
var images=["fam.JPG","Prani.jpg","Adhv.JPG","Sri.jpg","Ram.JPG","Ani.JPG","Simba.JPG"];
var index=0;
function update(){
index=index+1;
if(index>=names.length){
    index=0
}
document.getElementById("familiypicture").setAttribute("src",images[index]);
document.getElementById('name').innerHTML=names[index];
}