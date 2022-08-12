import React from "react"; 
import MiniShop from "../components/Homepage/MiniShop";
import '../sass/pages/Home.scss'
import video from '../assets/video/champagne.mp4'
import logo from '../assets/logo/logo-name.png'

function Home () {

    return (
        <main className="homepage">
            <figure>
                <div>
                    <p>En Champagne, dans l'Aube, au coeur de la côte des bars, 
                        à Bar sur Aube, notre famille a toujours cultivé l'art de la vigne et l'élaboration du champagne. 
                        L'exploitation de nos terres est répartie sur 6 hectares, avec un savoir faire ancestral transmis de génération en génération.
                    </p>
                </div>
                <video autoPlay loop muted src={video}></video>
                <img src={logo} alt="" />
            </figure>
            <MiniShop />
        </main>
    )
}

export default Home