export type TValueHamburgerContext = (canBeShowed: boolean) => void
export type TValueAsideContext = React.Dispatch<TAction>
export type TState = boolean;
export type TAction = { type: 'toogle' } | { type: 'set'; payload: boolean };
export type THamburgerIsOpenContext = boolean