
// safer than a global state 
import { getContext, setContext } from "svelte"
let bananaKey = Symbol('banana')

export function setBananaContext(value: any) {
    setContext(bananaKey, value)
}

export function getBananaContext() {
    return getContext(bananaKey)
}

