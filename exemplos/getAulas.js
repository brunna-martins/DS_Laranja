const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const Realm = require("realm");
const { Dictionary } = require('realm');

(async () => {

    let driver = await new Builder().forBrowser(Browser.EDGE).build();

    let finalData = {};
    const ano = process.argv.slice(2).map((x,y) => x.trim())[0];
    const semesters = [2,1]


    try {
        await driver.get('https://sig.unb.br/sigaa/public/turmas/listar.jsf');
        await driver.findElement(By.xpath('//*[@id="formTurma:inputNivel"]/option[3]')).click();
        

        await driver.findElement(By.id('formTurma:inputAno')).sendKeys(ano.trim());

        for(const semester of semesters){

            if(ano == 2022 && semester == 2){
                continue;
            } 
            await driver.findElement(By.xpath('//*[@id="formTurma:inputPeriodo"]/option[1]')).click();
            
            const unidades = await driver.findElements(By.xpath('//*[@id="formTurma:inputDepto"]/option'));
            

            for(const unidade of [...Array(unidades.length)].map((_,i) => i+1)){
                if(unidade == 1){
                    continue;
                }  


                await driver.findElement(By.xpath(`//*[@id="formTurma:inputDepto"]/option[${unidade}]`)).click();

                await driver.findElement(By.xpath('//*[@id="formTurma"]/table/tfoot/tr/td/input[1]')).click();

                let table = await driver.findElements(By.xpath('//*[@id="turmasAbertas"]/table/tbody/tr'));

                let tituloEDisciplina = "";
                let currentCodigo = "";

                let index = 1;
                for(const item of table){
                    await item;

                    const className = await item.getAttribute('class');
                    if(className == "agrupador"){
                        tituloEDisciplina = await item.findElement(By.className("tituloDisciplina")).getText();
                        const [codigo,disc] = tituloEDisciplina.split('-');
                        currentCodigo = codigo.trim();
                        finalData[currentCodigo] = {disciplina:disc.trim(),ano:ano,semestre:semester,professores:[]}                  
                    }
                    else {
                        const data = await item.findElements(By.xpath(`//*[@id="turmasAbertas"]/table/tbody/tr[${index}]/td`));

                        const textData = data.map((value,i) => value.getText());

                        let obj = {};

                        obj["nome"] = await textData[2];
                        obj['horario'] = await textData[3];
                        obj['vagas_ofertadas'] = await textData[5];
                        obj['vagas_ocupadas'] = await textData[6];

                        console.log("adding professor! -> " + JSON.stringify(obj));

                        finalData[currentCodigo]["professores"].push(obj);
                    }

                    index++;
                }

            }

        }
        
    }
    catch(e)
    {
        console.log(e);
    }
    finally {

        var fs = require('fs');
        let index = 1;
        while(fs.existsSync(`aulas_${index}.json`)) {
                fs.writeFile(`aulas_${index}.json`, JSON.stringify(finalData), function(err, result) {
                    if(err) console.log('error:', err);
                });
        }
        driver.close();
    }
    

})();