import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview, fetchReviewCount } from "../../../redux/api/reviewApiCall";
import Pagination from "../../../components/Pagination";
import ReviewCard from "../../../components/ReviewCard";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";


const ReviewAdmin = () => {

    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { reviews, loading, error, countReview } = useSelector(
        (state) => state.review
    );
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(countReview?.reviewCount / 6);

    useEffect(() => {
        dispatch(fetchReview(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(fetchReviewCount());
    }, [dispatch]);


    return ( 
        <div className="flex">
            {/* Sidebar */}
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}>
                {/* Header */}
                <AdminHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />

                {/* Review Cards */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {!loading ? (
                        reviews?.length > 0 ? (
                            reviews.map(review => (
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
}
 
export default ReviewAdmin;