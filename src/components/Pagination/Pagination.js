const Pagination = ({ goToPrevPage, goToNextPage }) => {
    return (
        <div className="mt-5 mb-10 mx-auto w-4/5 flex justify-between items-center ">
            {goToPrevPage && <button className="py-2 px-4 bg-gray-900 text-white rounded" onClick={() => goToPrevPage()}>prev</button>}
            {goToNextPage && <button className="py-2 px-4 bg-gray-900 text-white rounded" onClick={() => goToNextPage()}>next</button>}
        </div>
    )
}

export default Pagination;