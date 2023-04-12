export default function Calendar({isHovered, color, colorHover}) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} fill="none">
            <path
                fill={isHovered ? colorHover : color}
                d="M6.222 14.4h3.111v3.2h-3.11v-3.2ZM28 6.4v22.4c0 1.76-1.4 3.2-3.111 3.2H3.11C1.384 32 0 30.56 0 28.8L.016 6.4c0-1.76 1.368-3.2 3.095-3.2h1.556V0h3.11v3.2h12.445V0h3.111v3.2h1.556C26.6 3.2 28 4.64 28 6.4ZM3.111 9.6H24.89V6.4H3.11v3.2ZM24.89 28.8v-16H3.11v16H24.89Zm-6.222-11.2h3.11v-3.2h-3.11v3.2Zm-6.223 0h3.112v-3.2h-3.112v3.2Z"
            />
        </svg>)
}
