import {useRouter} from 'next/router'
import Link from 'next/link'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'
import { ChevronRight } from '@material-ui/icons'

function PaginationButtons() {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0
    return (
        <div className="flex flex-grow justify-between max-w-lg mb-12 ">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex -10}`}>
                    <div className="flex flex-grow flex-row items-center cursor-pointer hover:underline text-red-500">
                        <ChevronLeftIcon className="h-5"/>
                        <p>Previous</p>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-grow flex-row items-center cursor-pointer hover:underline text-red-500">
                    <p>Next</p>
                    <ChevronRightIcon className="h-5"/>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons
