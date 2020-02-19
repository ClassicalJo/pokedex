export const CHANGE_MAIN_SCREEN = "CHANGE_MAIN_SCREEN"

export const LIST_FETCH_BEGIN = "LIST_FETCH_BEGIN"
export const LIST_FETCH_SUCCESS = "LIST_FETCH_SUCCESS"
export const LIST_FETCH_FAILURE = "LIST_FETCH_FAILURE"
export const LIST_ADD_FILTER = "LIST_ADD_FILTER"
export const LIST_FILTER = "LIST_FILTER"

export const ABILITY_SCREEN_SHOW = "ABILITY_SCREEN_SHOW"
export const TYPE_SCREEN_SHOW = "TYPE_SCREEN_SHOW"
export const MOVE_SCREEN_SHOW = "MOVE_SCREEN_SHOW"
export const CLOSE_ALL_SCREENS = "CLOSE_ALL_SCREENS"

export const ABILITY_FETCH_BEGIN = "ABILITY_FETCH_BEGIN"
export const ABILITY_FETCH_SUCCESS = "ABILITY_FETCH_SUCCESS"
export const ABILITY_FETCH_FAILURE = "ABILITY_FETCH_FAILURE"
export const ABILITY_CLEAR = "ABILITY_CLEAR"

export const TYPE_FETCH_BEGIN = "TYPE_FETCH_BEGIN"
export const TYPE_FETCH_SUCCESS = "TYPE_FETCH_SUCCESS"
export const TYPE_FETCH_FAILURE = "TYPE_FETCH_FAILURE"
export const TYPE_CLEAR = "TYPE_CLEAR"

export const MOVE_FETCH_BEGIN = "MOVE_FETCH_BEGIN"
export const MOVE_FETCH_SUCCESS = "MOVE_FETCH_SUCCESS"
export const MOVE_FETCH_FAILURE = "MOVE_FETCH_FAILURE"
export const MOVE_CLEAR = "MOVE_CLEAR"

export const ITEM_FETCH_BEGIN = 'ITEM_FETCH_BEGIN'
export const ITEM_FETCH_SUCCESS = "ITEM_FETCH_SUCCESS"
export const ITEM_FETCH_FAILURE = "ITEM_FETCH_FAILURE"
export const ITEM_CLEAR = "ITEM_CLEAR"

export const changeMainScreen = screen => {
    return {
        type: CHANGE_MAIN_SCREEN,
        payload: screen,
    }
}

export const listFetchBegin = () => {
    return {
        type: LIST_FETCH_BEGIN
    }
}
export const listFetchSuccess = data => {
    return {
        type: LIST_FETCH_SUCCESS,
        payload: data
    }
}

export const listFetchFailure = error => {
    return {
        type: LIST_FETCH_FAILURE,
        payload: { error }
    }
}

export const listAddFilter = characters => {
    return {
        type: LIST_ADD_FILTER,
        payload: characters
    }
}

export const listFilter = list => {
    return {
        type: LIST_FILTER,
        payload: list
    }
}

export const showAbilityScreen = () => {
    return {
        type: ABILITY_SCREEN_SHOW,
    }
}

export const showMoveScreen = () => {
    return {
        type: MOVE_SCREEN_SHOW,
    }
}

export const showTypeScreen = () => {
    return {
        type: TYPE_SCREEN_SHOW,
    }
}

export const closeAllScreens = () => {
    return {
        type: CLOSE_ALL_SCREENS
    }
}

export const abilityFetchBegin = () => {
    return {
        type: ABILITY_FETCH_BEGIN
    }
}

export const abilityFetchSuccess = data => {
    return {
        type: ABILITY_FETCH_SUCCESS,
        payload: data
    }
}

export const abilityFetchFailure = error => {
    return {
        type: ABILITY_FETCH_FAILURE,
        payload: { error }
    }
}

export const abilityClear = () => {
    return {
        type: ABILITY_CLEAR
    }
}

export const typeFetchBegin = () => {
    return {
        type: TYPE_FETCH_BEGIN
    }
}

export const typeFetchSuccess = data => {
    return {
        type: TYPE_FETCH_SUCCESS,
        payload: data
    }
}

export const typeFetchFailure = error => {
    return {
        type: TYPE_FETCH_FAILURE,
        payload: { error }
    }
}

export const typeClear = () => {
    return {
        type: TYPE_CLEAR
    }
}

export const moveFetchBegin = () => {
    return {
        type: MOVE_FETCH_BEGIN
    }
}

export const moveFetchSuccess = move => {
    return {
        type: MOVE_FETCH_SUCCESS,
        payload: move
    }
}

export const moveFetchFailure = error => {
    return {
        type: MOVE_FETCH_FAILURE,
        payload: { error }
    }
}

export const moveClear = () => {
    return {
        type: MOVE_CLEAR
    }
}

export const itemFetchBegin = () => {
    return {
        type: ITEM_FETCH_BEGIN
    }
}
export const itemFetchSuccess = data => {
    return {
        type: ITEM_FETCH_SUCCESS,
        payload: data
    }
}

export const itemFetchFailure = error => {
    return {
        type: ITEM_FETCH_FAILURE,
        payload: { error }
    }
}

export const itemClear = () => {
    return {
        type: ITEM_CLEAR,
    }
}
