import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../../store/themeSlice";

export function SwitcherTheme() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);

    const isLight = theme === 'light';

    return (
        <button
            style={{
                backgroundColor: isLight ? 'snow' : 'darkgray',
                color: !isLight ? 'snow' : 'darkgray'
            }}

            onClick={() => {dispatch(toggle())}}
        >
            {isLight ? 'Светлая' : 'Темного'}
        </button>
    )
}