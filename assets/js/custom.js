$(document).ready(function () {
    $('form').submit(function (event) { 

        //pega os valores do formulário com base no name de cada campo
        var postForm = {
            'nome': $('input[name=nome]').val(),
            'cpf': $('input[name=cpf]').val(),
            'rg': $('input[name=rg]').val(),
            'sexo': $('input[name=sexo]').val(),
            'cep': $('input[name=cep]').val(),
            'end': $('input[name=end]').val(),
            'num': $('input[name=num]').val(),
            'bairro': $('input[name=bairro]').val(),
            'cidade': $('input[name=cidade]').val(),
            'estado': $('input[name=estado]').val(),
            'telefone': $('input[name=telefone]').val(),
            'celular': $('input[name=celular]').val(),
        };

        $.ajax({
            type: 'POST', 
            url: 'https://davivoltas.dev/itau/new/dados/index.php', 
            data: postForm, 
            dataType: 'json',
            success: function (data) {
                

                //mostra a div modal
                $("#modal").addClass("showModal")

                //adiciona as informacoes retornadas do post nas respectivas #divs
                $("#dataNome").html(data.nome)
                $("#dataCpf").html(data.cpf)
                $("#dataRg").html(data.rg)
		$("#dataSexo").html(data.sexo)

                $("#datasexo").html(data.Feminino)

                
               $("#dataCep").html(data.cep)
                $("#dataEndereco").html(data.end)
                $("#dataNumero").html(data.num)
                $("#dataBairro").html(data.bairro)

                $("#dataCidade").html(data.cidade)
                $("#dataEstado").html(data.estado)
                $("#dataTelefone").html(data.telefone)
                $("#dataCelular").html(data.celular)
            }
        });

        //evita o comportamento padrao do form (reload da pagina)
        event.preventDefault(); 
    });

   		//script de saudação.  
let hora = new Date();
let horaAtual = hora.getHours();
function saudacao() {
	if(horaAtual < 5) {
   return document.write("Boa Noite!");
} else if(horaAtual < 8) {
   return document.write("Bom Dia!");
} else if(horaAtual < 12) {
   return document.write("Bom Dia!");
} else if(horaAtual < 18) {
   return document.write("Boa tarde!");
} else {
   return document.write("Boa noite!");
}
}   
