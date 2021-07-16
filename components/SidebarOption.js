function SidebarOption({Icon, title, selected}) {
    return (
        <div className={`flex items-center space-x-2 pb-3 border-b-2 border-transparent
            hover:text-red-500 hover:border-red-500 cursor-pointer ${selected && "text-red-500 border-red-500"}`}>
            <Icon className="h-6"/>
            <p >{title}</p>
        </div>
    )
}

export default SidebarOption
