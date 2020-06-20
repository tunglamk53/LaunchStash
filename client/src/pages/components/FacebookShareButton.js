import React from 'react'

const FaceBookShareButton = () => {

    const iframe = '<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Flit-refuge-83472.herokuapp.com%2F&layout=button&size=large&appId=3133944153329433&width=77&height=28" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'

    return (
        <>
            <div className='btn-lg' dangerouslySetInnerHTML={ {__html: iframe} } />
        </>
    )
}

export default FaceBookShareButton