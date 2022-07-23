import React from "react";
import SHOP_DATA from "./shoppage.js";
import CollectionPreview from "../../component/collection-preivew/collection-preview.component.jsx";
import './shop_page.style.scss';


class ShopPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
    

        const  { collections } = this.state;
    
        return(
             <div className="shop-page">
                {collections.map(({id, ...otherProps}) =>(
                        <CollectionPreview key={id} {...otherProps}/> ))
                }
            </div>
        );
    }
}

export default ShopPage