const BrandLogo = ({ compact = false, className = '' }) => (
    <div className={`flex items-center gap-2.5 ${className}`}>
        <div className={`flex items-center justify-center rounded-xl bg-[#1C2B1A] ${compact ? 'h-9 w-20' : 'h-14 w-32'} px-2`}>
            <img
                src="/sparkling-logo.png"
                alt="Sparkling Garden Restaurant"
                className="h-full w-full object-contain"
            />
        </div>
        {!compact && (
            <div>
                <p className="text-sm font-extrabold tracking-tight text-[#222222]">Sparkling Garden</p>
                <span className="text-[10px] uppercase tracking-wider text-[#818181] font-semibold">
                    Artisan Kitchen
                </span>
            </div>
        )}
    </div>
);

export default BrandLogo;
