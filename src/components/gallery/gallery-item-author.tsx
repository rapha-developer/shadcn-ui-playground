import { NavLink } from "react-router-dom"

export const GalleryItemAuthor = () => {
    const itemAuthorData = galleryItemAuthorData()
    return (
        <NavLink to={itemAuthorData.navLink} target="_blank">
            <div className="gallery-item-author flex items-center gap-2">
                    <img src={itemAuthorData.image.url} 
                        alt={itemAuthorData.image.alt} 
                        className="w-6 h-6 rounded-full"
                    />
                    <span className="font-urbanist font-medium text-sm tracking-extraSmall text-titles capitalize hover:text-primary">
                        {itemAuthorData.name}
                    </span>
            </div>
        </NavLink>
    )
}
function galleryItemAuthorData(
    navLink = "https://github.com/rapha-developer/", 
    url = '/avatar-1-1.webp',
    alt = 'Avatar profile (man walk)',
    name = 'Rapha developer'
)  {
    return {
        navLink: navLink,
        image: {
            url: url,
            alt: alt,
        },
        name: name
    }
}