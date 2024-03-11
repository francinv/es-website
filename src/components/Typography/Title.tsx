interface TitleProps {
    children: any;
    className?: string;
}

const Title = ({children, className}: TitleProps) => {
    return (
        <h1 className={`text-4xl font-semibold ${className}`}>{children}</h1>
    )
}

export default Title;
