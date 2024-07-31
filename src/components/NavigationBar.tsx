import {Link} from "@radix-ui/react-navigation-menu";
import {NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FiChevronRight} from "react-icons/fi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useState} from "react";

export function NavigationBar() {
    const calendlyUrl = 'https://calendly.com/bathiyaw';
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <NavigationMenu
                className={"min-w-full h-[80px] backdrop-blur bg-[#131313]/75 flex justify-center px-[25px] lg:px-[100px] fixed top-0 z-50"}>
                <div className={"w-full flex justify-between 2xl:max-w-[1320px] mx-auto"}>
                    <Link>
                        <img src="/assets/images/logo/logo.png" alt="metaroon-logo"
                             className={"w-[125px] cursor-pointer"}/>
                    </Link>
                    <div className={"hidden gap-[30px] lg:flex justify-center"}>
                        <Link href="/#projects">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Projects
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/#services">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Services
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/#about">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/#contact">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </div>
                    <Button onClick={() => window.open(calendlyUrl, '_blank')} className={"hidden lg:flex"}>Book a
                        call <FiChevronRight
                            size={18}/></Button>

                    <DropdownMenu onOpenChange={setIsOpen}>
                        <DropdownMenuTrigger asChild>
                            <Button className="lg:hidden w-[40px] h-[40px]" variant="outline">
                                <img
                                    src="/assets/images/menu.png"
                                    className={`min-w-[18px] menu-icon ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}`}
                                    alt="menu-icon"
                                    style={{transition: 'transform 0.3s'}}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mr-[25px] bg-white">
                            <DropdownMenuRadioGroup value={"bottom"} className={"bg-white"}>
                                <div className={" flex flex-col gap-2 justify-center text-[#131313]"}>
                                    <Link href="/#projects">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Projects
                                        </NavigationMenuLink>
                                    </Link>
                                    <Link href="/#services">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Services
                                        </NavigationMenuLink>
                                    </Link>
                                    <Link href="/#about">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                    <Link href="/#contact">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </div>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/*<Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden w-[40px] h-[40px]" variant="outline">
                            <img src="/assets/images/menu.png" className={"min-w-[18px]"} alt="menu-icon"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className={"bg-[#131313] border-r-0"}>
                        <div className="grid gap-2 py-6">
                            <Link>
                                <img src="/assets/images/logo/logo.png" alt="metaroon-logo"
                                     className={"w-[125px] cursor-pointer mb-10"}/>
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#projects">
                                Projects
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#services">
                                Services
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#about">
                                About
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg" href="#contact">
                                Contact
                            </Link>
                            <Button onClick={() => window.open(calendlyUrl, '_blank')} className={"w-[150px] my-2"}>Book
                                a call <FiChevronRight
                                size={18}/></Button>
                        </div>
                    </SheetContent>
                </Sheet>*/}
            </NavigationMenu>
        </>
    )
}