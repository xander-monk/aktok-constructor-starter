import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHero, PageBlocksHeroArtRight } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";


export const HeroArtRight = ({ data }: { data: PageBlocksHeroArtRight }) => {
    const theme = useTheme();
    return (
        <main className="bg-[#F4F5F7] px-8 md:px-20 py-12">
            <div className="md:grid md:grid-cols-12 items-center">
                <div className="flex justify-end md:col-span-5">
                    <div className="md:w-[90%] md:mr-[-100px]">
                        <h1 className="gothamPro-Black  text-[#404858] text-2xl md:text-[40px] md:leading-10 text-left">
                            <TinaMarkdown content={data.heroheadline} />
                        </h1>
                        <div className="my-6 text-[#5E6A82] text-base gothamPro text-left ">
                            <TinaMarkdown content={data.textline} /></div>
                        <div className="md:flex my-12  items-center justify-between">
                            <button
                                className="text-[#FFFFFF] hover:bg-[#8C8BFB] active:bg-[#6257E4] my-4 md:my-0 font-normal text-base gothamPro py-1 md:py-3 p-6 md:px-12 blue-button-shadow  rounded-[28px] bg-[#6866FF]">{data.buttonPrimary}</button>
                            <button
                                className="text-[#5E6A82] relative z-10 gothamPro hover:text-[#F27A02] hover:border-[#F27A02] py-1 md:py-3 px-4 md:px-8  rounded-[28px] bg-[white] border-2 border-[#5E6A82]">{data.buttonSecondary}</button>
                        </div>
                    </div>
                </div>
                <img src="./images/image-1.svg" className="col-span-7 " alt=""/>
            </div>
        </main>
    )
}

export const heroArtTightBlockSchema: TinaTemplate = {
    name: "heroArtRight",
    label: "Hero Art Right",
    ui: {
        previewSrc: "/blocks/HeroArtRight.png",
        defaultItem: {
            heroheadline: "Get your smart and unstoppable website assistant",
            textline: "We created the Aktok website assistant for all types of companies and startups: with all the crucial features and ease of use at a very reasonable price.",
            buttonPrimary: "Get a demo",
            buttonSecondary: 'TRY TRIAL NOW'
        },
    },
    fields: [
        {
            type: "rich-text",
            label: "Headline",
            name: "heroheadline",
            isBody: true,
        },
        {
            type: "rich-text",
            label: "Text",
            name: "textline",
            isBody: true,
        },
        {
            type: "string",
            label: "Primary Button",
            name: "buttonPrimary",
        },
        {
            type: "string",
            label: "Secondary Button",
            name: "buttonSecondary",
        },
    ]
}