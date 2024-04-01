import {SectionTitle} from "@/components/SectionTitle.tsx";
import {DevToolCard} from "@/components/DevToolCard.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";

export function DevTools() {
    return (
        <div>
            <SectionTitle primaryTitle={"Technologys"} secondaryTitle={"Devtool"}/>
            <div className={"hidden md:flex"}>
                <div
                    className={"grid grid-cols-8 px-[25px] lg:px-[100px] text-[14px] font-[400] leading-[17.64px] text-[#999999]"}>
                    <div className={'group flex flex-col gap-[54px] justify-center items-center'}>WebDevelopment
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/ts.png"} title={"Typescript"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/nextjs.png"} title={"Next.Js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/nestjs.png"} title={"Nest.Js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/reactjs.png"} title={"React.Js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/asp-net.png"} title={"ASP.NET"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/vuejs.png"} title={"Vue.js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/nodejs.png"} title={"Node.js"}/>
                        </div>
                    </div>
                    <div className={'group  flex flex-col gap-[54px] items-center'}>Blockchain
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/ethereum.png"} title={"Ethereum"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/solidity.png"} title={"Solidity"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/hardhat.png"} title={"Hardhat"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/solana.png"} title={"Solana"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/rust.png"} title={"Rust"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/waves.png"} title={"Waves"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/algorand.png"} title={"Algorand"}/>
                        </div>
                    </div>
                    <div className={'group flex flex-col gap-[54px] items-center'}>Mobile App
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/flutter.png"} title={"Flutter"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/android-studio.png"}
                                         title={"Android Studio"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/xcode.png"} title={"XCode"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/dart.png"} title={"Dart"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/reactjs.png"} title={"React Native"}/>
                        </div>
                    </div>
                    <div className={'group  flex flex-col gap-[54px] items-center'}>Game Development
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/unity.png"} title={"Unity"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/unreal.png"} title={"Unreal"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/blender.png"} title={"Blender"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/c++.png"} title={"C++"}/>
                        </div>
                    </div>
                    <div className={'group flex flex-col gap-[54px] items-center'}>QA Tools
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/selenium.png"} title={"Selenium"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/qa/cypress.png"} title={"Cypress"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/qa/cucumber.png"} title={"Cucumber"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/qa/bugzilla.png"} title={"Bugzilla"}/>
                        </div>
                    </div>
                    <div className={'group flex flex-col gap-[54px] items-center'}>Project Management
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/asana.png"} title={"Asana"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/projectManagement/azure.png"} title={"Azure"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/projectManagement/jira.png"} title={"Jira"}/>
                        </div>
                    </div>
                    <div className={'group flex flex-col gap-[54px] items-center'}>Cloud Services
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/google-cloud.png"} title={"Google Cloud"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/cloudService/aws.png"} title={"AWS"}/>
                        </div>
                    </div>
                    <div className={'group flex flex-col gap-[54px] items-center'}>UI/UX Design
                        <div className={'grid grid-cols-1 items-center gap-[54px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/figma.png"} title={"Figma"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/uiux/adobe.png"} title={"Adobe"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'md:hidden flex px-[25px] lg:px-[100px]'}>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Web Development</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/ts.png"} title={"Typescript"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/nextjs.png"} title={"Next.Js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/nestjs.png"} title={"Nest.Js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/reactjs.png"} title={"React.Js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/asp-net.png"} title={"ASP.NET"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/vuejs.png"} title={"Vue.js"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/nodejs.png"} title={"Node.js"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Blockchain</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/ethereum.png"} title={"Ethereum"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/solidity.png"} title={"Solidity"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/hardhat.png"} title={"Hardhat"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/solana.png"} title={"Solana"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/rust.png"} title={"Rust"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/waves.png"} title={"Waves"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/blockchain/algorand.png"} title={"Algorand"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Mobile App</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/flutter.png"} title={"Flutter"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/android-studio.png"}
                                         title={"Android Studio"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/xcode.png"} title={"XCode"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/mobile/dart.png"} title={"Dart"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/reactjs.png"} title={"React Native"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Game Development</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/unity.png"} title={"Unity"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/unreal.png"} title={"Unreal"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/blender.png"} title={"Blender"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/gameDev/c++.png"} title={"C++"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>QA Tools</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/selenium.png"} title={"Selenium"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/qa/cypress.png"} title={"Cypress"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/qa/cucumber.png"} title={"Cucumber"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/qa/bugzilla.png"} title={"Bugzilla"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Project Management</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/asana.png"} title={"Asana"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/projectManagement/azure.png"} title={"Azure"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/projectManagement/jira.png"} title={"Jira"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Cloud Service</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/google-cloud.png"} title={"Google Cloud"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/cloudService/aws.png"} title={"AWS"}/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>UI/UX Design</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-4 gap-[20px]'}>
                            <DevToolCard imgUrl={"/assets/images/devTool/figma.png"} title={"Figma"}/>
                            <DevToolCard imgUrl={"/assets/images/devTool/uiux/adobe.png"} title={"Adobe"}/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}