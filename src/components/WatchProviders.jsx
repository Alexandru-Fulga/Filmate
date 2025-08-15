const WatchProviders = ({ providers }) => {
    if (!providers || Object.keys(providers).length === 0) {
        return <p className="text-gray-100">No streaming information available.</p>;
    }

    // Get EN providers first, fallback to first available country
    const countryData = providers.EN || Object.values(providers)[0];

    if (!countryData) return null;

    const { flatrate, rent, buy } = countryData;

    return (
        <div className="watch-providers">
            {flatrate && (
                <div className="provider-section">
                    <h4>Stream</h4>
                    <div className="provider-list">
                        {flatrate.map((provider) => (
                            <div key={provider.provider_id} className="provider-item">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                    alt={provider.provider_name}
                                    title={provider.provider_name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {rent && (
                <div className="provider-section">
                    <h4>Rent</h4>
                    <div className="provider-list">
                        {rent.map((provider) => (
                            <div key={provider.provider_id} className="provider-item">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                    alt={provider.provider_name}
                                    title={provider.provider_name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {buy && (
                <div className="provider-section">
                    <h4>Buy</h4>
                    <div className="provider-list">
                        {buy.map((provider) => (
                            <div key={provider.provider_id} className="provider-item">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                    alt={provider.provider_name}
                                    title={provider.provider_name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WatchProviders;