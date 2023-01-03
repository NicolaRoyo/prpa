import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';


const widgets = () => {
    return (
        <div className="widgets">
            <div className="search_area">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </div>

        </div>
    )
}
export default widgets;
