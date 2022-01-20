import React from 'react'
import "./styles.less"

const PageEdit = (props) => {
    const { children } = props
    return (
        <div className="page-type-edit">
            {children}
        </div>
    );
}

export default PageEdit;