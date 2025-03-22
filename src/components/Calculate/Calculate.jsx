import style from './Calculate.module.css';

export function Calculate() {
    return (
        <table>
            <tbody>
                <tr>
                    <td><Button label="CE" color="red"/></td>
                    <td><Button label="C" color="red"/></td>
                    <td><Button label="<-"/></td>
                    <td><Button label="1/x"/></td>
                    <td><Button label="GT" color="blue"/></td>
                </tr>

                <tr>
                    <td><Button label="MC"/></td>
                    <td><Button label="MR"/></td>
                    <td><Button label="M+"/></td>
                    <td><Button label="M-"/></td>
                    <td><Button label="+/-"/></td>
                </tr>

                <tr>
                    <td><Button label="7"/></td>
                    <td><Button label="8"/></td>
                    <td><Button label="9"/></td>
                    <td><Button label="/"/></td>
                    <td><Button label="s"/></td>
                </tr>

                <tr>
                    <td><Button label="4"/></td>
                    <td><Button label="5"/></td>
                    <td><Button label="6"/></td>
                    <td><Button label="x"/></td>
                    <td><Button label="%"/></td>
                </tr>

                <tr>
                    <td><Button label="1"/></td>
                    <td><Button label="2"/></td>
                    <td><Button label="3"/></td>
                    <td><Button label="-"/></td>
                    <td rowSpan='2'><Button label="="/></td>
                </tr>

                <tr>
                    <td><Button label="0"/></td>
                    <td><Button label="00"/></td>
                    <td><Button label="."/></td>
                    <td><Button label="+"/></td>
                </tr>
            </tbody>
        </table>
    )
}

function Button({label, color = "black"}) {
    return (
        <div style={{backgroundColor: color}} className={style['button']}>
            {label}
        </div>
    )
}