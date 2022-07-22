import React from "react";
import MeunItem from "../menu-item/menu-item.component";
import '../directory-menu/directory-menu.style.scss'




class Directory extends React.Component{

    constructor(){
        super()


        this.state ={
            section: [
                {
                    id: 1,
                    title:'Hats',
                    link: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

            },
            {
                id: 2,
                title:'Jackets',
                imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

            },
            {
                id: 3,
                title:'Snaekers',
                imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

            },
            {
                id: 4,
                title:'Women',
                imageUrl: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                size:'large'

            },
            {
                id: 5,
                title:'Men',
                imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                size: 'large'

            }
        
        ]
        }
    }




    render() {
        return(
            <div className="directory-menu">
                {this.state.section.map(({title, id, imageUrl, size, link}) =>
                    (
                        <MeunItem title={title} key={id} imageUrl={imageUrl} size={size} link={link}/>
                    ))
                }
                    
                
            
            
           
            </div>
        )
        
    }
}

export default Directory;