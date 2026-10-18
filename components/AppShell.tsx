"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";

const AppShell = ({ children }: { children: ReactNode }) => {
    const pathName = usePathname();
    const isFullScreenRoute = 
        pathName?.startsWith("/workspace/") || pathName?.startsWith("/shared/"); 
    
    if(isFullScreenRoute) {
        return <> {children} </>
    }

    return <>
        <SiteHeader />
        <div> {children} </div>
    </>
}

export default AppShell;