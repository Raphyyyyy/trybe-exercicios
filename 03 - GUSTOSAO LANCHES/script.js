document.addEventListener('DOMContentLoaded', () => {//isso faz com que o script só rode depois que a pagina carregar por completo

    let form = document.querySelector('form');

    const menos1kg = document.getElementById('Menos1kg');
    const mais1kg = document.getElementById('Mais1kg');
    const qtd1kg = document.getElementById('qtd-1kg');

    const menos05kg = document.getElementById('Menos05kg');
    const mais05kg = document.getElementById('Mais05kg');
    const qtd05kg = document.getElementById('qtd-0.5kg');

    const menos025kg = document.getElementById('Menos025kg');
    const mais025kg = document.getElementById('Mais025kg');
    const qtd025kg = document.getElementById('qtd-0.25kg');

    const menosOvo = document.getElementById('-ovo');
    const maisOvo = document.getElementById('+ovo');
    const qtdOvo = document.getElementById('ovo');

    const menosAbacaxi = document.getElementById('MenosAbacaxi');
    const maisAbacaxi = document.getElementById('MaisAbacaxi');
    const qtdAbacaxi = document.getElementById('abacaxi');




    //função dos botoes de mais e menos
    const atualizaQtd = (mais, menos, qtd) => {
        //transforma o valor do qtd em inteiro
        qtd.value = parseInt(qtd.value)

        //funcao do botao menos
        menos.addEventListener('click', () => {
            if (qtd.value > 0) {
                qtd.value--
            }
        });

        //funcao do botao mais
        mais.addEventListener('click', () => {
            qtd.value++
        });
    }//fecha a func de atualizar qtd

    // Atualiza quantidade para cada item
     atualizaQtd(mais1kg, menos1kg, qtd1kg);
     atualizaQtd(mais05kg, menos05kg, qtd05kg);
     atualizaQtd(mais025kg, menos025kg, qtd025kg);
     atualizaQtd(maisOvo, menosOvo, qtdOvo);
     atualizaQtd(maisAbacaxi, menosAbacaxi, qtdAbacaxi);
   
    // console.log({menos1kg, mais1kg, qtd1kg});
    // console.log({menos05kg, mais05kg, qtd05kg});
    // console.log({menos025kg, mais025kg, qtd025kg});
    // console.log({menosOvo, maisOvo, qtdOvo});
    // console.log({menosAbacaxi, maisAbacaxi, qtdAbacaxi});


    //submete o form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); //não deixa o form sumir

        let pedido = {};

        pedido.nome = form.nome.value;
        pedido.email = form.email.value;
        pedido.cxcomentario = form.cxcomentario.value;


        pedido.qtd1kg = qtd1kg.value;
        pedido.qtd05kg = qtd05kg.value;
        pedido.qtd025kg = qtd025kg.value;
        pedido.qtdOvo = qtdOvo.value;
        pedido.qtdAbacaxi = qtdAbacaxi.value;

        pedido.molhos = document.querySelectorAll('input[name="molho"]:checked').length;

        if(document.getElementById('batata-sim').checked){ 
            pedido.batata = 1;
        }else{
            pedido.batata = 0;
        }


        console.log(pedido);
    });//fecha o evento do form

});//fecha o domcontentloaded