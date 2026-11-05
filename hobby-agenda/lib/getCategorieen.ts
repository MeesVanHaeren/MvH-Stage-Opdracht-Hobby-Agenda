// Dummied, for prototyping purposes

import type { Categorie } from "../interfaces";

export function getCategorieen() : Categorie[] {
    return [
        {
            naam: "Kunst",
            icoon: "🖌️",
            kleur: "#5c1316"
        } ,
        {
            naam: "Gamen",
            icoon: "🎮",
            kleur: "#13165c"
        }
    ]
}
