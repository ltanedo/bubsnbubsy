import Jumbotron from "./Jumbotron"

export default function(props) {
    return (
        <>
        <Jumbotron title={"Our Partners"}
        text={"Check out friends who make great entertaining content!!!"}/>

        <div class="row pb-4 ml-3 mr-3">
            <div class="col">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iU5WdcBfoMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>              
                </div>
            </div>
        </div>

        <div class="row ml-3 mr-3">
            <div class="col">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CpsqqdfnYS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
            </div>
        </div>
        </>
    )
}
