import React from "react";
function Home(){
     return (
            <div>
                <div className="add-to-cart">
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"/>
                </div>
                <h1>Home components 1</h1>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631776566/Croma%20Assets/Communication/Mobiles/Images/243463_wwwi8s.png/mxw_1440,f_auto"/>
                    </div>
                    <div className="text-wrapper item">
                        <span>
                            I-Phone
                        </span>
                        <span>Price : $10000</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button>add to cart</button>
                    </div>
                </div>
            </div>
     );
}

export default Home;