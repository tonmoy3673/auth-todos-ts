import { NavLink } from "react-router";

const Navbar =()=>{
    return(
        <div className="py-3">
            <nav className="flex items-center justify-between pt-2">
                <NavLink className="font-bold text-lg text-blue-600" to='/'>
                    Todo<span className="text-cyan-600">App</span>
                </NavLink>
                {/* ======= List ==== */}

                <ul className="mx-auto flex gap-x-6 items-center">
                    <NavLink className={({isActive})=>`${isActive? 'text-green-600' : 'text-blue-600'} text-base font-semibold`} to='/'>
                    Todos
                    
                    </NavLink>
                    <NavLink className={({isActive})=>`${isActive?'text-green-600':'text-blue-600'} text-base font-semibold`} to='about'>
                    About
                    </NavLink>
                    <NavLink className={({isActive})=>`${isActive?'text-green-600':'text-blue-600'} text-base font-semibold`} to='contact'>
                        Contact
                    </NavLink>
                    <NavLink className={({isActive})=>`${isActive?'text-green-600':'text-blue-600'} text-base font-semibold`} to='login'>
                       <button className="cursor-pointer"> Login</button>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;