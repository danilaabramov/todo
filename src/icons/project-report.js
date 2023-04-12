export default function ProjectReport({isHovered, color, colorHover}) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} fill="none">
            <path
                fill={isHovered ? colorHover : color}
                d="M15.95 0v4.405c4.916.712 8.7 4.927 8.7 10.059 0 1.308-.261 2.543-.696 3.692l3.77 2.224A14.386 14.386 0 0 0 29 14.464C29 6.934 23.273.727 15.95 0ZM14.5 24.64c-5.611 0-10.15-4.55-10.15-10.176 0-5.132 3.784-9.347 8.7-10.06V0C5.713.727 0 6.92 0 14.464 0 22.488 6.481 29 14.486 29c4.799 0 9.047-2.34 11.686-5.945l-3.77-2.224a10.07 10.07 0 0 1-7.902 3.808Z"
            />
        </svg>)
}
