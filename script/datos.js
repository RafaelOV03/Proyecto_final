function datos(id){
    switch (id){
        case 1:
            document.getElementById("titulo").textContent = 
            "La Ex";
            document.getElementById("descripcion").textContent = 
            "A los 16 años, Sasha puso en Internet la foto de su supuesta novia, una chica espectacular, para presumir ante sus amigos. Años después, y a punto de casarse, la chica de la foto reaparece para convertir su vida en una pesadilla.";
            document.getElementById("duracion").textContent = 
            "Duracion: 1h 30m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 11 de marzo del 2021";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/6iIgkTLGV9M";
        break;
        case 2:
            return "";
        break;
        case 3:
            return "";
        break;
        case 4:
            return "";
        break;
    }
    document.getElementById("portada").src = "pelicula/cartelera/"+id+"/portada.jpg";
    document.getElementById("avance1").src = "pelicula/cartelera/"+id+"/avances/1.png";
    document.getElementById("avance2").src = "pelicula/cartelera/"+id+"/avances/2.png";
    document.getElementById("avance3").src = "pelicula/cartelera/"+id+"/avances/3.png";
    document.getElementById("avance4").src = "pelicula/cartelera/"+id+"/avances/4.png";
}