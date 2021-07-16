import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import PhotographIcon from '@heroicons/react/outline/PhotographIcon'
import VideoCameraIcon from '@heroicons/react/outline/VideoCameraIcon'
import SidebarOption from './SidebarOption'
import NewspaperIcon from '@heroicons/react/outline/NewspaperIcon'

function SidebarOptions() {
    return (
        <div  className="mt-16">
            <div className="flex flex-row text-gray-500  
                sm:flex-col sm:border-r-[1px] sm:border-b-0 border-b-[1px] sm:space-y-4 sm:space-x-0 sm:w-36 
                space-x-4 sm:pl-5 sm:pr-3 mt-8 sm:mt-0 justify-start pl-28 text-sm">
                <SidebarOption Icon={InformationCircleIcon} title="General" selected/>
                <SidebarOption Icon={PhotographIcon} title="Images"/>
                <SidebarOption Icon={VideoCameraIcon} title="Videos"/>
                <SidebarOption Icon={NewspaperIcon} title="News"/>
            </div>
        </div>
    )
}

export default SidebarOptions
