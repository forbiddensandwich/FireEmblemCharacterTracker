import React, { useEffect, useState } from 'react';
import { createCharacter, getOneCharacter, updateOneCharacter } from '../services/CharacterService.jsx';
import { useParams } from 'react-router-dom';
import characterData from '../FireEmblemData/Characters.js';
import classData from '../FireEmblemData/Classes.js';
import {
    // nameHandler, classHandler, levelHandler, internalLevelHandler,
    // hpHandler, strHandler, defHandler, magHandler, resHandler, dexHandler,
    // luckHandler, spdHandler,
    changeHandler
    //, characterInstance, setCharacterInstance, formErrors, setFormErrors
} from '../functions/FormFunctions.jsx';
import { useNavigate } from "react-router-dom"
const Form = (props) => {
    let { page } = props;
    const navigate = useNavigate();
    const { id } = useParams();
    const unitData = characterData;
    const unitClassData = classData;
    const [errors, setErrors] = useState({});
    const [formErrors, setFormErrors] = useState({
        name: "Character name is required",
        class: "Class is required",
        hp: "HP stat is required",
        str: "Str stat is required",
        def: "Def stat is required",
        mag: "Mag stat is required",
        res: "Res stat is required",
        dex: "Dex stat is required",
        luck: "Luck stat is required",
        spd: "Speed stat is required",
        internalLevel: "Internal Level is required",
        level: "Level is required"
    });
    const [characterInstance, setCharacterInstance] = useState({
        name: "",
        class: "",
        level: 1,
        internalLevel: 1,
        hp: 0,
        str: 0,
        mag: 0,
        dex: 0,
        spd: 0,
        def: 0,
        res: 0,
        lck: 0,
        isMale: true
    })

    if (page == 'edit') {
        useEffect(() => {
            getOneCharacter(id)
                .then((res) => {
                    console.log(res);
                    (res) => changeHandler(res)
                    // setCharacterInstance.name(res.name);
                    // setCharClass(res.class);
                    // setIsMale(res.isMale);
                    // setCharacterInstance.level(res.level)
                    // setInternalLevel(res.internalLevel);
                    // setHP(res.hp);
                    // setStr(res.str);
                    // setDef(res.def);
                    // setMag(res.mag);
                    // setRes(res.res);
                    // setDex(res.dex);
                    // setLuck(res.luck);
                    // setSpd(res.spd);
                })
                .catch((err) => {
                    console.log(err)
                })
        }, [])
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // const newCharacter = {
        //     name,
        //     class: charClass,
        //     level,
        //     internalLevel,
        //     isMale,
        //     hp,
        //     str,
        //     def,
        //     mag,
        //     res,
        //     dex,
        //     luck,
        //     spd
        // }
        if (page == 'edit') {
            updateOneCharacter(id, characterInstance)
                .then((res) => {
                    console.log(res)
                    navigate('/');
                })
                .catch((err) => {
                    console.log('ERROR: ', err);
                    console.log('ERROR RESPONSE: ', err.response)
                    console.log('ERROR RESPONSE DATA: ', err.response.data)
                    console.log('ERROR RESPONSE DATA ERRORS: ', err.response.data.errors);
                    setErrors(err.response.data.errors)
                });
        }
        else {
            createCharacter(characterInstance)
                .then((res) => {
                    console.log(res)
                    navigate('/')
                })
                .catch((err) => {
                    console.log('ERROR: ', err);
                    console.log('ERROR RESPONSE: ', err.response)
                    console.log('ERROR RESPONSE DATA: ', err.response.data)
                    console.log('ERROR RESPONSE DATA ERRORS: ', err.response.data.errors);
                    setErrors(err.response.data.errors)
                });
        }
    }
    const validateForm = () => {
        console.log(Object.values(formErrors))
        return Object.values(formErrors).every(value => value === '')
    }
    return (
        <>
            <form className='w-50 mx-auto text-white'
                onSubmit={submitHandler}
            >
                <div>
                    <br />
                    <label className='form-label'>Unit's Name:  </label>
                    {<select
                        name="name"
                        id="name"
                        defaultValue={"pick"}
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}>
                        <option value="pick" disabled>
                            --Select Name--
                        </option>
                        {
                            unitData.map((character, index) => (
                                <option key={index} value={character.name}>
                                    {character.name}
                                </option>
                            ))
                        }
                    </select>}

                    {/* {<input className='form-control'
                        type="text"
                        onChange={(e) => nameHandler(e, setFormErrors, formErrors, setName)}
                        value={name}
                    />} */}
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.name}</p>
                            :
                            null
                    }
                    {
                        errors.name ?
                            <p className='text-danger'>{errors.name.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Class:  </label>
                    {/* <input className='form-control'
                        type="text"
                        onChange={(e) => classHandler(e, setFormErrors, formErrors, setCharClass)}
                        value={charClass}
                    /> */}
                    {<select
                        name="class"
                        id="class"
                        defaultValue={"pick"}
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}>
                        <option value="pick" disabled>
                            --Select Name--
                        </option>
                        {
                            unitClassData.map((classData, index) => (
                                <option key={index} value={classData.name}>
                                    {classData.name}
                                </option>
                            ))
                        }
                    </select>}
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.class}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.class.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Level: </label>
                    <input className='form-control'
                        type="number"
                        name="level"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.level} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.level}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.level.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Internal Level: </label>
                    <input className='form-control'
                        type="number"
                        name="internalLevel"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.internalLevel} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.internalLevel}</p>
                            :
                            null
                    }
                    {
                        errors.internalLevel ?
                            <p className='text-danger'>{errors.internalLevel.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>HP: </label>
                    <input className='form-control'
                        type="number"
                        name="hp"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.hp} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.hp}</p>
                            :
                            null
                    }
                    {
                        errors.hp ?
                            <p className='text-danger'>{errors.hp.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Str: </label>
                    <input className='form-control'
                        type="number"
                        name="str"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.str} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.str}</p>
                            :
                            null
                    }
                    {
                        errors.str ?
                            <p className='text-danger'>{errors.str.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Def: </label>
                    <input className='form-control'
                        type="number"
                        name="def"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.def} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.def}</p>
                            :
                            null
                    }
                    {
                        errors.def ?
                            <p className='text-danger'>{errors.def.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Mag: </label>
                    <input className='form-control'
                        type="number"
                        name="mag"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.mag} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.mag}</p>
                            :
                            null
                    }
                    {
                        errors.mag ?
                            <p className='text-danger'>{errors.mag.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Res: </label>
                    <input className='form-control'
                        type="number"
                        name="res"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.res} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.res}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.res.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Dex: </label>
                    <input className='form-control'
                        type="number"
                        name="dex"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.dex} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.dex}</p>
                            :
                            null
                    }
                    {
                        errors.dex ?
                            <p className='text-danger'>{errors.dex.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Luck: </label>
                    <input className='form-control'
                        type="number"
                        name="luck"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.luck} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.luck}</p>
                            :
                            null
                    }
                    {
                        errors.luck ?
                            <p className='text-danger'>{errors.luck.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Spd: </label>
                    <input className='form-control'
                        type="number"
                        name="spd"
                        onChange={(e) => changeHandler(e, formErrors, setFormErrors, characterInstance, setCharacterInstance)}
                        value={setCharacterInstance.spd} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.spd}</p>
                            :
                            null
                    }
                    {
                        errors.spd ?
                            <p className='text-danger'>{errors.spd.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Gender: {characterInstance.isMale ? "Male" : "Female"}</label>
                    <input
                        type="checkbox"
                        name="isMale"
                        onChange={(e) => setCharacterInstance((characterInstance) => ({
                            ...characterInstance, [e.target.name]: !e.target.checked
                        }
                        ))}
                        value={characterInstance.isMale} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.isMale}</p>
                            :
                            null
                    }
                    {
                        errors.isMale ?
                            <p className='text-danger'>{errors.isMale.message}</p>
                            :
                            null
                    }
                </div>
                <button type='submit' disabled={!validateForm()}>Submit</button>
            </form>
        </>
    )
}

export default Form