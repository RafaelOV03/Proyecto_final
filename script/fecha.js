    function hace(d,m,y){
        let fecha = new Date();
        let mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        let dia = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

        let num = (d+m*30+y*365)-(fecha.getDate() + fecha.getMonth()*30 + fecha.getFullYear()*365);
        let resultado = "";

        if(num<0){
            resultado = "Hace ";
        }
        else if(num == 0){
            return "Se estrena Hoy";
        }else{
            resultado = "Faltan ";
        }

        num = Math.abs(num);        
        if(num < 7){
            resultado+= num + " dias"
        }else if(num <29){
            num=parseInt(num/7);
            resultado+= num + " semanas"
        }else if(num <365){
            num=parseInt(num/29);
            resultado+= num + " meses"
        }else{
            num=parseInt(num/365);
            resultado+= num + " años"
        }
        return resultado;
    }

