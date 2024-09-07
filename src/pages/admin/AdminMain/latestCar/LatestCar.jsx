import "./latest-car.css";

const LatestCar = () => {
    return ( 
        <div className="report-container">
            <div className="report-header">
                <h1 className="recent-Articles">Latest Car Added</h1>
                <button className="view">View More</button>
            </div>

            <div className="report-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Year</th>
                            <th>Company</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Article 73</td>
                            <td>2020</td>
                            <td>2.9k</td>
                            <td>210</td>
                            <td>124124</td>
                            <td><span className="label-tag">Active</span></td>
                        </tr>
                        
                        <tr>
                            <td>Article 73</td>
                            <td>2020</td>
                            <td>2.9k</td>
                            <td>210</td>
                            <td>124124</td>
                            <td><span className="label-tag">Active</span></td>
                        </tr>
                        
                        <tr>
                            <td>Article 73</td>
                            <td>2020</td>
                            <td>2.9k</td>
                            <td>210</td>
                            <td>124124</td>
                            <td><span className="label-tag">Active</span></td>
                        </tr>
                        
                        <tr>
                            <td>Article 73</td>
                            <td>2020</td>
                            <td>2.9k</td>
                            <td>210</td>
                            <td>124124</td>
                            <td><span className="label-tag">Active</span></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default LatestCar;
