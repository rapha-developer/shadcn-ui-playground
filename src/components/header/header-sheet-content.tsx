import { NavLink } from "react-router-dom";
import { Button } from "../ui/button"
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"
import { X } from "lucide-react";
import { getMenuItems } from "../../data/menuItems";

export const HeaderSheetContent = () => {
    const items = getMenuItems()
    return (
        <SheetContent className="py-10 px-5">
            <SheetHeader className="flex flex-col gap-2 items-center">
                <SheetTitle>
                    <img src="/shadcn-play.png" 
                    alt="Shadcn Play logo (espiral azul)" 
                    className="w-40 h-auto" />
                </SheetTitle>
                <SheetDescription>Shadcn-ui com vários componentes</SheetDescription>
            </SheetHeader>
            <ul className="py-16 px-0 max-w-64 mx-auto flex flex-col gap-4">
                {items.map((item) => (
                    <NavLink to={item.url} className='hover:underline' key={`item-${item.title}`}>
                        <li className="menu-item font-urbanist text-xl font-bold text-titles capitalize">✨ {item.title}</li>
                    </NavLink>
                ))
                }
            </ul>
            <SheetFooter>
                <SheetClose asChild>
                    <Button type="button" variant={"destructive"}>
                        <X className="w-5 h-5 mr-2" />
                        Fechar Menu
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    )
}