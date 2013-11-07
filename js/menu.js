var opciones = Array('INICIAR', 'OPCIONES', 'CREDITOS');
var seleccion = 0;

var menu = function(){
	
	this.dibujar = function(){
		var img = new Image();
		img.src = 'img/logo.png';
		ctx.drawImage(img,20, 20);
		
		for(i=0;i<opciones.length;i++){
			if(seleccion == i){
				ctx.fillStyle = "#3366FF";
				ctx.fillRect(80, 160+(i*60), sizeX-80, 55);
				ctx.fillStyle = "#0039E6";
				ctx.fillRect(80, 212+(i*60), sizeX-80, 3);
			}
			else{
				ctx.fillStyle = "rgba(153,153,102,0.5)";
				ctx.fillRect(90, 165+(i*60), sizeX-90, 45);
			}
			
			ctx.font = "30px Verdana";
			seleccion == i ? ctx.fillStyle = "#36393D" : ctx.fillStyle = "#FFFFFF";
			ctx.fillText(opciones[i], 100, 201+(i*60));
			
			seleccion == i ? ctx.fillStyle = "#FFFFFF" : ctx.fillStyle = "#36393D";
			ctx.fillText(opciones[i], 100, 200+(i*60));
			
		}
	}
	
	
	this.pulsarTecla=function(e){
		//Anulamos las acciones por defecto de la tecla
		e.preventDefault();

		//alert(e.keyCode)
		
		switch(e.keyCode){
			case 87: if(seleccion==0) 
					 	 seleccion=opciones.length-1;
					 else
					 	 --seleccion;
					 break;
			case 83: if(seleccion==opciones.length-1) 
					 	 seleccion=0;
					 else
					 	 ++seleccion;
					 break;
			case 32: if(seleccion==0) modoJuego = 2;
					 if(seleccion==1) modoJuego = 4;
					 if(seleccion==2) modoJuego = 5;
					 break;
			case 8:  modoJuego = 1;
					 break;
		}
	};
	
	
	// MODOJUEGO = 2;
	this.hud = function(){
		var img = new Image();
		img.src = 'img/logo.png';
		ctx.drawImage(img,20, 20);
	}
}
