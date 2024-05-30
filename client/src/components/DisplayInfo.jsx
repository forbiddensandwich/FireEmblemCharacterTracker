import { React, useState, useEffect } from 'react'
import { getOneCharacter, deleteHandler } from '../services/CharacterService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CharacterData, * as characters from '../FireEmblemData/CharacterData/Characters.js'
import classInfo from '../FireEmblemData/ClassData/Classes.js'
const DisplayInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        getOneCharacter(id)
            .then((res) => {
                setCharacter(res);
            })
            .catch((err) => {
                console.log(err)
            })
    })
    const unit = CharacterData.filter(c => c.name == character.name);
    const classData = classInfo.filter(c => c.name == character.class);
    const combinedGrowth = {
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        bld: 0,
        total: 0
    }
    const characterGrowth = {
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        bld: 0,
        total: 0
    }
    const classGrowth = {
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        bld: 0,
        total: 0
    }
    const unitCap = {
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        bld: 0,
        total: 0
    }
    const classCap = {
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        bld: 0,
        total: 0
    }
    const combinedCaps = {
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        bld: 0,
        total: 0
    }
    if (unit.length == 1) {
        unitCap.str = unit[0].characterStatCap.str
        unitCap.mag = unit[0].characterStatCap.mag
        unitCap.dex = unit[0].characterStatCap.dex
        unitCap.spd = unit[0].characterStatCap.spd
        unitCap.def = unit[0].characterStatCap.def
        unitCap.res = unit[0].characterStatCap.res
        unitCap.lck = unit[0].characterStatCap.lck
        unitCap.total = unit[0].characterStatCap.str + unit[0].characterStatCap.mag + unit[0].characterStatCap.dex + unit[0].characterStatCap.spd + unit[0].characterStatCap.def + unit[0].characterStatCap.res + unit[0].characterStatCap.lck
    }
    if (classData.length == 1) {
        classCap.hp = classData[0].classCap.hp;
        classCap.str = classData[0].classCap.str;
        classCap.mag = classData[0].classCap.mag;
        classCap.dex = classData[0].classCap.dex;
        classCap.spd = classData[0].classCap.spd;
        classCap.def = classData[0].classCap.def;
        classCap.res = classData[0].classCap.res;
        classCap.lck = classData[0].classCap.lck;
        classCap.bld = classData[0].classCap.bld;
        classCap.total = classCap.hp + classCap.str + classCap.mag + classCap.dex + classCap.spd + classCap.def + classCap.res + classCap.lck + classCap.bld;
    }
    if (unit.length == 1 && classData.length == 1) {
        combinedCaps.hp = classData[0].classCap.hp;
        combinedCaps.str = unit[0].characterStatCap.str + classData[0].classCap.str;
        combinedCaps.mag = unit[0].characterStatCap.mag + classData[0].classCap.mag;
        combinedCaps.dex = unit[0].characterStatCap.dex + classData[0].classCap.dex;
        combinedCaps.spd = unit[0].characterStatCap.spd + classData[0].classCap.spd;
        combinedCaps.def = unit[0].characterStatCap.def + classData[0].classCap.def;
        combinedCaps.res = unit[0].characterStatCap.res + classData[0].classCap.res;
        combinedCaps.lck = unit[0].characterStatCap.lck + classData[0].classCap.lck;
        combinedCaps.bld = classData[0].classCap.bld;
        combinedCaps.total = unitCap.total + classCap.total;
    }
    if (unit.length == 1) {
        characterGrowth.hp = unit[0].characterGrowthRate.hp;
        characterGrowth.str = unit[0].characterGrowthRate.str;
        characterGrowth.mag = unit[0].characterGrowthRate.mag;
        characterGrowth.dex = unit[0].characterGrowthRate.dex;
        characterGrowth.spd = unit[0].characterGrowthRate.spd;
        characterGrowth.def = unit[0].characterGrowthRate.def;
        characterGrowth.res = unit[0].characterGrowthRate.res;
        characterGrowth.lck = unit[0].characterGrowthRate.lck;
        characterGrowth.bld = unit[0].characterGrowthRate.bld;
        characterGrowth.total = characterGrowth.hp + characterGrowth.str + characterGrowth.mag + characterGrowth.dex + characterGrowth.spd + characterGrowth.def + characterGrowth.res + characterGrowth.lck + characterGrowth.bld;
    }
    if (classData.length == 1) {
        classGrowth.hp = classData[0].classGrowth.hp;
        classGrowth.str = classData[0].classGrowth.str;
        classGrowth.mag = classData[0].classGrowth.mag;
        classGrowth.dex = classData[0].classGrowth.dex;
        classGrowth.spd = classData[0].classGrowth.spd;
        classGrowth.def = classData[0].classGrowth.def;
        classGrowth.res = classData[0].classGrowth.res;
        classGrowth.lck = classData[0].classGrowth.lck;
        classGrowth.bld = classData[0].classGrowth.bld;
        classGrowth.total = classGrowth.hp + classGrowth.str + classGrowth.mag + classGrowth.dex + classGrowth.spd + classGrowth.def + classGrowth.res + classGrowth.lck + classGrowth.bld;
    }
    if (unit.length == 1 && classData.length == 1) {
        combinedGrowth.hp = unit[0].characterGrowthRate.hp + classData[0].classGrowth.hp;
        combinedGrowth.str = unit[0].characterGrowthRate.str + classData[0].classGrowth.str;
        combinedGrowth.mag = unit[0].characterGrowthRate.mag + classData[0].classGrowth.mag;
        combinedGrowth.dex = unit[0].characterGrowthRate.dex + classData[0].classGrowth.dex;
        combinedGrowth.spd = unit[0].characterGrowthRate.spd + classData[0].classGrowth.spd;
        combinedGrowth.def = unit[0].characterGrowthRate.def + classData[0].classGrowth.def;
        combinedGrowth.res = unit[0].characterGrowthRate.res + classData[0].classGrowth.res;
        combinedGrowth.lck = unit[0].characterGrowthRate.lck + classData[0].classGrowth.lck;
        combinedGrowth.bld = unit[0].characterGrowthRate.bld + classData[0].classGrowth.bld;
        combinedGrowth.total = characterGrowth.total + classGrowth.total;
    }
    return (
        <>
            <div className='text-white fs-2'>
                <p>Name: {character.name}</p>
                <p>Class: {character.class}</p>
                <p>Gender: {character.isMale ? "Male" : "Female"}</p>
                <p>Level: {character.level}</p>
                <p>Internal Level: {character.internalLevel}</p>
                <p>HP: {character.hp}</p>
                <p>Str: {character.str}</p>
                <p>Def: {character.def}</p>
                <p>Mag: {character.mag}</p>
                <p>Res: {character.res}</p>
                <p>Dex: {character.dex}</p>
                <p>Luck: {character.luck}</p>
                <p>Spd: {character.spd}</p>
                <div className='d-flex flex-column'>
                    <table className='table table-striped table-light'>
                        <thead>
                            <tr>
                                <td>Stat Caps: </td>
                                <td>HP: </td>
                                <td>Str: </td>
                                <td>Mag: </td>
                                <td>Dex: </td>
                                <td>Spd: </td>
                                <td>Def: </td>
                                <td>Res: </td>
                                <td>Lck: </td>
                                <td>Bld: </td>
                                <td>Total: </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Unit Modifiers: </td>
                                <td>{unitCap.hp}</td>
                                <td>{unitCap.str}</td>
                                <td>{unitCap.mag}</td>
                                <td>{unitCap.dex}</td>
                                <td>{unitCap.spd}</td>
                                <td>{unitCap.def}</td>
                                <td>{unitCap.res}</td>
                                <td>{unitCap.lck}</td>
                                <td>{unitCap.bld}</td>
                                <td>{unitCap.total}</td>
                            </tr>
                            <tr>
                                <td>Class Caps: </td>
                                <td>{classCap.hp}</td>
                                <td>{classCap.str}</td>
                                <td>{classCap.mag}</td>
                                <td>{classCap.dex}</td>
                                <td>{classCap.spd}</td>
                                <td>{classCap.def}</td>
                                <td>{classCap.res}</td>
                                <td>{classCap.lck}</td>
                                <td>{classCap.bld}</td>
                                <td>{classCap.total}</td>
                            </tr>
                            <tr>
                                <td>Combined Caps: </td>
                                <td>{combinedCaps.hp}</td>
                                <td>{combinedCaps.str}</td>
                                <td>{combinedCaps.mag}</td>
                                <td>{combinedCaps.dex}</td>
                                <td>{combinedCaps.spd}</td>
                                <td>{combinedCaps.def}</td>
                                <td>{combinedCaps.res}</td>
                                <td>{combinedCaps.lck}</td>
                                <td>{combinedCaps.bld}</td>
                                <td>{combinedCaps.total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table table-striped table-dark'>
                        <thead>
                            <tr>
                                <td>Growth Rates:</td>
                                <td>HP</td>
                                <td>Str</td>
                                <td>Mag</td>
                                <td>Dex</td>
                                <td>Spd</td>
                                <td>Def</td>
                                <td>Res</td>
                                <td>Lck</td>
                                <td>Bld</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                    <td>Character Growth</td>
                                    <td>{characterGrowth.hp}</td>
                                    <td>{characterGrowth.str}</td>
                                    <td>{characterGrowth.mag}</td>
                                    <td>{characterGrowth.dex}</td>
                                    <td>{characterGrowth.spd}</td>
                                    <td>{characterGrowth.def}</td>
                                    <td>{characterGrowth.res}</td>
                                    <td>{characterGrowth.lck}</td>
                                    <td>{characterGrowth.bld}</td>
                                    <td>{characterGrowth.total}</td>
                                </tr>

                            }
                            {
                                <tr>
                                    <td>Class Growth</td>
                                    <td>{classGrowth.hp}</td>
                                    <td>{classGrowth.str}</td>
                                    <td>{classGrowth.mag}</td>
                                    <td>{classGrowth.dex}</td>
                                    <td>{classGrowth.spd}</td>
                                    <td>{classGrowth.def}</td>
                                    <td>{classGrowth.res}</td>
                                    <td>{classGrowth.lck}</td>
                                    <td>{classGrowth.bld}</td>
                                    <td>{classGrowth.total}</td>
                                </tr>
                            }
                            <tr>
                                <td>Combined Growths</td>
                                <td>{combinedGrowth.hp}</td>
                                <td>{combinedGrowth.str}</td>
                                <td>{combinedGrowth.mag}</td>
                                <td>{combinedGrowth.dex}</td>
                                <td>{combinedGrowth.spd}</td>
                                <td>{combinedGrowth.def}</td>
                                <td>{combinedGrowth.res}</td>
                                <td>{combinedGrowth.lck}</td>
                                <td>{combinedGrowth.bld}</td>
                                <td>{combinedGrowth.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-dark' onClick={() => deleteHandler(id, navigate)}>Delete</button>
                <br />
                <Link to='/' className='btn btn-secondary'>Home</Link>
            </div >
        </>
    )
}

export default DisplayInfo