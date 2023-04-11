const btn = document.getElementById('btn-update');

btn.addEventListener('click', gerarConselho);

async function gerarConselho(){
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url);
    const data = await response.json();

    const id = data.slip['id'];
    const advice = data.slip['advice'];

    alterarId(id);
    alterarAdviceDesc(advice)
};

function alterarId(id){
    const adviceId = document.getElementById('advice-id');

    adviceId.innerHTML = id;
}

function alterarAdviceDesc(advice){
    const adviceDesc = document.getElementById('advice-desc')

    adviceDesc.innerHTML = `"${advice}"`;
}

gerarConselho();