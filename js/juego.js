
function juego(){
	this.modoJuego = 0;
	
	
	this.ctx;
	
	this.canvas;
	
	
	this.sizeY;
	this.sizeY;
	
	this.constructor=function(){
		this.canvas = document.getElementById('canvas');
		
		this.ctx = this.canvas.getContext('2d');

		this.sizeX = this.canvas.width;
		this.sizeY = this.canvas.height;
		
		this.modoJuego = 1;
	};
	
	
	this.posicionLogo = -70;
	this.opciones = Array('Iniciar JUEGO A', 'Iniciar JUEGO B');
	this.menu=function(idCanvas){
		var img = new Image();
		img.src = 'img/logo.png';
		this.ctx.drawImage(img,20, this.posicionLogo+(5*50));
		
		if(this.posicionLogo < 15) this.posicionLogo+=1;
		
		
		for(i=0;i<this.sizeY/50;i++){
			for(e=0;e<this.sizeX/50;e++){
				if(i!= 5 && i!= 6 && i!= 8 && i!= 10){
					var img = new Image();
					img.src = 'img/piedra.png';
					this.ctx.drawImage(img,0+(e*50), 0+(i*50));
				}
			}
		}
		if(this.posicionLogo >= 14) {
			for(i=0;i<this.opciones.length;i++){
				this.ctx.font = "25px verdana";
				this.ctx.fillStyle = "#000";
				this.ctx.fillText(this.opciones[i], 35, 35+(8*50)+(i*100));
			}
		}
	};
	
	
	
	
	
	
	
	
	
	

	this.pulsarTecla=function(e){
		
	};
	
	
	
	this.motor=function(){
		this.ctx.clearRect(0,0,this.sizeX,this.sizeY);
		
		switch(this.modoJuego){
			case 1: this.menu(); break;
		}
	};
}
