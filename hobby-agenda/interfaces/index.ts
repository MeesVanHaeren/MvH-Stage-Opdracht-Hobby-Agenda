export type Agendapunt = {
    titel: string;
    beschrijving?: string;
    begintijdstip: Date;
    eindtijdstip: Date;
    categorie: Categorie;
}

export type Categorie = {
    naam: string;
    icoon: string;
    kleur: string;
}
