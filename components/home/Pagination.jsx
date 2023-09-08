const Pagination = () => {
    return (
        <div className="flex justify-between">
            <button
                type="button"
                className="bg-rose-400 dark:bg-rose-200 rounded-md px-5 py-3 font-semibold dark:text-black"
            >
                Previous
            </button>
            <button
                type="button"
                className="bg-rose-400 dark:bg-rose-200 rounded-md px-5 py-3 font-semibold dark:text-black"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
