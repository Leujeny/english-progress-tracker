export default function StatsList() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16 xl:gap-32 mb-4">
            <div className="stats shadow bg-base-100 col-span-2 md:col-span-1">
                <div className="stat place-items-center">
                    <div className="stat-title">Listened episodes</div>
                    <div className="stat-value">15</div>
                    <div className="stat-desc">+ 2 today</div>
                </div>
            </div>
            <div className="stats hidden md:block shadow bg-base-100 col-span-2 md:col-span-1">
                <div className="stat place-items-center">
                    <div className="stat-title">Listened time</div>
                    <div className="stat-value">2h30</div>
                    <div className="stat-desc">+ 12min today</div>
                </div>
            </div>
            <div className="stats hidden lg:block shadow bg-base-100 col-span-2 md:col-span-1">
                <div className="stat place-items-center">
                    <div className="stat-title">Average level</div>
                    <div className="stat-value">6/10</div>
                    <div className="stat-desc">↗︎ 1</div>
                </div>
            </div>
            <div className="stats hidden lg:block shadow bg-base-100 col-span-2 lg:col-span-1">
                <div className="stat place-items-center">
                    <div className="stat-title">Learned words</div>
                    <div className="stat-value">20</div>
                    <div className="stat-desc">+ 2</div>
                </div>
            </div>
        </div>
    );
}
