import React from "react";
import ArticleCard from "./ArticlesCard";
import '../../sass/components/homepage/MiniShop.scss'

function MiniShop () {

    return (
        <section id="miniShop">
            <h2>La Boutique</h2>
            <div className="articlesContainer">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </section>
    )

}
export default MiniShop