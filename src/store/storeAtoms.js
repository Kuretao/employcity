import {atom} from "jotai";



export const DropdownAtoms = atom(false);

export const progressAtom = atom(75);

export const fileNameAtom = atom('');

export const NarrowAtom = atom(window.innerWidth < 1600);

export const TabletAtom = atom(window.innerWidth < 860);