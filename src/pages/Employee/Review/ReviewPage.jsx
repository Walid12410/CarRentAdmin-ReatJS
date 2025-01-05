import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyReview, fetchCompanyReviewCount } from "../../../redux/api/reviewApiCall";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import Pagination from "../../../components/Pagination";
import ReviewCard from "../../../components/ReviewCard";

const ReviewPage = () => {

    const { companyreview, loadingCompanyReview,
        companyReviewCount
    } = useSelector(state => state.review);

    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil((companyReviewCount?.reviewCount ?? 1) / 6);

    useEffect(() => {
        dispatch(fetchCompanyReview(currentPage));
        window.scrollTo(0, 0);
    }, [dispatch, currentPage]);

    useEffect(() => {
        dispatch(fetchCompanyReviewCount());
    }, [dispatch]);



    return (
        <div className="flex">
            {/* Sidebar */}
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}>
                {/* Header */}
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />

                {/* Review Cards */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {!loadingCompanyReview ? (
                        companyreview?.length > 0 ? (
                            companyreview.map(review => (
                                <ReviewCard review={review} key={review._id} />
                            ))
                        ) : (
                            <div className="text-gray-500 text-center col-span-full">
                                No reviews added yet.
                            </div>
                        )
                    ) : (
                        <div className="loading-spinner"></div>
                    )}
                </div>
                {/* Pagination */}
                <div className="mt-auto flex justify-center items-center py-4">
                    <Pagination
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
