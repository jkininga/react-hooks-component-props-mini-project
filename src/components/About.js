export default function About({image ="https://via.placeholder.com/215Links", about}){

    return(

        <aside>
       <img src = {image} alt ="blog logo"></img>
       <p>{about}</p>

        </aside>
    )
}