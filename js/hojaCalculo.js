
var divDatos = document.getElementById('Datos')
, width_divDatos = divDatos.offsetWidth
, height_divDatos = divDatos.offsetHeight;

var hoja_calculo = document.getElementsByTagName('table')
, thead = document.getElementById('tHead')
, tbody = document.getElementById('tBody')
, num_filas = 100
, num_columnas = 29;


var h_fila = document.createElement('tr');
thead.appendChild(h_fila);

for (var k = 1; k < num_columnas; k++) {
	var h_columna = document.createElement('th');
	h_columna.style.width = "100px";
	h_columna.className = 'h_celda';
	h_fila.appendChild(h_columna);
};


for (var i = 1; i <= num_filas; i++) {

	var fila = document.createElement('tr');
	tbody.appendChild(fila);

	for (var j = 1; j <= num_columnas; j++) {

		var columna = document.createElement('td')	
		columna.className = 'celda';
		fila.appendChild(columna);
		if(j == 1){
			columna.innerHTML = i;
		}

	};
};


$('.celda, .h_celda').click(function(){
	$(this).addClass('selected').attr('contenteditable', 'true'); //revisar (si no hay letra sucede el enter dentro de ka cekda, la primera vez, quizas poner moviendo estoy que se active recien cuando se escriba, ubicarlo en ultimo else)
	$('td').removeClass('selected');
})

$('.celda').keydown(function(evt) {
	if(evt.which === 13){
		event.preventDefault();
		$(this).attr('contenteditable', 'false');
		moveCell(this, 2, 0);
		push(this);
		drawChart();
		
	}else if(evt.which === 38){
		event.preventDefault();
		$(this).attr('contenteditable', 'false');
		moveCell(this, 0, 0);
	}else if(evt.which === 40){
		event.preventDefault();
		$(this).attr('contenteditable', 'false');
		moveCell(this, 2, 0);
	}else if(evt.which === 39){
		event.preventDefault();
		$(this).attr('contenteditable', 'false');
		moveCell(this, 1, 1);
	}else if(evt.which === 37){
		event.preventDefault();
		$(this).attr('contenteditable', 'false');
		moveCell(this, 1, -1);
	}

});

 
function moveCell(selected, f, c){
    var cellindex = $(selected).index() + c;
    var rowindex = $(selected).parents('tr').index() + f;
    $(selected).parents('table').find('tr:eq('+rowindex+') td:eq('+cellindex+')').attr('contenteditable', 'true');
    $(selected).parents('table').find('tr:eq('+rowindex+') td:eq('+cellindex+')').focus();
    $('td').removeClass('selected');
	$(this).addClass('selected');
}

function push(selected){
	var cellindex = $(selected).index();
	var rowindex = $(selected).parent('tr').index();
	var valor = parseInt($(selected).text());

	datos[rowindex][cellindex] = valor;
	console.log(datos);
}

function moveToCell(tag, selected, f, c){
	var cellindex = $(selected).index() + c;
    var rowindex = $(selected).parents('tr').index() + f;
    $(selected).parents('table').find('tr:eq('+rowindex+')' + tag + ':eq('+cellindex+')').attr('contenteditable', 'true');
    $(selected).parents('table').find('tr:eq('+rowindex+')' + tag + ':eq('+cellindex+')').focus();
    $(tag).removeClass('selected');
	$(this).addClass('selected');
}

