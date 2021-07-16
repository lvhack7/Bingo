import PaginationButtons from "./PaginationButtons";

function SearchResults({results}) {
    return (
        <div className="ml-38 p-5 text-sm">
            <p className="text-gray-600 text-md mb-5 mt-3">Found {results.searchInformation?.formattedTotalResults}</p>
            {results.items?.map((result) => ( 
                <div key={result.link} className="mx-auto max-w-xl mb-8">
                    <div>
                        <a href={result.link}>
                            <h2 className="truncate text-lg text-blue-700 font-medium hover:underline">{result.title}</h2>
                        </a>
                        <a href={result.link} className="truncate text-green-800 text-xs">
                            {result.formattedUrl}
                        </a>
                    </div>
                    <p className='line-clamp-2'>{result.snippet}</p>
                </div>

            ))}
            <PaginationButtons/>
        </div>
    )
}

export default SearchResults
