import { React, useState, useEffect } from 'react'
import { getOneCharacter } from '../services/CharacterService'
import { Link, useParams } from 'react-router-dom'
const DisplayInfo = () => {
    // const navigate = useNavigate();
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
    return (
        <>
                <div>
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
                </div>
        </>
    )
}

export default DisplayInfo