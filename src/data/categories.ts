import { HeroCategoriesItemProps } from "../types/hero-categories-item"

export function getHeroCategoriesData(): HeroCategoriesItemProps[] {
    return [
        {
            link: '/',
            color: "bg-[#3aa9fd]",
            image: {
                url: "https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/css-icon.png",
                alt: "CSS Logo Icon"
            },
            text: "CSS"
        },
        {
            link: '/',
            color: "bg-[#ff2ed9]",
            image: {
                url: "https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/deploy-icon.png",
                alt: "Css Logo Icon"
            },
            text: "Componentes"
        },
        {
            link: '/',
            color: "bg-[#227dff]",
            image: {
                url: "https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/tech-icon.png",
                alt: "Technology Logo Icon"
            },
            text: "Bloco"
        },
        {
            link: '/',
            color: "bg-[#6A4EE9]",
            image: {
                url: "https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/guides-icon.png",
                alt: "Book (livro) icon"
            },
            text: "Guias"
        }
    ] 
}