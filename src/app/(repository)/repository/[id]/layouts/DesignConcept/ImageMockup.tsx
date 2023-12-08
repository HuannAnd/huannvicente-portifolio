import { forwardRef } from "react"

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> { initialScale?: number }
const CustomImage = (({ initialScale = .8, ...rest }: CustomImageProps, ref: React.ForwardedRef<HTMLImageElement>) => <img {...rest} ref={ref} style={{ scale: initialScale }} className="@desktop:h-full @mobileAndTablet:w-full object-cover even:relative @desktop:even:top-4 rounded" />)

export default forwardRef(CustomImage)