"use client"

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps{
    children: ReactNode;
    className?: string;
}

const Header:React.FC<HeaderProps> = ({
    children,
    className
}) =>{

    const router = useRouter( );

    const handleLogout =() =>{

    }
    return(<div
        className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `,
            className
        )}
    >
        This is the main content
    </div>);
}

export default Header;