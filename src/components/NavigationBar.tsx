import {Link} from "@radix-ui/react-navigation-menu";
import {NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FiChevronRight} from "react-icons/fi";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {MenuIcon} from "lucide-react";

export function NavigationBar() {

    return (
        <>
            <NavigationMenu
                className={"min-w-full h-[80px] backdrop-blur bg-[#131313]/75 justify-between px-[25px] lg:px-[100px] fixed top-0 z-50"}>
                <Link>
                    <img src="/assets/images/logo/logo.png" alt="metaroon-logo" className={"w-[125px] cursor-pointer"}/>
                </Link>
                <div className={"hidden gap-[30px] lg:flex justify-center"}>
                    <Link href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Projects
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Services
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </div>
                <Button className={"hidden lg:flex"}>Book a call <FiChevronRight size={18}/></Button>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden" size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className={"bg-[#131313] border-r-0"}>
                        <div className="grid gap-2 py-6">
                            <Link>
                                <img src="/assets/images/logo/logo.png" alt="metaroon-logo"
                                     className={"w-[125px] cursor-pointer mb-10"}/>
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#">
                                Projects
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#">
                                Services
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#">
                                About
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#">
                                Contact
                            </Link>
                            <Button className={"w-[150px] my-2"}>Book a call <FiChevronRight size={18}/></Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </NavigationMenu>
        </>
    )
}