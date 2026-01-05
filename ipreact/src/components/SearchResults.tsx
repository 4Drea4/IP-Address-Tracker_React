import type { SearchResultsProps } from "../types";

export default function SearchResults ({data}: SearchResultsProps) {
    if (!data) {
        return null;
    }
    return (
        <section className="resultsSection">
            <div className="resultsDiv">
                <div>
                <h3 className="label">Ip Address</h3>
                <p className="resultResponse">{data.ip}</p>
                </div>
            
            </div>
            <div>
                <h3 className="label">Location</h3>
                <p className="resultResponse">{data.location.city}, {data.location.country}</p>
            </div>
            <div>
                <h3 className="label">Timezone</h3>
                <p className="resultResponse">{data.timezone}</p>
            </div>
            <div>
                <h3 className="label">ISP</h3>
                <p className="resultResponse">{data.isp}</p>
            </div>
        </section>
    )
}