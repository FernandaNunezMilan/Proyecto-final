const fila = document.querySelector('.contenedor-carousel');

const math = document.querySelector('.Matematicas');
const arts = document.querySelector('.ArtesVisuales');
const naturalC = document.querySelector('.CienciasNaturales');
const spanish = document.querySelector('.Espaniol');
const geography = document.querySelector('.Geografia');
const history_ = document.querySelector('.Historia');
const computation = document.querySelector('.Computacion');

const tutoriales = document.querySelectorAll('.tutorial');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), 
    {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 700,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista2'), 
    {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores2',
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 700,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista3'), 
    {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores3',
		arrows: {
			prev: '.carousel__anterior3',
			next: '.carousel__siguiente3'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 700,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

// ------- --------- Event listener de las flechas ------- ---------- //

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ------- --------- Paginación ------- ---------- //

const numeroPaginas = Math.ceil(tutoriales.length / 5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');
    if(i === 0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// ------- --------- Hover  ------- ---------- //

tutoriales.forEach((tutorial) => {
    tutorial.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            tutoriales.forEach(tutorial => tutorial.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    tutoriales.forEach(tutorial => tutorial.classList.remove('hover'));
});

// ------- --------- Para redireccionar a videos------- ---------- //

math.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=4pB_ki1EmNc";
});

arts.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=w5vi-0Z0T6c";
});

naturalC.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=p4fEAIpuqHU";
});

spanish.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=4fCp8H7Nv4k&list=PL3weZoli3qhCve5A_MiuEKEP9OX_91XBh";
});

geography.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=YC76paJ1_Zs";
});

history_.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=Sw-SO3WTxAc";
});

computation.addEventListener('click', () => {
    location.href = "https://www.youtube.com/watch?v=Ec94TvQSTcw&t=1s";
});