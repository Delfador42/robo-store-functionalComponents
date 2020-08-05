import React from 'react'
import CardList from './CardList'
import Search from './SearchBox'
import Top from './Top'
function App(){
return(
    <div >
    
        <Top/>
        
        <div className="  mb3 ">
        <Search />
        </div>

        <div>
        <CardList/>
        </div>

    </div>
    
    );
}

export default App