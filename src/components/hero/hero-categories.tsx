import { NavLink } from "react-router-dom"
import { HeroCategoriesItemProps } from "../../types/hero-categories-item"

export const HeroCategories = ({ categories }: {categories: HeroCategoriesItemProps[]}) => {
    return (
        <div className="w-full flex flex-wrap justify-start gap-3 lg:gap-0 lg:justify-around gap-y-4">
        {categories.map((item, key) => (
            <NavLink  to={item.link} key={`link-${key}`}>
                <HeroCategoriesItem 
                    link={item.link}
                    color={item.color}
                    image={item.image}
                    text={item.text}
                />
            </NavLink>
        ))
        }
        </div>
        
    )
}
const HeroCategoriesItem = ({color, image, text}: HeroCategoriesItemProps) => {
    return (
        <div className="flex flex-col items-center gap-3 py-4 px-6 bg-white rounded-xl border border-solid border-border shadow-rap-boxes-shadow hover:bg-code group cursor-pointer">
            <img src={image.url} 
                alt={image.alt} 
                className={`w-14 h-14 rounded-rap-large ${color}`} 
            />
            <p className="group-hover:text-white font-dm-sans text-small font-bold text-titles capitalize">{text}</p>
        </div>
    )
}