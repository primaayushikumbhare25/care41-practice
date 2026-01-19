import data from "./community.json"

function Community () {
    return(
        <div className = "community" >
            <h1 className = "community-heading">{data.title}</h1>
        </div>
    )
}
export default Community;
