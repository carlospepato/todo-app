import logo from '../assets/Logo.png';
import { CreateAccountForm } from './components/createAccountForm';

export function CreateAccount(){
    return(
        <div className="max-w-5xl mx-auto my-4 flex flex-col">
            <div className= "justify-center items-center flex h-60">
                <img src={logo} alt="logo TodoList" />
            </div>
            <div className="flex flex-col w-[30rem] gap-4 mx-auto mt-20">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold text-center text-sky-500">Create Account</h1>
                    <CreateAccountForm/>
                </div>
            </div>        
        </div>
    )
}