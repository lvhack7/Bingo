import {useRouter} from 'next/router'
import Image from 'next/image'
import {useRef} from 'react' 
import MicrophoneIcon from '@heroicons/react/outline/MicrophoneIcon'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import CogIcon from '@heroicons/react/outline/CogIcon'
import XIcon from '@heroicons/react/solid/XIcon'
import {useAuth} from '../contexts/AuthContext'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    let isAuth = false
    const router = useRouter()
    const searchRef = useRef(null)
    const {signIn, currentUser} = useAuth()

    if(currentUser) {
        isAuth = true
    }
    
    async function handleClick() {
        try {
            await signIn() 
        } catch {
            alert("Failed to sign in!")
        }
    }

    const search = (e) => {
        e.preventDefault()

        const term = searchRef.current.value

        if(!term) return 

        router.push(`/search?term=${term}`)
    }


    return (
        <header className="fixed w-full bg-white">
            <div className="flex px-4 pt-4 items-center">
                <Image 
                    className="cursor-pointer"
                    src="/14483.jpg" 
                    alt="icon" 
                    width={90} 
                    height={20} onClick={() => router.push('/')}/>
                <form onSubmit={search} className="flex flex-grow border border-gray-200 rounded-lg
                    shadow-lg px-6 py-3 ml-7 mr-5 max-w-3xl items-center">
                    <input ref={searchRef} className="flex-grow w-full focus:outline-none"/>
                    <XIcon className="h-5 text-gray-500 cursor-pointer mr-3 transition duration-100 transform 
                    hover:scale-110"
                    onClick={() => {searchRef.current.value=''}}/>
                    <MicrophoneIcon className="h-6 text-red-500
                        border-l-2 pl-4 border-gray-300" />
                    <SearchIcon type='submit' className="h-6 cursor-pointer transition duration-100 transform
                        hover:scale-110 hidden sm:inline-flex text-red-500 pl-4"/>
                    <button type='submit' hidden>Search</button>
                    <input type='submit' hidden/>
                </form>
                <div className='flex ml-auto items-center'>
                    <CogIcon className="h-7 mr-6 text-gray-700"/>
                    {isAuth ? 
                        <Image className="h-10 rounded-full cursor-pointer 
                        transition duration-150 transform hover:scale-110" loading="lazy" src={currentUser && currentUser.photoURL} alt="" />
                        :
                        <IconButton onClick={handleClick}>
                            <AccountCircleOutlinedIcon/>  
                        </IconButton>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
