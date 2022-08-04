import { PopupCard } from "./PopupCard";


interface AlertInterface {
    children: React.ReactNode,
    visible: boolean,
}

export const AlertPopup = ({visible,children} : AlertInterface) => {
    // TODO
    return <PopupCard visible={visible} scrollable={false}>
        {children}
    </PopupCard>
}