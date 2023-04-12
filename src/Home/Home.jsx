import './Home.css'
import { Menu } from "../shared/Menu/Menu.jsx"
import { History } from '../History/History'
export function Home(){
    return (
        <>
        <Menu></Menu>
        <section className="banner">
            
        </section>
        <section>
            <History></History>
        </section>
        </>
    )
}