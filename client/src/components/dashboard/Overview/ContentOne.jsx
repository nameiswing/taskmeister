import css from "../styles/dashboard-overview.module.css";

const ContentOne = () => {
    return (
        <div className={`${css.content_one} css-shadow-sm p-4 h-50`}>
            <h2 className="mb-3">
                <span>Active Project:</span>
                <b className="ms-2">Taskmeister</b>
            </h2>
            <h3>Summary:</h3>
        </div>
    )
}

export default ContentOne
