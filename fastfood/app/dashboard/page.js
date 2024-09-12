'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../Components/Header";
import DashboardContent from "../Components/DashboardContent";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const loggedin = localStorage.getItem('loggedin') === 'true';
        setIsLoggedIn(loggedin);

        if(!loggedin) {
            router.push('/');
        }
    }, [router]);

    if(!isLoggedIn) return null;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 ml-12">
                <Header/>
                <main className="p-2">
                    <DashboardContent/>
                </main>  
            </div>    
        </div>
    );
}