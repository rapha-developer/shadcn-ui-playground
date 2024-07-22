import { Menu, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogTrigger } from "../ui/dialog"
import { HeaderSearchDialog } from "./header-search-dialog"
import { Sheet, SheetTrigger } from "../ui/sheet"
import { HeaderSheetContent } from "./header-sheet-content"
import { NavLink } from "react-router-dom"

export const Header = () => {

    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const handleScroll = () => {
        const scrollPos = window.scrollY
        setScrollPosition(scrollPos)
    }
    useEffect(() => {
        handleScroll();
        addEventListener('scroll', handleScroll)
        return () => {
            removeEventListener('scroll', handleScroll)
        }
    }, [])
    const headerClass = (scrollPosition == 0) ? 'container mx-auto mt-[31px] rounded-rap-large' : 'fixed top-0 left-0 w-full '
    return (
        <header className={`${headerClass} bg-white border border-solid border-border shadow-rap-boxes-shadow transition-all`}>
            <div className="header-wrapper max-w-7xl mx-auto flex items-center justify-between py-5 px-2 md:px-10">
                <div className="header-group hidden md:flex items-center gap-[6px]">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={'ghost'} className="font-urbanist text-titles font-medium tracking-extraSmall capitalize">
                                <Search className="w-4 h-4 text-primary font-urbanist text-base mr-2"/>
                                Pesquisar rápida
                            </Button>
                        </DialogTrigger>

                        <HeaderSearchDialog />
                    </Dialog>
                </div>
                <NavLink to={'/'}>
                <img src="/shadcn-play.png" 
                    alt="Logo Shadcn play" 
                    className="w-32 lg:w-40 h-auto" />
                </NavLink>
                <div className="header-actions flex gap-5 items-center justify-end">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button type="button" className="capitalize">
                                Menu
                                <Menu className="w-6 h-6 text-white font-bold ml-2"/>
                            </Button>
                        </SheetTrigger>

                        <HeaderSheetContent />
                    </Sheet>
                </div>
            </div>
        </header>
    )
}