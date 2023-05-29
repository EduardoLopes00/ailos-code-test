import { HeaderData, HeaderDataByRoute } from "@app/infra/types/headerDataByRoute";

export const headerDataByRoute: HeaderDataByRoute = {
    "/welcome": buildHeaderData("BOAS VINDAS!", "Welcome"),
    "/register": buildHeaderData("NOVA ADMISSÃO COOPERADO", "Cadastro / Admissão de Cooperado / Nova Admissão de Cooperado"),
    "/not-found": buildHeaderData("PÁGINA NÃO ENCONTRADA", "Error")    
}

function buildHeaderData(title: string, path: string): HeaderData {
    return {...{
        title: title.toUpperCase(),
        path
    }}
}