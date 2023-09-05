const ReportHistory = () => {
    return(
        <div className="reportHistory">
            <h3>Thanks for reporting</h3>
            <p>Any member of the HelloTube community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it's not automatically taken down. Flagged content is reviewed in line with the following guidelines:</p>
            <ul>
                <li>Content that violates our <span className="blue">Community Guidelines</span> is removed from HelloTube.</li>
                <li>Content may not be appropriate for all younger audiences may be age-restricted.</li>
                <li>Reports filed for content that has been deleted by the creator cannot be shown.</li>
            </ul>
            <p className="blue">Learn more about reporting content on HelloTube.</p>
            <div>
                <select name="reports" id="reports">  
                    <option value="pastMonth">Path Month</option>
                    <option value="pastYear">Past Year</option>
                    <option value="all" selected>All</option>
                </select>
                <p>You haven't submitted any reports.</p>
            </div>
        </div>
    )
}

export default ReportHistory;