module.exports = {
    apptitle: "map.apps 4 Developer Workshop",
    map: {
        koeln1: {
            title: "Basisdaten",
            districts: {
                title: "Stadtviertel",
                text: "Das K\xF6lner Stadtviertel <b>{STV_NAME}</b>."
            },
            boroughs: {
                title: "Stadtteile",
                text: "Der Stadtteil <b>{NAME}</b> liegt im K\xF6lner Stadtbezirk {STADTBEZIR}."
            },
            precints: {
                title: "Stadtbezirke",
                text: "Der K\xF6lner Stadtbezirk <b>{NAME}</b>."
            }
        },
        koeln2: {
            title: "Bildung und Kultur",
            description: "Liste aller Bibliotheken, Museen und Schulen in Köln.",
            libraries: {
                title: "Bibliotheken"
            },
            museums: {
                title: "Museen",
                text: "Das Museum <b>{NAME}</b> liegt im K\xF6lner Stadtteil {STADTTEIL}."
            },
            schools: {
                title: "Schulen",
                text: ""
            }
        },
        koeln3: {
            title: "Freizeit",
            sights: {
                title: "Sehensw\xFCrdigkeiten",
                titleSingle: "Sehensw\xFCrdigkeit",
                text: "Die Sehensw\xFCrdigkeit <b>{NAME}</b> liegt im K\xF6lner Stadtteil {STADTTEIL}."
            },
            playgrounds: {
                title: "Spiel- und Sportpl\xE4tze",
                text: "<b>{Spielplatzname}</b> liegt im K\xF6lner Stadtteil {Stadtteil}.",
                baskets: "Basketballk\xF6rbe",
                goals: "Fussballtore",
                tables: "Tischtennis Tische",
                walls: "Torwand",
                skate: "Skaten",
                misc: "Sonstiges"
            },
            places: {
                title: "Veranstaltungsorte",
                titleSingle: "Veranstaltungsort",
                text: "<b>{NAME}</b> ist ein {expression/carrier} Veranstaltungsort."
            }
        },
        basemaps: {
            street: "Stra\xDFenkarte (grau)",
            street2: "Stra\xDFenkarte",
            topo: "Topographische Karte",
            hybrid: "Luftbild (hybrid)"
        }
    },
    common: {
        number: "Nummer",
        area: "Fl\xE4che [ha]",
        totalArea: "Anteil an Gesamtfl\xE4che [%]",
        name: "Name",
        provider: "Tr\xE4ger",
        address: "Adresse",
        furtherinfo: "Weitere Informationen",
        precint: "Stadtbezirk",
        district: "Stadtviertel",
        "private": "private",
        municipal: "st\xE4dtischer",
        zip: "PLZ",
        type: "Art"
    }
};
