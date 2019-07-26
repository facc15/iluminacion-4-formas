/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 


{
    var cantidad;
    var precio=35;
    var marca;
    var preciobruto;
    var preciodescuento;
    var preciofinal;
    var descuento;
    var aumento;

    marca=document.getElementById("Marca").value;
    cantidad=document.getElementById("Cantidad").value;

    cantidad=parseInt(cantidad);

    switch(marca)
    {
        case "ArgentinaLuz":
            if(cantidad<3)
            {
                descuento=0;
            }
            else if(cantidad==5)
            {
                descuento=40;
            }
            else if(cantidad==4)
            {
                descuento=25;
            }
            else if(cantidad==3)
            {
                descuento=15;
            }
            else 
            {
                descuento=50;
            }
            break;
        case "FelipeLamparas":
            if(cantidad<3)
            {
                descuento=0;
            }
            else if(cantidad==3)
            {
                descuento=10;
            }
            else if(cantidad==4)
            {
                descuento=25;
            }
            else if(cantidad==5)
            {
                descuento=30;
            }
            else
            {
                descuento=50;
            }
            break;
        case "JeLuz":
        case "Hazlluminacion":
        case "Osram":
            if(cantidad<3)
            {
                descuento=0;
            }
            else if(cantidad==3)
            {
                descuento=5;
            }
            else if(cantidad==4)
            {
                descuento=20;
            }
            else if(cantidad==5)
            {
                descuento=30;
            }
            else
            {
                descuento=50;
            }
            break;
    }

    preciobruto=precio*cantidad;
    preciodescuento=preciobruto*descuento/100;
    preciofinal=preciobruto-preciodescuento;

    if(preciofinal>120)
    {
        aumento=preciofinal*10/100;
        preciofinal=preciofinal+aumento;
        alert("IIBB USTED PAGÓ " + aumento + " pesos");

    }

    document.getElementById("precioDescuento").value=preciofinal;

}



























  //IF Y ADENTRO SWITCH
/*{
    var cantidad;
    var marca;
    var precio=35;
    var preciobruto;
    var descuento;
    var preciodescuento;
    var preciofinal;
    var aumento;

    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;

    cantidad=parseInt(cantidad);

    if(marca=="ArgentinaLuz")
    {
        switch(cantidad)
        {
            case 1:
            case 2:
                descuento=0;
                break;
            case 3:
                descuento=15;
                break;
            case 4:
                descuento=25;
                break;
            case 5:
                descuento=40;
                break;
            default:
                {
                    descuento=50;
                }
        }
    }else if(marca=="FelipeLamparas")
    {
        switch(cantidad)
        {
            case 1:
            case 2:
                descuento=0;
                break;
            case 3:
                descuento=10;
                break;
            case 4:
                descuento=25;
                break;
            case 5:
                descuento=30;
                break;
            default:
                {
                    descuento=50;
                }
        }
    }else 
    {
        switch(cantidad)
        {
            case 1:
            case 2:
                descuento=0;
                break;
            case 3:
                descuento=5;
                break;
            case 4:
                descuento=20;
                break;
            case 5:
                descuento=30;
                break;
            default:
                {
                    descuento=50;
                }
        }
    }

    preciobruto=cantidad*precio;
    preciodescuento=preciobruto*descuento/100;
    preciofinal=preciobruto-preciodescuento;

    if(preciofinal>120)
    {
        aumento=preciofinal*10/100;
        preciofinal=preciofinal+aumento;
        alert("IIBB Usted pagó " + aumento);
    }

    document.getElementById("precioDescuento").value=preciofinal;    

}






































//TODO SWITCH



/*{
    var cantidad;
    var precio;
    var descuento;
    var impuesto;
    var preciobruto;
    var preciodescuento;
    var marca;
    var preciofinal;

    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    cantidad=parseInt(cantidad);

    precio=35;

    switch(marca)
    {
        case "ArgentinaLuz":
            {
                switch(cantidad)
                {
                    case 1:
                    case 2:
                        descuento=0;
                        break;
                    case 3:
                        descuento=15;
                        break;
                    case 4:
                        descuento=25;
                        break;
                    case 5:
                        descuento=40;
                        break;
                    default:
                        {
                            descuento=50;
                        }

                }
                break;
            }
        case "FelipeLamparas":
            {
                switch(cantidad)
                {
                    case 1:
                    case 2:
                        descuento=0;
                        break;
                    case 3:
                        descuento=10;
                        break;
                    case 4:
                        descuento=25;
                        break;
                    case 5:
                        descuento=30;
                        break;
                    default:
                        {
                            descuento=50;
                        }
                }
                break;
            }    
        case "JeLuz":
        case "Hazlluminacion":
        case "Osram":
            {
                switch(cantidad)
                {
                    case 1:
                    case 2:
                        descuento=0;
                        break;
                    case 3:
                        descuento=5;
                        break;
                    case 4:
                        descuento=20;
                        break;
                    case 5:
                        descuento=30;
                        break;
                    default:
                        {
                            descuento=50;
                        }
                }
                break;
            }
    }

    preciobruto=precio*cantidad;
    preciodescuento=preciobruto*descuento/100;
    preciofinal=preciobruto-preciodescuento;

    if(preciofinal>120)
    {
        impuesto=preciofinal*0.1;
          preciofinal=preciofinal+impuesto;
        alert("Usted pagó" + " " + impuesto);
    }

    document.getElementById("precioDescuento").value=preciofinal;

}




























































     

    //TODO EN IF


/*{
    var cantidad;
    var marca;
    var descuento;
    var impuesto;
    var preciofinal;
    var preciodescuento;
    var precio;
    var preciobruto;

    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;

    cantidad=parseInt(cantidad);
    descuento=parseInt(descuento);
    precio=35;

    if(cantidad>=6)
    {
        descuento=50;
    }else
    {
        if(cantidad==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=40
            }else if (marca!="ArgentinaLuz")
            {
                descuento=30
            }

        }else if(cantidad==4)
        {
            if(marca=="ArgentinaLuz" && "FelipeLamparas")       //          por que no || ?
            {
                descuento=25
            }else
            {
                descuento=20
            }
        }else if(cantidad==3)
            {
                if(marca=="ArgentinaLuz")
                {
                    descuento=15
                }else if(marca=="FelipeLamparas")
                {
                    descuento=10
                }else
                {
                    descuento=5
                }
            }
    }
    preciobruto=precio*cantidad;
    preciodescuento=preciobruto*descuento/100;
    preciofinal=preciobruto-preciodescuento;

    if(preciofinal>120)
    {
        impuesto=preciofinal*0,1;
          preciofinal=preciofinal+impuesto;
        alert("Usted pagó" + " " + impuesto);
    }

    document.getElementById("precioDescuento").value=preciofinal;
}*/
