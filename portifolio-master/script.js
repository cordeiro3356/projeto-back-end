document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#Plano").addEventListener("change", function () {
    const Plano = document.querySelector("#Plano").value
    document.querySelector("label[for=Plano]").innerHTML = `Plano: ${Plano} `
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const Pconf = document.querySelector("#js").checked
    const orange = document.querySelector("#layout-sim").checked
    const Plano = document.querySelector("#Plano").value
  
    let preco = qtde * 50;
    if (Pconf) preco *= 1.1
    if (orange) preco += 500
    let plano = 1 - Plano*0.1;
    preco *= 1 + plano
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}