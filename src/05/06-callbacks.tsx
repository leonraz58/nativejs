// const callback = (): number => {
//     alert('hey')
//     return 12
// }
//
// window.setTimeout(callback, 1000)
import {ChangeEvent, MouseEvent, MouseEventHandler} from "react";

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('user deleted')
        alert(event.currentTarget.name)
    }
    const saveUser = () => {
        alert('user saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log('age changed'+event.currentTarget.value)
    }
    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}
    >Dimych</textarea>
        <input onChange = {onAgeChanged}/>

        <button name = "delete" onClick={deleteUser}>delete</button>
        <button name = "save" onClick={saveUser}>save</button>
    </div>
}