export default function TopContainer(){
    return (
        <div>
            <form action="" method="POST" className="form">
                <input type="text" className="form--input" placeholder="Top Input "/>
                <input type="text" className="form--input" placeholder="Bottom Input"/>
                <button className="form--button">Get A New Meme Image</button>
            </form>
        </div>
    )
}