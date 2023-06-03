function datos(id){
    switch (id){
        case 1:
            document.getElementById("titulo").textContent = 
            "Barbie";
            document.getElementById("descripcion").textContent = 
            "Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.";
            document.getElementById("duracion").textContent = 
            "Duracion: 1h 40m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 21 de julio de 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/fUx_Z2Ue_K4";
        break;
        case 2:
            document.getElementById("titulo").textContent = 
            "The Marvels";
            document.getElementById("descripcion").textContent = 
            "The Marvels es una próxima película de superhéroes estadounidense basada en los personajes de Marvel Comics, Carol Danvers / Capitana Marvel, Monica Rambeau y Kamala Khan / Ms. Marvel.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 5m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 10 de noviembre de 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/ePILJG1V4IY";
        break;
        case 3:
            document.getElementById("titulo").textContent = 
            "Wonka";
            document.getElementById("descripcion").textContent = 
            "La historia se centra en el joven Willy Wonka y en cómo conoció a los Oompa-Loompas en una de sus primeras aventuras.";
            document.getElementById("duracion").textContent = 
            "Duracion: 1h 30m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 15 de diciembre de 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/sxVQ0qyGzaE";
        break;
        default:
            document.getElementById("titulo").textContent = 
            "Aquaman 2";
            document.getElementById("descripcion").textContent = 
            "Aquaman forja una alianza incómoda con un aliado poco probable para salvar a Atlantis y al resto del planeta de la muerte inminente.";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 20 de diciembre de 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/nA7-qKCg3B8";
        break;
    }
    document.getElementById("portada").src = "pelicula/proximamente/"+id+"/portada.jpg";
    document.getElementById("avance1").src = "pelicula/proximamente/"+id+"/avances/1.png";
    document.getElementById("avance2").src = "pelicula/proximamente/"+id+"/avances/2.png";
    document.getElementById("avance3").src = "pelicula/proximamente/"+id+"/avances/3.png";
    document.getElementById("avance4").src = "pelicula/proximamente/"+id+"/avances/4.png";
}
