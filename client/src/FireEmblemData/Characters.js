// import {
//     dragonChild, divineDragon, fellChildVeyle, nobleAlfred, avenir, nobleCeline,
//     vidame, lordDiamant, successeur, lordAlcryst, tireurDelite, wingTamerIvy, lindwurm,
//     wingTamerHortensia, sleipnirRider, sentinalTimerra, picket, sentinalFogado, cupido,
//     swordFighter, swordMaster, hero, lanceFighter, halberdier, royalKnight, axeFighter,
//     berserker, warrior, archer, sniper, bowKnight, swordArmor, lanceArmor, axeArmor,
//     general, greatKnight, swordCavalier, lanceCavalier, axeCavalier, paladin, wolfKnight,
//     mage, sage, mageKnight, martialMonk, martialMaster, highPriest, swordFlier, lanceFlier,
//     axeFlier, griffinKnight, wyvernKnight, thief, dancer, fellChildNel, fellChildRafal,
//     melusine, enchanter, mageCannoneer
// } from "./Classes"
const AlearM = {
    name: "Alear (M)",
    baseLevel: 1,
    // baseClass: dragonChild,
    isMale: true,
    growthRates: {
        hp: 60,
        str: 35,
        mag: 20,
        dex: 45,
        spd: 50,
        def: 40,
        res: 25,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: 0,
        dex: 1,
        spd: 1,
        def: 0,
        res: 0,
        lck: 0,
    }
}
const AlearF = {
    name: "Alear (F)",
    baseLevel: 1,
    // baseClass: dragonChild,
    isMale: false,
    growthRates: {
        hp: 60,
        str: 35,
        mag: 20,
        dex: 45,
        spd: 50,
        def: 40,
        res: 25,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: 0,
        dex: 1,
        spd: 1,
        def: 0,
        res: 0,
        lck: 0,
    }
}
const Vander = {
    name: "Vander",
    baseLevel: 1,
    // baseClass: paladin,
    isMale: true,
    growthRates: {
        hp: 60,
        str: 25,
        mag: 10,
        dex: 25,
        spd: 35,
        def: 35,
        res: 20,
        lck: 10,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: -1,
        dex: 1,
        spd: -2,
        def: 3,
        res: -2,
        lck: 0,
    }
}
const Clanne = {
    name: "Clanne",
    baseLevel: 1,
    // baseClass: mage,
    isMale: true,
    growthRates: {
        hp: 40,
        str: 35,
        mag: 10,
        dex: 40,
        spd: 50,
        def: 30,
        res: 25,
        lck: 20,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: -1,
        dex: 2,
        spd: 2,
        def: -2,
        res: -1,
        lck: 0
    }
}
const Framme = {
    name: "Framme",
    baseLevel: 1,
    // baseClass: martialMonk,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 30,
        mag: 25,
        dex: 35,
        spd: 55,
        def: 25,
        res: 30,
        lck: 25,
        bld: 0
    },
    statCaps: {
        str: 0,
        mag: 1,
        dex: -1,
        spd: 2,
        def: -1,
        res: -1,
        lck: 1,
    }
}
const Alfred = {
    name: "Alfred",
    baseLevel: 5,
    // baseClass: nobleAlfred,
    isMale: true,
    growthRates: {
        hp: 65,
        str: 40,
        mag: 5,
        dex: 35,
        spd: 40,
        def: 40,
        res: 20,
        lck: 40,
        bld: 10
    },
    statCaps: {
        str: 2,
        mag: -1,
        dex: 1,
        spd: 2,
        def: -1,
        res: -1,
        lck: 1
    }
}
const Etie = {
    name: "Etie",
    baseLevel: 4,
    // baseClass: archer,
    isMale: false,
    growthRates: {
        hp: 45,
        str: 40,
        mag: 0,
        dex: 25,
        spd: 35,
        def: 25,
        res: 30,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: 2,
        mag: -2,
        dex: 2,
        spd: 0,
        def: 0,
        res: -1,
        lck: -1,
    }
}
const Boucheron = {
    name: "Boucheron",
    baseLevel: 4,
    // baseClass: axeFighter,
    isMale: true,
    growthRates: {
        hp: 85,
        str: 20,
        mag: 0,
        dex: 50,
        spd: 45,
        def: 35,
        res: 20,
        lck: 15,
        bld: 20
    },
    statCaps: {
        str: 1,
        mag: 0,
        dex: 2,
        spd: 2,
        def: -2,
        res: 0,
        lck: -2
    }
}
const Celine = {
    name: "Celine",
    baseLevel: 5,
    // baseClass: nobleCeline,
    isMale: false,
    growthRates: {
        hp: 50,
        str: 35,
        mag: 25,
        dex: 30,
        spd: 45,
        def: 30,
        res: 40,
        lck: 50,
        bld: 5
    },
    statCaps: {
        str: -2,
        mag: 2,
        dex: -2,
        spd: 1,
        def: -3,
        res: 1,
        lck: 3
    }
}
const Chloe = {
    name: "Chloe",
    baseLevel: 6,
    // baseClass: lanceFlier,
    isMale: false,
    growthRates: {
        hp: 75,
        str: 25,
        mag: 35,
        dex: 40,
        spd: 55,
        def: 30,
        res: 25,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: -2,
        mag: 1,
        dex: 0,
        spd: 3,
        def: -1,
        res: 0,
        lck: 0
    }
}
const Louis = {
    name: "Louis",
    baseLevel: 6,
    // baseClass: lanceArmor,
    isMale: true,
    growthRates: {
        hp: 75,
        str: 40,
        mag: 0,
        dex: 40,
        spd: 55,
        def: 30,
        res: 25,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: 0,
        dex: -1,
        spd: -2,
        def: 3,
        res: -2,
        lck: 1
    }
}
const Yunaka = {
    name: "Yunaka",
    baseLevel: 6,
    // baseClass: thief,
    isMale: false,
    growthRates: {
        hp: 50,
        str: 35,
        mag: 25,
        dex: 40,
        spd: 45,
        def: 15,
        res: 45,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: -1,
        mag: 0,
        dex: 1,
        spd: 2,
        def: -2,
        res: 2,
        lck: -1
    }
}
const Alcryst = {
    name: "Alcryst",
    baseLevel: 10,
    //baseClass: lordAlcryst,
    isMale: true,
    growthRates: {
        hp: 65,
        str: 30,
        mag: 10,
        dex: 40,
        spd: 45,
        def: 30,
        res: 20,
        lck: 15,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: -1,
        dex: 3,
        spd: 0,
        def: 1,
        res: -2,
        lck: -3
    }
}
const Citrinne = {
    name: "Citrinne",
    baseLevel: 10,
    //baseClass: mage,
    isMale: false,
    growthRates: {
        hp: 45,
        str: 10,
        mag: 40,
        dex: 25,
        spd: 30,
        def: 20,
        res: 40,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: -1,
        mag: 3,
        dex: 0,
        spd: -1,
        def: -2,
        res: 2,
        lck: 0
    }
}
const Lapis = {
    name: "Lapis",
    baseLevel: 10,
    //baseClass: swordFighter,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 25,
        mag: 20,
        dex: 35,
        spd: 55,
        def: 35,
        res: 30,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: -2,
        mag: -2,
        dex: 2,
        spd: 3,
        def: 0,
        res: 0,
        lck: 0
    }
}
const Diamant = {
    name: "Diamant",
    baseLevel: 11,
    //baseClass: lordDiamant,
    isMale: true,
    growthRates: {
        hp: 75,
        str: 30,
        mag: 15,
        dex: 20,
        spd: 40,
        def: 40,
        res: 25,
        lck: 20,
        bld: 15
    },
    statCaps: {
        str: 2,
        mag: -1,
        dex: -1,
        spd: 0,
        def: 2,
        res: -1,
        lck: 0
    }
}
const Amber = {
    name: "Amber",
    baseLevel: 11,
    //baseClass: lanceCavalier,
    isMale: true,
    growthRates: {
        hp: 65,
        str: 45,
        mag: 0,
        dex: 25,
        spd: 30,
        def: 35,
        res: 5,
        lck: 35,
        bld: 15
    },
    statCaps: {
        str: 2,
        mag: -1,
        dex: -1,
        spd: -1,
        def: 1,
        res: -1,
        lck: 1
    }
}
const Jade = {
    name: "Jade",
    baseLevel: 12,
    //baseClass: axeArmor,
    isMale: false,
    growthRates:
    {
        hp: 55,
        str: 35,
        mag: 25,
        dex: 35,
        spd: 30,
        def: 40,
        res: 30,
        lck: 20,
        bld: 10
    },
    statCaps: {
        str: 1,
        mag: -1,
        dex: 0,
        spd: 0,
        def: 2,
        res: 0,
        lck: -1
    }
}
const Ivy = {
    name: "Ivy",
    baseLevel: 17,
    //baseClass: wingTamer,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 25,
        mag: 30,
        dex: 25,
        spd: 40,
        def: 30,
        res: 35,
        lck: 15,
        bld: 10
    },
    statCaps: {
        str: 0,
        mag: 2,
        dex: -2,
        spd: 0,
        def: 2,
        res: 2,
        lck: -3
    }
}
const Kagetsu = {
    name: "Kagetsu",
    baseLevel: 1,
    //baseClass: swordMaster,
    isMale: true,
    growthRates: {
        hp: 60,
        str: 30,
        mag: 14,
        dex: 50,
        spd: 50,
        def: 40,
        res: 25,
        lck: 40,
        bld: 10
    },
    statCaps: {
        str: -1,
        mag: -1,
        dex: 2,
        spd: 2,
        def: 0,
        res: -2,
        lck: 1
    }
}
const Zelkov = {
    name: "Zelkov",
    baseLevel: 17,
    //baseClass: thief,
    isMale: true,
    growthRates: {
        hp: 65,
        str: 35,
        mag: 15,
        dex: 40,
        spd: 35,
        def: 35,
        res: 15,
        lck: 25,
        bld: 10
    },
    statCaps: {
        str: 0,
        mag: -1,
        dex: 2,
        spd: 0,
        def: 0,
        res: -1,
        lck: 1
    }
}
const Fogado = {
    name: "Fogado",
    baseLevel: 17,
    //baseClass: sentinelFogado,
    isMale: true,
    growthRates: {
        hp: 60,
        str: 30,
        mag: 25,
        dex: 30,
        spd: 55,
        def: 30,
        res: 35,
        lck: 25,
        bld: 10
    },
    statCaps: {
        str: -1,
        mag: -1,
        dex: 0,
        spd: 3,
        def: -1,
        res: 1,
        lck: 0
    }
}
const Pandreo = {
    name: "Pandreo",
    baseLevel: 1,
    //baseClass: highPriest,
    isMale: true,
    growthRates: {
        hp: 60,
        str: 5,
        mag: 30,
        dex: 45,
        spd: 45,
        def: 15,
        res: 55,
        lck: 30,
        bld: 15
    },
    statCaps: {
        str: -3,
        mag: 2,
        dex: 0,
        spd: -1,
        def: -2,
        res: 3,
        lck: 2
    }
}
const Bunet = {
    name: "Bunet",
    baseLevel: 1,
    //baseClass: greatKnight,
    isMale: true,
    growthRates: {
        hp: 65,
        str: 30,
        mag: 10,
        dex: 40,
        spd: 35,
        def: 45,
        res: 25,
        lck: 40,
        bld: 10
    },
    statCaps: {
        str: 1,
        mag: -3,
        dex: 1,
        spd: 0,
        def: 2,
        res: -3,
        lck: 1
    }
}
const Timerra = {
    name: "Timerra",
    baseLevel: 18,
    //baseClass: sentinelTimerra,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 25,
        mag: 25,
        dex: 45,
        spd: 45,
        def: 30,
        res: 30,
        lck: 30,
        bld: 10
    },
    statCaps: {
        str: -1,
        mag: -1,
        dex: 3,
        spd: 0,
        def: 2,
        res: -3,
        lck: 1
    }
}
const Pannette = {
    name: "Pannette",
    baseLevel: 1,
    //baseClass: berserker,
    isMale: false,
    growthRates: {
        hp: 75,
        str: 45,
        mag: 10,
        dex: 40,
        spd: 25,
        def: 30,
        res: 15,
        lck: 20,
        bld: 15
    },
    statCaps: {
        str: 3,
        mag: -1,
        dex: 0,
        spd: 0,
        def: 0,
        res: -1,
        lck: 0
    }
}
const Merrin = {
    name: "Merrin",
    baseLevel: 1,
    //baseClass: wolfKnight,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 25,
        mag: 25,
        dex: 40,
        spd: 50,
        def: 30,
        res: 30,
        lck: 25,
        bld: 10
    },
    statCaps: {
        str: -1,
        mag: -1,
        dex: 1,
        spd: 2,
        def: -1,
        res: 0,
        lck: 1
    }
}
const Hortensia = {
    name: "Hortensia",
    baseLevel: 19,
    //baseClass: wingTamer,
    isMale: false,
    growthRates: {
        hp: 40,
        str: 20,
        mag: 20,
        dex: 35,
        spd: 50,
        def: 25,
        res: 55,
        lck: 50,
        bld: 0
    },
    statCaps: {
        str: -2,
        mag: 0,
        dex: 0,
        spd: 1,
        def: -3,
        res: 3,
        lck: 2
    }
}
const Seadall = {
    name: "Seadall",
    baseLevel: 15,
    //baseClass: dancer,
    isMale: true,
    growthRates: {
        hp: 55,
        str: 25,
        mag: 15,
        dex: 25,
        spd: 50,
        def: 25,
        res: 25,
        lck: 35,
        bld: 10
    },
    statCaps: {
        str: 0,
        mag: -2,
        dex: -1,
        spd: 2,
        def: 0,
        res: 0,
        lck: 2
    }
}
const Rosado = {
    name: "Rosado",
    baseLevel: 3,
    //baseClass: wyvernKnight,
    isMale: true,
    growthRates: {
        hp: 75,
        str: 45,
        mag: 25,
        dex: 40,
        spd: 45,
        def: 30,
        res: 30,
        lck: 20,
        bld: 5
    },
    statCaps: {
        str: 3,
        mag: -2,
        dex: 1,
        spd: 0,
        def: 1,
        res: -2,
        lck: 0
    }
}
const Goldmary = {
    name: "Goldmary",
    baseLevel: 3,
    //baseClass: hero,
    isMale: false,
    growthRates: {
        hp: 65,
        str: 30,
        mag: 5,
        dex: 25,
        spd: 25,
        def: 55,
        res: 25,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: -3,
        dex: 0,
        spd: 0,
        def: 2,
        res: -1,
        lck: 2
    }
}
const Lindon = {
    name: "Lindon",
    baseLevel: 5,
    //baseClass: sage,
    isMale: true,
    growthRates: {
        hp: 65,
        str: 25,
        mag: 25,
        dex: 25,
        spd: 40,
        def: 25,
        res: 40,
        lck: 15,
        bld: 10
    },
    statCaps: {
        str: 0,
        mag: 2,
        dex: -1,
        spd: 0,
        def: -2,
        res: 2,
        lck: 0
    }
}
const Saphir = {
    name: "Saphir",
    baseLevel: 7,
    //baseClass: warrior,
    isMale: false,
    growthRates: {
        hp: 80,
        str: 35,
        mag: 0,
        dex: 25,
        spd: 30,
        def: 30,
        res: 5,
        lck: 20,
        bld: 10
    },
    statCaps: {
        str: 2,
        mag: -2,
        dex: 0,
        spd: 1,
        def: 1,
        res: -2,
        lck: 0
    }
}
const Veyle = {
    name: "Veyle",
    baseLevel: 35,
    //baseClass: fellChildVeyle,
    isMale: false,
    growthRates: {
        hp: 40,
        str: 25,
        mag: 45,
        dex: 35,
        spd: 30,
        def: 25,
        res: 35,
        lck: 20,
        bld: 0
    },
    statCaps: {
        str: 0,
        mag: 3,
        dex: 0,
        spd: -1,
        def: 0,
        res: 3,
        lck: -2
    }
}
const Mauvier = {
    name: "Mauvier",
    baseLevel: 12,
    //baseClass: royalKnight,
    isMale: true,
    growthRates: {
        hp: 70,
        str: 35,
        mag: 40,
        dex: 40,
        spd: 35,
        def: 50,
        res: 45,
        lck: 15,
        bld: 15
    },
    statCaps: {
        str: 1,
        mag: 2,
        dex: 1,
        spd: -2,
        def: 1,
        res: 1,
        lck: -2
    }
}
const Anna = {
    name: "Anna",
    baseLevel: 5,
    //baseClass: axeFighter,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 15,
        mag: 50,
        dex: 50,
        spd: 50,
        def: 20,
        res: 35,
        lck: 45,
        bld: 5
    },
    statCaps: {
        str: 0,
        mag: 1,
        dex: 1,
        spd: 1,
        def: -2,
        res: -1,
        lck: 1
    }
}
const Jean = {
    name: "Jean",
    baseLevel: 1,
    //baseClass: martialMonk,
    isMale: true,
    growthRates: {
        hp: 50,
        str: 20,
        mag: 20,
        dex: 35,
        spd: 40,
        def: 25,
        res: 20,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: 1,
        mag: 2,
        dex: -1,
        spd: -1,
        def: 0,
        res: 0,
        lck: 1
    }
}
const Nel = {
    name: "Nel",
    baseLevel: 20,
    //baseClass: fellChildNel,
    isMale: false,
    growthRates: {
        hp: 55,
        str: 30,
        mag: 25,
        dex: 40,
        spd: 45,
        def: 30,
        res: 35,
        lck: 30,
        bld: 10
    },
    statCaps: {
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0
    }
}
const Rafal = {
    name: "Rafal",
    baseLevel: 20,
    //baseClass: fellChildRafal,
    isMale: true,
    growthRates: {
        hp: 70,
        str: 40,
        mag: 10,
        dex: 40,
        spd: 35,
        def: 45,
        res: 20,
        lck: 10,
        bld: 10
    },
    statCaps: {
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0
    }
}
const Zelestia = {
    name: "Zelestia",
    baseLevel: 20,
    //baseClass: melusine,
    isMale: false,
    growthRates: {
        hp: 60,
        str: 35,
        mag: 35,
        dex: 35,
        spd: 50,
        def: 30,
        res: 35,
        lck: 20,
        bld: 5
    },
    statCaps: {
        str: 0,
        mag: 1,
        dex: 0,
        spd: 2,
        def: 1,
        res: 1,
        lck: -3
    }
}
const Gregory = {
    name: "Gregory",
    baseLevel: 1,
    //baseClass: sage,
    isMale: true,
    growthRates: {
        hp: 55,
        str: 30,
        mag: 50,
        dex: 20,
        spd: 25,
        def: 35,
        res: 50,
        lck: 25,
        bld: 5
    },
    statCaps: {
        str: -2,
        mag: 3,
        dex: -2,
        spd: -2,
        def: 0,
        res: 3,
        lck: 2
    }
}
const Madeline = {
    name: "Madeline",
    baseLevel: 1,
    //baseClass: general,
    isMale: false,
    growthRates: {
        hp: 75,
        str: 50,
        mag: 20,
        dex: 15,
        spd: 15,
        def: 55,
        res: 25,
        lck: 25,
        bld: 10
    },
    statCaps: {
        str: 3,
        mag: 0,
        dex: -2,
        spd: -2,
        def: 3,
        res: -1,
        lck: 0
    }
}
const CharacterData = [AlearM, AlearF, Vander, Clanne, Framme, Alfred, Etie, Boucheron, Celine, Chloe, Louis, Yunaka, Alcryst, Citrinne, Lapis, Diamant, Amber, Jade, Ivy, Kagetsu, Zelkov, Fogado, Pandreo, Bunet, Timerra, Pannette, Merrin, Hortensia, Seadall, Rosado, Goldmary, Lindon, Saphir, Veyle, Mauvier, Anna, Jean, Nel, Rafal, Zelestia, Gregory, Madeline]
export default CharacterData