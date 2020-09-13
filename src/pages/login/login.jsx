import React from 'react';
const Login = () => {
    return (
        <div className = "login">

            {/* 登录页头部模块 */}
            <div className = "login-header" style = {{backgroudcolor: "pink"}}>
                <h1>全球支付中台</h1>
            </div>

            {/* 登录页主体部分 */}
            <div className = "login-content">
                <h2>用户登录</h2>
                <div>from表单</div>

            </div>

        </div>

    )
}

export default Login;
