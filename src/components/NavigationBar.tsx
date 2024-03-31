import {Link} from "@radix-ui/react-navigation-menu";
import {NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FiChevronRight} from "react-icons/fi";

export function NavigationBar() {

    return (
        <>
            <NavigationMenu
                className={"min-w-full h-[80px] backdrop-blur bg-[#131313]/75 justify-between px-[100px] fixed top-0"}>
                <Link>
                    <img src="/assets/images/logo/logo.png" alt="metaroon-logo" className={"w-[125px] cursor-pointer"}/>
                </Link>
                <div className={"gap-[30px] flex justify-center"}>
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
                <Button>Book a call <FiChevronRight size={18}/></Button>
            </NavigationMenu>
        </>
    )
}