import React from "react";
import { List } from "antd";
import "./AppList.less";

const AppList = (props) => {
    const { dataSource, renderItem, loading, header } = props;

    return (
        <div className='appList'>
            <List
                dataSource={dataSource}
                renderItem={renderItem}
                loading={loading}
                header={header}
            />
        </div>
    );
};

export default AppList;
