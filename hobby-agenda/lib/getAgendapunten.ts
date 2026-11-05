// Dummied, for prototyping purposes

import type { Agendapunt, Categorie } from "../interfaces";
import {getCategorieen} from "/lib/getCategorieen";

export function getAgendapunten() : Agendapunt[] {
    return [
        {
            titel: "Draw a hill",
            beschrijving: "The one behind your backyard",
            begintijdstip: new Date("2026-11-5T15:00"),
            eindtijdstip: new Date("2026-11-5T16:00"),
            categorie: getCategorieen()[0]
        } ,
        {
            titel: "Beat fire emblem fortune's weave ACT 2 again",
            begintijdstip: new Date("2026-11-6T17:00"),
            eindtijdstip: new Date("2026-11-6T23:00"),
            categorie: getCategorieen()[1]
        }
    ]
}
