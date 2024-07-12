document.addEventListener('DOMContentLoaded', () => {
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

    // Função dos botões de mais e menos
    const atualizaQtd = (mais, menos, qtd) => {
        qtd.value = parseInt(qtd.value);

        menos.addEventListener('click', () => {
            if (qtd.value > 0) {
                qtd.value--;
            }
        });

        mais.addEventListener('click', () => {
            qtd.value++;
        });
    };

    // Atualiza quantidade para cada item
    atualizaQtd(mais1kg, menos1kg, qtd1kg);
    atualizaQtd(mais05kg, menos05kg, qtd05kg);
    atualizaQtd(mais025kg, menos025kg, qtd025kg);
    atualizaQtd(maisOvo, menosOvo, qtdOvo);
    atualizaQtd(maisAbacaxi, menosAbacaxi, qtdAbacaxi);

    // Gera a nota fiscal
    const criaNotaFiscal = (pedido) => {
        let nota = document.getElementById('conteudo-nota');
        let pTotal = document.getElementById('total');
        let soma = 0;

        nota.innerHTML = '';

        Object.entries(pedido).forEach(([key, value]) => {
            const li = document.createElement('li');
            if (value != 0) {
                li.textContent = key + ': ' + value;
                if (key == 'Molhos') soma += value * 2;
                if (key == 'Ovo') soma += parseInt(value) * 1.5;
                if (key == 'Abacaxi') soma += parseInt(value);
                if (key == 'Lanchão') soma += value * 20;
                if (key == 'Lanche') soma += value * 15;
                if (key == 'Lanchinho') soma += value * 10;
                if (key == 'Batata') soma += value * 2;
            }
            nota.appendChild(li);
        });

        pTotal.textContent = 'Total: ' + soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        let notapai = document.getElementById('notapai');
        notapai.style.display = 'block';
    };

    // Gera número do pedido
    const geraNumeroPedido = () => {
        let numeroGerado = Math.floor(Math.random() * 100);
        let numeroPedido = document.getElementById('pedido');
        numeroPedido.innerText = 'PEDIDO Nº ' + numeroGerado;
    };

    // Submete o form
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let pedido = {
            Nome: form.nome.value,
            Email: form.email.value,
            Lanchão: qtd1kg.value,
            Lanche: qtd05kg.value,
            Lanchinho: qtd025kg.value,
            Ovo: qtdOvo.value,
            Abacaxi: qtdAbacaxi.value,
            Molhos: document.querySelectorAll('input[name="molho"]:checked').length,
            Batata: document.getElementById('batata-sim').checked ? 1 : 0,
            Comentario: form.cxcomentario.value,
            Termo: form.vcaceita.checked ? 'Aceito' : 'Não aceito'
        };

        criaNotaFiscal(pedido);
        geraNumeroPedido();

        //adiciona o pedido na memoria local
        localStorage.setItem('notaFiscal', JSON.stringify(pedido));

        // foca a nota depois de apertar no botão enviar
        document.getElementById('notapai').scrollIntoView({ behavior: 'smooth' });
    });




    // Botão recuperar pedido
    let botaoRecuperar = document.getElementById('recuperar');

    botaoRecuperar.addEventListener('click', () => {
         let pedidoRecuperado = JSON.parse(localStorage.getItem('notaFiscal'));
         criaNotaFiscal(pedidoRecuperado);
    });
});




