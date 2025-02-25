function LOGAR_MODELOS() {
  let dic_bases = DICIONARIO();
  // let sementes_do_bem = [
  //   "B1A", "B2D", "M1A", "M2A", "P2A", "P2B", "P2C", //3
  //   "1A", "1B", "1C", "1D", "1E", //5
  //   "2A", "2B", "2C", "2D", //4
  //   "4C", //1
  //   "EEEA", "EEEB", //2
  //   "AEEA", "AEEB", //2
  //   "EJA1A" //1
  // ];
  let todosCasos = SERIE();
  let arrayTurmas = todosCasos;
  arrayTurmas.forEach(turma => {
    let tipo1 = isNaN(turma[0]) ? turma.substring(0, 2) : turma[0];
    let modeloEncontrado = dic_bases.find(item => item.tipo === tipo1);
    if (modeloEncontrado) {
      console.log(`${turma} -> ${modeloEncontrado.modelo}`);
    } else {
      console.log(`${turma} -> Modelo não encontrado`);
    }
  });
}

function DICIONARIO() {
  let dic_bases = [
    { indice: 0, tipo: "B1", modelo: "BERÇARIO 1" },
    { indice: 1, tipo: "B2", modelo: "BERÇARIO 2" },
    { indice: 2, tipo: "M1", modelo: "MATERNAL 1" },
    { indice: 3, tipo: "M2", modelo: "MATERNAL 2" },
    { indice: 4, tipo: "P1", modelo: "PRÉ-ESCOLA 1" },
    { indice: 5, tipo: "P2", modelo: "PRÉ-ESCOLA 2" },
    { indice: 6, tipo: "1", modelo: "1 ANO" },
    { indice: 7, tipo: "2", modelo: "2 ANO" },
    { indice: 8, tipo: "3", modelo: "3 ANO" },
    { indice: 9, tipo: "4", modelo: "4 ANO" },
    { indice: 10, tipo: "5", modelo: "5 ANO" },
    { indice: 11, tipo: "EE", modelo: "EDUCAÇÃO ESPECIAL" },
    { indice: 14, tipo: "AE", modelo: "EDUCAÇÃO ESPECIAL" },
    { indice: 17, tipo: "EJ", modelo: "EJA" }
  ];
  return dic_bases;
}

function SERIE(){
  let turmas = [
    "B1A", "B1B", "B1C", "B1D", "B2A", "B2B", "B2C", "B2D",
    "M1A", "M1B", "M1C", "M1D", "M1E", "M1F", "M1G", "M1H",
    "M2A", "M2B", "M2C", "M2D", "M2E", "M2F", "M2G", "M2H",
    "P1A", "P1B", "P1C", "P1D", "P1E", "P1F", "P1G", "P1H", "P1I", "P1J",
    "P2A", "P2B", "P2C", "P2D", "P2E", "P2F", "P2G", "P2H", "P2I", "P2J",
    "1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J",
    "2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J",
    "3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J",
    "4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J",
    "5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J",
    "EEEA", "EEEB", "AEEA", "AEEB", "AEEC", "AEED",
    "EJA1A", "EJA1B", "EJA2A", "EJA2B"
  ];
  return turmas;
}

function qualquerCoisa(){
  console.log('\u{1F600}')

  console.log('📌😊')
}
