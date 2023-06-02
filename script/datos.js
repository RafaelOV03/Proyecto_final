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
            document.getElementById("titulo").textContent = 
            "No descansaras";
            document.getElementById("descripcion").textContent = 
            "El médico obliga a Julie a guardar reposo absoluto durante el embarazo, pero, entonces, ella empieza a experimentar sucesos paranormarles y ver figuras fantasmagóricas mientras está tumbada en la cama.";
            document.getElementById("duracion").textContent = 
            "Duracion: 1h 30m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 15 de julio del 2022";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/h-2QIJS-U0c";
        break;
        case 3:
            document.getElementById("titulo").textContent = 
            "Super Mario Bros. La Pelicula";
            document.getElementById("descripcion").textContent = 
            "Dos hermanos plomeros, Mario y Luigi, caen por las alcantarillas y llegan a un mundo subterráneo mágico en el que deben enfrentarse al malvado Bowser para rescatar a la princesa Peach, quien ha sido forzada a aceptar casarse con él.";
            document.getElementById("duracion").textContent = 
            "Duracion: 1h 30m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 5 de abril del 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/_1f2RLdxQfA";
        break;
        case 4:
            document.getElementById("titulo").textContent = 
            "Guardianes de la galaxia Vol.3";
            document.getElementById("descripcion").textContent = 
            "Guardianes de la Galaxia vol. 3 es una película de superhéroes estadounidense basada en el equipo de superhéroes Guardianes de la Galaxia, perteneciente a Marvel Comics.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 30m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 4 de mayo del 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/u3V5KDHRQvk";
        break;
        case 5:
            document.getElementById("titulo").textContent = 
            "Rápidos y furiosos 9: La saga de Rápidos ";
            document.getElementById("descripcion").textContent = 
            "Dom Toretto vive una vida tranquila junto a Letty y su hijo, pero el peligro siempre regresa a su vida. En esta ocasión, el equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo: el hermano de Dom.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 15m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 25 de junio del 2021";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/3YNwcdVkpZQ";
        break;
        case 6:
            document.getElementById("titulo").textContent = 
            "John Wick 4";
            document.getElementById("descripcion").textContent = 
            "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. Sin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 49m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 24 de mayo del 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/L0anWmmd8TI";
        break;
        case 7:
            document.getElementById("titulo").textContent = 
            "Transformers: el despertar de las bestias";
            document.getElementById("descripcion").textContent = 
            "Durante la década de 1990, los Maximals, Predacons y Terrorcons se unen a la batalla existente en la Tierra entre Autobots y Decepticons.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 7m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 9 de junio del 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/Db5SvKPJc-w";
        break;
        case 8:
            document.getElementById("titulo").textContent = 
            "Spider-Man: a través del Spider-Verso";
            document.getElementById("descripcion").textContent = 
            "Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 16m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 24 de mayo del 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/L0anWmmd8TI";
        break;
        case 9:
            document.getElementById("titulo").textContent = 
            "John Wick 4";
            document.getElementById("descripcion").textContent = 
            "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. Sin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.";
            document.getElementById("duracion").textContent = 
            "Duracion: 2h 49m";
            document.getElementById("tiempo").textContent = 
            "Fecha de estreno: 24 de mayo del 2023";
            document.getElementById("trailer").src = 
            "https://www.youtube.com/embed/L0anWmmd8TI";
        break;
    }
    document.getElementById("portada").src = "pelicula/cartelera/"+id+"/portada.jpg";
    document.getElementById("avance1").src = "pelicula/cartelera/"+id+"/avances/1.png";
    document.getElementById("avance2").src = "pelicula/cartelera/"+id+"/avances/2.png";
    document.getElementById("avance3").src = "pelicula/cartelera/"+id+"/avances/3.png";
    document.getElementById("avance4").src = "pelicula/cartelera/"+id+"/avances/4.png";
}
