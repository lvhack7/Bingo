import Head from 'next/head'
import Header from '../components/Header'
import SidebarOptions from '../components/SidebarOptions'
import Response from '../Response'
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults'
import {API_KEY, CONTEXT_KEY} from '../keys'

function Search({results}) {
    const router = useRouter()
    
    return <div className="overflow-y-hidden">
        <Head>
            <title>{router.query.term} - Bingo search</title>
        </Head>
        <Header />
        <div className="flex sm:flex-row flex-col sm:pt-16 items-start">
            <SidebarOptions/>
            <SearchResults results={results}/>
        </div>
    </div>
}

export default Search

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "0"

    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
        &cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json())

    return {
        props: {
            results: data
        }
    }
}