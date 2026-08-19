import "./AppDownloadButtons.css"
const AppDownloadButtons = () => {
    return (
        <div className="app-download-buttons">
            <a className="app-download-link" href="https://itunes.apple.com/us/app/supercuts/id529129647?mt=8">
                <img src="/apple_app_store.svg" alt="download on appstore"/>
            </a>
            <a className="app-download-link" href="https://play.google.com/store/apps/details?id=com.supercuts.app&hl=en">
                <img src="/google_play_store.svg" alt="get it on google play"/>
            </a>
        </div>
    );
};
export default AppDownloadButtons;