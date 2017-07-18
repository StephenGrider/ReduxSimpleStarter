import { FETCH_WEATHER } from '../actions/index';

/**
 * IMPORTANTE:Nunca se deve manipular o state, por isso esta função
 * retorna um um novo array contendo os dados do antigo state juntamente
 * com os dados obtidos do payload da action.
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = [], action) {

    switch (action.type)
    {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}