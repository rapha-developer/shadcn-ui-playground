export type GalleryItemProps = {
    title: string
    description: string
    category: {
        text:  "CSS" | "components" | "block" | "guias"
        color: '#3aa9fd' | '#ff2ed9' | '#227dff' | '#6A4EE9'
        url: string
    },
    url: string
}