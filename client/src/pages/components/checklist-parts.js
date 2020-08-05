import React from 'react'

const ChecklistParts = (props) => (
    <div class="container-fluid mt-4">
        <div class="row">

            <div class="itemContainer col-xl-3 col-6" onClick={() => props.setClickedItem('Pre-Launch')}>
                    {props.clickedItem==='Pre-Launch' ? 
                    <div class="checkListItem" >
                        <div class="top bg-success"></div>
                        <div class="bottom bg-success"></div>
                        <div class="text" >Pre-Launch</div>
                    </div>
                        :
                    <div class="checkListItem" >
                        <div class="top"></div>
                        <div class="bottom"></div>
                        <div class="text" >Pre-Launch</div>
                    </div>
                    }
            </div>

            <div class="itemContainer col-xl-3 col-6" onClick={() => props.setClickedItem('Beta Access')}>
                    {props.clickedItem==='Beta Access' ? 
                    <div class="checkListItem" >
                        <div class="top bg-success"></div>
                        <div class="bottom bg-success"></div>
                        <div class="text" >Beta Access</div>
                    </div>
                        :
                    <div class="checkListItem" >
                        <div class="top"></div>
                        <div class="bottom"></div>
                        <div class="text" >Beta Access</div>
                    </div>
                    }
            </div>

            <div class="itemContainer col-xl-3 col-6" onClick={() => props.setClickedItem('Launch')}>
                    {props.clickedItem==='Launch' ? 
                    <div class="checkListItem" >
                        <div class="top bg-success"></div>
                        <div class="bottom bg-success"></div>
                        <div class="text" >Launch</div>
                    </div>
                        :
                    <div class="checkListItem" >
                        <div class="top"></div>
                        <div class="bottom"></div>
                        <div class="text" >Launch</div>
                    </div>
                    }
            </div>

            <div class="itemContainer col-xl-3 col-6" onClick={() => props.setClickedItem('After Launch')}>
                    {props.clickedItem==='After Launch' ? 
                    <div class="checkListItem" >
                        <div class="top bg-success"></div>
                        <div class="bottom bg-success"></div>
                        <div class="text" >After Launch</div>
                    </div>
                        :
                    <div class="checkListItem" >
                        <div class="top"></div>
                        <div class="bottom"></div>
                        <div class="text" >After Launch</div>
                    </div>
                    }
            </div>

        </div>
    </div>
)

export default ChecklistParts