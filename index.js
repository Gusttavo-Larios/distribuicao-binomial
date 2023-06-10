function somatorioDeDistribuicaoBinomial(
  quantidadeTotalDeEventos,
  { minimo, maximo },
  chanceDeSucesso
) {
  let contador = minimo;
  let somatoriaDasDistribuicoes = 0;

  while (contador <= maximo) {
    const probabilidade = distribuicaoBinomial(
      quantidadeTotalDeEventos,
      contador,
      chanceDeSucesso
    );

    // console.log({x: contador, probabilidade})

    somatoriaDasDistribuicoes += probabilidade

    contador += 1
  }

  return somatoriaDasDistribuicoes;
}

function distribuicaoBinomial(
  quantidadeTotalDeEventos,
  quantidadeDeEventosComSucesso,
  chanceDeSucesso
) {
  const probabilidade =
    combinacoes(quantidadeTotalDeEventos, quantidadeDeEventosComSucesso) *
    Math.pow(chanceDeSucesso, quantidadeDeEventosComSucesso) *
    Math.pow(
      1 - chanceDeSucesso,
      quantidadeTotalDeEventos - quantidadeDeEventosComSucesso
    );
  return probabilidade;
}

function combinacoes(quantidadeDeElementos, agrupadosEm) {
  const combinacoes =
    fatorial(quantidadeDeElementos) /
    (fatorial(agrupadosEm) * fatorial(quantidadeDeElementos - agrupadosEm));

  return combinacoes;
}

function fatorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(
  somatorioDeDistribuicaoBinomial(
    20,
    {
      minimo: 2,
      maximo: 20,
    },
    0.4
  )
);
