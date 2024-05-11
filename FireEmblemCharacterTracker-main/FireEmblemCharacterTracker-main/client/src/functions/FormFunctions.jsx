const nameHandler = (e, setFormErrors, formErrors, setName) => {
    setName(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            errorMsg = 'A number is not a valid input'
        }
        else {
            if (value.length > 10) {
                errorMsg = "Length can't be greater than 10 characters"
            }
        }
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, name: errorMsg })
}
const classHandler = (e, setFormErrors, formErrors, setCharClass) => {
    setCharClass(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            errorMsg = 'A number is not a valid input'
        }
        else {
            if (value.length > 20) {
                errorMsg = "Length can't be greater than 16 characters"
            }
        }
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, charClass: errorMsg })
}
const levelHandler = (e, setFormErrors, formErrors, setLevel) => {
    setLevel(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, level: errorMsg })
}
const internalLevelHandler = (e, setFormErrors, formErrors, setInternalLevel) => {
    setInternalLevel(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, internalLevel: errorMsg })
}
const hpHandler = (e, setFormErrors, formErrors, setHP) => {
    setHP(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, hp: errorMsg })
}
const strHandler = (e, setFormErrors, formErrors, setStr) => {
    setStr(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, str: errorMsg })
}
const defHandler = (e, setFormErrors, formErrors, setDef) => {
    setDef(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, def: errorMsg })
}
const magHandler = (e, setFormErrors, formErrors, setMag) => {
    setMag(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, mag: errorMsg })
}
const resHandler = (e, setFormErrors, formErrors, setRes) => {
    setRes(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, res: errorMsg })
}
const dexHandler = (e, setFormErrors, formErrors, setDex) => {
    setDex(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, dex: errorMsg })
}
const luckHandler = (e, setFormErrors, formErrors, setLuck) => {
    setLuck(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, luck: errorMsg })
}
const spdHandler = (e, setFormErrors, formErrors, setSpd) => {
    setSpd(e.target.value);
    const value = e.target.value.trim();
    let errorMsg = ''
    if (value) {
        if (Number(value)) {
            if (value < 0) {
                errorMsg = "Value can't be less than 0"
            }
            else if (value > 99) {
                errorMsg = "Value can't be greater than 99"
            }
        }
    }
    else if (isNaN(value)) {
        errorMsg = "Value has to be a number"
    }
    else {
        errorMsg = "Input can't be left unfilled"
    }
    setFormErrors({ ...formErrors, spd: errorMsg })
}

export {nameHandler, classHandler, levelHandler, internalLevelHandler, hpHandler, strHandler, defHandler, magHandler, resHandler, dexHandler, luckHandler, spdHandler}


// const numberHandler = (e, setter,  errorGetter, errorSetter) => {
//     setter(e.target.value)
//     const value = e.target.value.trim
//     let errorMsg = ''
//     if (value) {
//         if (Number(value)) {
//             if (value < 0) {
//                 errorMsg = "Value can't be less than 0"
//             }
//             else if (value > 99) {
//                 errorMsg = "Value can't be greater than 99"
//             }
//         }
//     }
//     else if (isNaN(value)) {
//         errorMsg = "Value has to be a number"
//     }
//     else {
//         errorMsg = "Input can't be left unfilled"
//     }
//     errorSetter({ ...errorGetter, name: errorMsg })
// }

// const textHandler = (e, setter, errorGetter, errorSetter) => {
//     setter(e.target.value)
//     const value = e.target.value.trim
//     let errorMsg = ''
//     if (value) {
//         if (Number(value)) {
//             errorMsg = 'A number is not a valid input'
//         }
//         else {
//             if(value.length > 10)
//             {
//                 errorMsg = "Length can't be greater than 10 characters"
//             }
//         }
//     }
//     else {
//         errorMsg = "Input can't be left unfilled"
//     }
//     errorSetter({ ...errorGetter, name: errorMsg })
// }
// export { numberHandler, textHandler }