import Link from "next/link";
import CustomButton from "./components/customButton.tsx";


export default function Header(){
    return(
        <>
            <header>
                <nav className="py-6 flex justify-evenly border-b border-white">
                    <CustomButton Component={Link} content={"Главная"} fontColor={'black'} source={'/'}/>
                    <CustomButton Component={Link} content={"Добавить"} fontColor={'black'} source={'/addVideo'}/>
                    <CustomButton Component={Link} content={"Теги"} fontColor={'black'} source={'/tags'}/>
                </nav>
            </header>
        </>
    )
}