import { HeroCategories } from "./hero-categories"
import { getHeroCategoriesData } from "../../data/categories"

export const Hero = () => {
    
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-[75px] pt-24 pb-16">
            <div className="flex flex-col gap-16 md:grid md:grid-cols-12 md:grid-rows-1 md:gap-4">
                <div className="col-span-12 h-auto md:col-span-7 pt-14">
                    <h1 className="font-urbanist text-5xl font-medium text-titles tracking-extraMedium mb-8">
                        Hi, eu sou <span className="font-urbanist font-semibold text-primary">Raphael Moreira</span>&nbsp;👋
                    </h1> 
                    <p className="font-dm-sans text-medium font-normal text-titles max-w-[500px] tracking-extraSmall mb-8">
                        Eu sou <span className="font-dm-sans text-inherit font-bold">programador web</span> brasileiro. Eu tenho paixão em criar aplicações para web. Este é o meu site, <span className="font-dm-sans text-inherit font-bold">Shadcn Playground</span> onde eu catalogo, compartilho e escrevo tutoriais…
                    </p>
                    <div className="w-full max-w-[500px]">
                        <h2 className="font-urbanist text-xl text-titles font-extrabold mb-4">⚡ Categorias</h2>
                        <HeroCategories 
                            categories={getHeroCategoriesData()}
                        />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <img src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/about-2.webp" 
                        decoding="async" 
                        alt="Man walk" 
                        className="w-full animate-morph" 
                        width="442" 
                        height="442" 
                    />
                </div>
            </div>
        </div>
    )
}