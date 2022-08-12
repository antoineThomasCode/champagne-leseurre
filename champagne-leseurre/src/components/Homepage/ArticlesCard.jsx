import React from "react";
import bottle1 from '../../assets/products/noir_solo_detourage_v1.png';
import '../../sass/components/homepage/ArticleCard.scss'

function ArticleCard () {

    return (
        <article className="articleCard">
            <figure>
                <img src={bottle1} alt="Cuvée brut champagne gilles leseurre" />
            </figure>
            <div>
                <h3>Champagne brut </h3>
                <p>En stock <span></span></p>
                <button>Commander</button>
            </div>
        </article>
    )
}
export default ArticleCard