import React from "react";

const HomePage = (props) => {

    const onClickCheckList = () => {
        props.history.push('/checklist');
    }

    return (
        <>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h1>THE HOME PAGE</h1>

            <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={onClickCheckList}
            >
            CREATE CHECKLIST
            </button>

        {console.log(localStorage.getItem("myToken"))}

            </div>
        </div>
        </>
    )
}

export default HomePage
