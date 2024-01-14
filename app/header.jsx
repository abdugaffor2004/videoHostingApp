import Link from "next/link";
import CustomButton from "./components/customButton.tsx";


export default function Header(){
    return(
        <>
            <header>
                <nav className="py-10 flex justify-evenly border-b border-white">
                    {/* <Link className="bg-teal-500 text-black py-1 px-3 rounded hover:opacity-75" href={'/'}>Главная</Link>
                    <Link className="bg-teal-500 text-black py-1 px-3 rounded hover:opacity-75" href={'/addVideo'}>Добавить</Link>
                    <Link className="bg-teal-500 text-black py-1 px-3 rounded hover:opacity-75" href={'/Tags'}>Теги</Link> */}

                    <CustomButton Component={Link} content={"Главная"} fontColor={'black'} source={'/'}/>
                    <CustomButton Component={Link} content={"Добавить"} fontColor={'black'} source={'/addVideo'}/>
                    <CustomButton Component={Link} content={"Теги"} fontColor={'black'} source={'/Tags'}/>
                </nav>
            </header>
        </>
    )
}