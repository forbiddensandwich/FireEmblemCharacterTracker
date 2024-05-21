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
                <p>Growth Rates:</p>
                <div className='d-flex flex-column'>
                    <table className='table table-striped table-dark'>
                        <thead>
                            <tr>
                                <td></td>
                                <td>HP</td>
                                <td>Str</td>
                                <td>Mag</td>
                                <td>Dex</td>
                                <td>Spd</td>
                                <td>Def</td>
                                <td>Res</td>
                                <td>Lck</td>
                                <td>Bld</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                unit.map(c => (
                                    <tr key={c.name}>
                                        <td>Character Growth</td>
                                        <td>{c.characterGrowthRate.hp}</td>
                                        <td>{c.characterGrowthRate.str}</td>
                                        <td>{c.characterGrowthRate.mag}</td>
                                        <td>{c.characterGrowthRate.dex}</td>
                                        <td>{c.characterGrowthRate.spd}</td>
                                        <td>{c.characterGrowthRate.def}</td>
                                        <td>{c.characterGrowthRate.res}</td>
                                        <td>{c.characterGrowthRate.lck}</td>
                                        <td>{c.characterGrowthRate.bld}</td>
                                    </tr>
                                ))
                            }
                            {
                                classData.map(c => (
                                    <tr key={c.name}>
                                        <td>Class Growth</td>
                                        <td>{c.classGrowth.hp}</td>
                                        <td>{c.classGrowth.str}</td>
                                        <td>{c.classGrowth.mag}</td>
                                        <td>{c.classGrowth.dex}</td>
                                        <td>{c.classGrowth.spd}</td>
                                        <td>{c.classGrowth.def}</td>
                                        <td>{c.classGrowth.res}</td>
                                        <td>{c.classGrowth.lck}</td>
                                        <td>{c.classGrowth.bld}</td>
                                    </tr>
                                ))
                            }
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