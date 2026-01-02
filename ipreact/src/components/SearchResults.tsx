import type { SearchResultsProps } from "../types";

export default function SearchResults ({data}: SearchResultsProps) {
    if (!data) {
        return null;
    }
    return (
        <section className="ipInfo">
            <div>
                <h3>Ip Address</h3>
                <p>{data.ip}</p>
            </div>
            <div>
                <h3>Location</h3>
                <p>{data.location.city}, {data.location.country}</p>
            </div>
            <div>
                <h3>ISP</h3>
                <p>{data.isp}</p>
            </div>
        </section>
    )
}