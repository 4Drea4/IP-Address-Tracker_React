import type { SearchBarProps } from "../types";

export default function SearchBar({
    ip,
    setIp,
    onSubmit,
    loading,
    error,
}: SearchBarProps) {
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

    if(!e.currentTarget.checkValidity()){
        e.currentTarget.reportValidity();
        return;
    }
    onSubmit(ip.trim());

    }
    return (
        <form className="searchForm" onSubmit={handleSubmit}>
           <label htmlFor="ip-input" className="search" >Search for an IP 
           </label>
           <div className='searches'>
           <input
           className="searchInput"
           id="ip-input"
           value={ip}
           onChange={(e) => setIp(e.target.value)}
           placeholder="Search for IP address here"
           required pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
           title="Enter a valid IP address"
           autoComplete="off"
        />

        <button className="searchButton" type="submit" disabled={loading}>
            {loading ? "..." : ">"}
        </button>
        </div>
        {error && (
            <p className="errorText" aria-live="polite">
                {error}
            </p>
        )}
        </form>
    );
}