//<<<_FUNDreplica_FUND REPLICADOR>>>
// true começa do inicia // a linha 125 ('B2:AM600') //<<<<<<<<< verificar
// false de onde parou // a linha do código('onde parou:AM600') //<<<<<<<<< verificar

let nomedeAba = "_DsF_Consertar"

function replicar_Salas_FUNDreplica_FUND(comecarDoInicio = true){ //<<<<<<<<< verificar se é do (inicio true) ou (false de onde parou)

    //_FUND https://docs.google.com/spreadsheets/d/1aivBQTWBesbVHpE5CZ7XSr9_qLg78UBvraX7bkiYjA4/edit#gid=1405582449
    //2024 Turma Base _FUND
    const idModelo_FUND = "1aivBQTWBesbVHpE5CZ7XSr9_qLg78UBvraX7bkiYjA4";
    const ano_FUND = "24";

    let turmas = listaTurmas_FUNDreplica_FUND();
    // Recuperar o valor de i da última execução
    let i;
    if (comecarDoInicio) {
      i = 1;  // Se for para começar do início, definir i como 1
    } else {
      i = PropertiesService.getScriptProperties().getProperty('i');
      if (i === null) {
        i = 1;  // Se for a primeira execução, começar do início
      } else {
        i = Number(i);  // Caso contrário, continuar de onde parou
      }
    }


    for(;i<turmas.length;i++){

      console.log(turmas[i][3]); // codTurma

      let arquivo = replica_FUND(i, turmas[i][3], idModelo_FUND, ano_FUND);

      console.log("Iniciando replica de " + turmas[i]);
 
      // Alterar
      // BDt
      let turma = SpreadsheetApp.openById(arquivo.getId());
      let range = turma.getSheetByName("DBt").getRange("E5").setValue("20"+ ano_FUND); // Ano
      if (range.getValue() !== "20"+ano_FUND){
      }
      range = turma.getSheetByName("DBt").getRange("E2").setValue([turmas[i][5]]); // Nome Professor
        if (range.getValue() !== turmas[i][5]) {
        }

      turma.getSheetByName("DBt").getRange("E3").setValue([turmas[i][4]]); // Reg Professor
      turma.getSheetByName("DBt").getRange("E9").setValue([turmas[i][3]]); // COD TURMA
      turma.getSheetByName("DBt").getRange("E7").setValue([turmas[i][0]]); // Lista Piloto

      // ID
      try{
        turma.getSheetByName("ID").getRange("B6").setValue([turmas[i][5]]); // Nome Professor
        turma.getSheetByName("ID").getRange("B7").setValue([turmas[i][4]]); // Reg Professor
        turma.getSheetByName("ID").getRange("B11").setValue([turmas[i][3]]); // COD TURMA
        turma.getSheetByName("ID").getRange("B8").setValue([turmas[i][6]]); // EMAIL Professor
        turma.getSheetByName("ID").getRange("B10").setValue([turmas[i][1]]); // SED
        turma.getSheetByName("ID").getRange("B4").setValue([turmas[i][0]]); // LISTA PILOTO
        turma.getSheetByName("ID").getRange("B9").setValue([turmas[i][2]]); // TURMA
        turma.getSheetByName("ID").getRange("D4").setValue([turmas[i][35]]); // TURNO

      }catch{}

      // GERAL
     
      try{
        turma.getSheetByName("GERAL").getRange("B2").setValue([turmas[i][2]]); // TURMA
        turma.getSheetByName("GERAL").getRange("M5").setValue(turmas[i][3].slice(2,4));
      }catch{}
 
      // Compartilhar
      // try{turma.addEditors([turmas[i][6]]);}catch{} // Email Professor 1
      // try{turma.addEditors([turmas[i][10]]);}catch{} // Email Professor 2
      // try{turma.addEditors([turmas[i][21]]);}catch{} // Email Direção
      // try{turma.addEditors([turmas[i][22]]);}catch{} // Email Secretaria
 
      // >PILOTO GERAL 2024> 'DsC'
      //https://docs.google.com/spreadsheets/d/1kH5auKqiJO-JhUNtdCfUniBJuSwUzGyp6ULbXAPNwWM/edit#gid=2031593900&range=W1


      let planilha_FUND = SpreadsheetApp.openById("1kH5auKqiJO-JhUNtdCfUniBJuSwUzGyp6ULbXAPNwWM");
      let abaLinksSalas = planilha_FUND.getSheetByName(nomedeAba); // _FUND
      //DsC linha 3, coluna A
      abaLinksSalas.getRange(i+2, 1).setValue(turmas[i][0]);
      //DsC linha 3, coluna AL 38
      abaLinksSalas.getRange(i+2, 38).setValue("https://docs.google.com/spreadsheets/d/" + arquivo.getId());
      //DsC linha 3, coluna AM 39
      abaLinksSalas.getRange(i+2, 39).setValue(arquivo.getId());
 
      // Salvar o valor de i para a próxima execução
      PropertiesService.getScriptProperties().setProperty('i', String(i+1));
    }
  }




    function replica_FUND(i, codTurma, idModelo, ano) {
    // Tentando Acessar a pasta de MONIT_DIARIOS do ano letivo, em caso de erro cria a pasta.
    // folder = Pasta do Ano
    try {
      var folder = DriveApp.getFoldersByName( ano + " MONIT_DIARIOS");
      folder = folder.next();
    }catch {
      var folder = DriveApp.createFolder( ano + " MONIT_DIARIOS");
    }finally{
      // Tentando Acessar a pasta da escola do ano letivo, em caso de erro cria a pasta.
      // fSchool = Pasta da escola
      try {
        var fSchool = folder.getFoldersByName(codTurma.slice(2,4));
        fSchool = fSchool.next();
      }catch {
        var fSchool = folder.createFolder(codTurma.slice(2,4));
      }finally{
        var arquivo;
        try{
          arquivo = fSchool.getFilesByName(codTurma).getId();
        }catch{


          // >> Cópia do Drive
          let modelo = DriveApp.getFileById(idModelo); //LUGAR DA Cópia no drive
          arquivo = modelo.makeCopy(codTurma, fSchool); //Executa a cópia no drive
          // Verificar se o arquivo está na pasta correta
          let pastaDoArquivo = arquivo.getParents().next().getName();
          if (pastaDoArquivo !== fSchool.getName()) {
          }


        }finally{
            console.log(msg_FUNDreplica_FUND[1] + " " + codTurma + " valor de i é " + i + ". Sala feita com sucesso... começando a próxima.");
            return(arquivo);
        }

      }
    }
  }

    function listaTurmas_FUNDreplica_FUND(){
    //https://docs.google.com/spreadsheets/d/1kH5auKqiJO-JhUNtdCfUniBJuSwUzGyp6ULbXAPNwWM/edit#gid=739806990&range=B4
    let planilha_FUNDreplica_FUND = SpreadsheetApp.openById("1kH5auKqiJO-JhUNtdCfUniBJuSwUzGyp6ULbXAPNwWM");
    let aba_FUNDreplica_FUND = planilha_FUNDreplica_FUND.getSheetByName(nomedeAba);
    let linhaDaColuna_AO = aba_FUNDreplica_FUND.getRange("AO1").getValue();
    let t = aba_FUNDreplica_FUND.getRange("B2:AM" + linhaDaColuna_AO).getValues();
    turmas = []
    for (let i = 0; i <t.length;i++){
      if(t[i][3]!=""){
        turmas.push(t[i])
      }
    }
    return turmas;
  }


  const msg_FUNDreplica_FUND = {
    1: "Done",
    2: "None",
  }

