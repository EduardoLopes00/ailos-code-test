import { HeaderData, HeaderDataByRoute } from "@app/infra/types/headerDataByRoute";

export const headerDataByRoute: HeaderDataByRoute = {
    "/welcome": buildHeaderData("BOAS VINDAS!", ""),
    "/register": buildHeaderData("NOVA ADMISSÃO COOPERADO", "Cadastro / Admissão de Cooperado / Nova Admissão de Cooperado"),
    "/not-found": buildHeaderData("PÁGINA NÃO ENCONTRADA", "")    
}

function buildHeaderData(title: string, path: string): HeaderData {
    return {...{
        title: title.toUpperCase(),
        path
    }}
}