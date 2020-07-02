import {colors} from './colors.js'

export function backgroundColor(pokemon) {
    if (pokemon === 'fire') {
        return colors.feu;
    } else if (pokemon === 'water') {
        return colors.eau;
    } else if (pokemon === 'normal') {
        return colors.normal;
    } else if (pokemon === 'grass') {
        return colors.plante;
    } else if (pokemon === 'bug') {
        return colors.insecte;
    } else if (pokemon === 'poison') {
        return colors.poison;
    } else if (pokemon === 'fairy') {
        return colors.fee;
    } else if (pokemon === 'electric') {
        return colors.electrik;
    } else if (pokemon === 'ground') {
        return colors.sol;
    } else if (pokemon === 'rock') {
        return colors.roche;
    } else if (pokemon === 'fighting') {
        return colors.combat;
    } else if (pokemon === 'psychic') {
        return colors.psy;
    } else if (pokemon === 'ghost') {
        return colors.spectre;
    } else if (pokemon === 'ice') {
        return colors.glace;
    } else if (pokemon === 'dragon') {
        return colors.dragon;
    } else if (pokemon === 'dark') {
        return colors.obscur;
    } else if (pokemon === 'steel') {
        return colors.acier;
    }
}